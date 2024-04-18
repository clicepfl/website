#!/bin/sh

echo "[INFO] Creating data model snapshot"

docker exec -it clic-directus npx directus schema snapshot /share/snapshot.yaml -y



echo "[INFO] Generating typescript declarations"

docker exec -u root -it clic-directus npx directus-typescript-gen --email clic@epfl.ch --password 1234 -h http://127.0.0.1:8055 -o /share/schema.d.ts
mv directus/schema.d.ts app/src/types/schema.d.ts

# Hard fix for singleton elements
sed -i -e 's/association: components\["schemas"\]\["ItemsAssociation"\]\[\]/association: components\["schemas"\]\["ItemsAssociation"\]/' app/src/types/schema.d.ts

npx prettier --write app/src/types/schema.d.ts directus/snapshot.yaml

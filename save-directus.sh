#!/bin/sh

echo "[INFO] Creating data model snapshot"
docker exec -it clic-directus npx directus schema snapshot /share/snapshot.yaml -y
echo "[INFO] Generating typescript declarations"
docker exec -it clic-directus npx directus-typescript-gen --email clic@epfl.ch --password 1234 -h http://localhost:8055 -y > app/src/types/schema.d.ts
npx prettier --write app/src/types/schema.d.ts directus/snapshot.yaml

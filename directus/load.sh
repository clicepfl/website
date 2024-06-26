wget https://raw.githubusercontent.com/clicepfl/clic-website-v2/directus-dev/directus/snapshot.yaml -O snapshot.yaml
npx directus schema apply snapshot.yaml -y
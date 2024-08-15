wget https://raw.githubusercontent.com/clicepfl/clic-infra/main/roles/directus/files/snapshot.yaml -O snapshot.yaml
npx directus schema apply snapshot.yaml -y
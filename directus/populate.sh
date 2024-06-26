docker exec -i clic-postgres sh --user directus_user directus_data < .directus/dump.sql
docker restart clic-directus
docker exec -it clic-postgres pg_dump -U directus_user --column-inserts --data-only directus_data > directus/new-dump.sql
echo '[INFO]: Database dump saved at "directus/new-dump.sql"'
echo '[INFO]: Please make sure to remove undesired inserts (e.g. in the directus_activity table) before committing it'
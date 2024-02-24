Saving to VCS with snapshots:

- mount `/directus` into the docker
- periodically run `npx directus schema snapshot ./snapshot.yaml` from within the directus container
- save `/directus/snapshot.yaml` to VCS

Readonly token:

- create user for app (no email/password)
- create role and add read accesses
- create token for user

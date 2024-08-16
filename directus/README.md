# Directus

Directus is the content management system used for the website, as well as a few other services. It is ran in a separate Docker container. The schema of the data it manages is stored on the [infrastructure repo](https://github.com/clicepfl/clic-infra).

## Developpement

Once the stack has been deployed (see [this](../README.md)), you can import the data schema using `npm run load-directus`, then populate it using sample data with `npm run populate-directus`. You only need to do this once, or if you have deleted Directus' data volume.

You can access the admin panel at http://localhost/directus (username: `clic@epfl.ch`, password: `1234`). There, you can update the data, or modify the schema (see below).

### Modifying the schema

If you wish to change the schema, you can do it on your local instance admin panel, then export it using `npm run save-directus`. It will create a `snapshot.yaml` file in the `directus/` folder. You should then upload this file to the [infrastructure repo](https://github.com/clicepfl/clic-infra) through a PR. You will also need to commit `app/src/types/schema.d.ts` and you may add aliases for useful types in `app/src/types/aliases.ts`.

You may also want to update the sample data: the files are automatically saved in `directus/uploads/`, and you can generate a dump of Directus' database using `npm run save-directus-data`, which will write into `directus/new-dump.sql`. Then, copy the relevant insertions in the `directus/dump.sql` (take care of the order, to avoid constraint error during populate).

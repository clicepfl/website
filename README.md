# Clic Website V2

This repository contains the second version of the [CLIC](https://clic.epfl.ch)'s website.

## Content

### App

The website's code is located in the `/app` directory. It uses [NextJS](https://nextjs.org/), a [React](https://react.dev/)-based framework to provide a single page application, coupled with [SCSS](https://sass-lang.com/documentation/syntax/#scss) for styling.

The React components are located in the `components` directory, while the website pages are in the `pages` directory (see NextJS's documentation about [routing](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)).

To fetch data from Directus, it should be done on server-side, using the [`directus()`](./app/src/directus.ts) to generate a handle to call Directus' API (https://docs.directus.io/guides/sdk/getting-started.html) object in `directus.ts`. To achieve that, the page's file must also export a [`getServerSideProps()`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props) function. The `directus` object is not usable on client side, since its token is restricted to the server.

### Directus

To store and provide dynamic content, we use the service [Directus](https://directus.io/), which acts as a content management server.

Directus is ran separately from the website in the infrastructure, but launching the website's dev container will run a local instance. Before using it you need to load the data model using `npm run load-directus` and populate it with some data using `npm run populate-directus`.

You can update the content or the data model at http://localhost/directus (username: `clic@epfl.ch`, password: `1234`). When done, use `npm run save-directus` to save the data model, and `npm run save-data` to dump the database. However, make sure to remove all unused data (like the `directus_activity` table), and that the instance can be booted and initialized from scratch without errors.

### Assets

All the assets should be managed by Directus when pertinent/possible. For example, the CLIC's logo is stored in the Association entry of Directus, instead of having its SVG in the `assets/` directory.

However, the background of the website is not managed by Directus, since it is not considered a content of the website. **Note:** In this example, the background svg is imported in the `.tsx` using NextJs default image loader, instead of the SVGR loader. This is because the background is handled by the CSS `background` properties, which require the image's url, instead of content.

To import SVG files from the `assets/` directory, they should be imported into the `.tsx` file, and used as React components. They have no type declaration, but you can add any attributes appliable to a `<svg>` tag. **Note:** as for all React components, the `class` attribute is renamed to `className`.

### Internationalization (i18n)

I18n is achieved via a coupling of a homemade API and Directus's own i18n management.

When fetching data, you need to add a few parameters in the Directus' API call. In the `fields` attribute, you need to specify which field from the queried objects you need, and which fields from the translations. To simplify this, you can use the `queryTranslations` object in `locales.ts` as query parameters, or for extending your query parameters (`{<your params>, ...queryTranslations}`). The latter does not work if your initial parameters do already contain a `fields` entry.

For small or dynamic pieces of text, like date formatting, or titles not bound to a specific entries (like the `News` title in the `/news` page). It contains a dictionary of specific words/sentences for each used locale, as well as options to format them (e.g. capitalization).

The current locale can be recovered either from the `context` parameter in `getServerSideProps()` (`context.locale`) or a router yielded by `useRouter()` in a React component (`router.locale`). Transitions between locales can either be achieved by using a router or a link, see the [documentation](https://nextjs.org/docs/pages/building-your-application/routing/internationalization#transition-between-locales).

## Setup

It is recommended to use VSCode, with the following extensions:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

You will also need:

- [Docker](https://www.docker.com/).
- [Node Package Manager](https://www.npmjs.com/)
- [Node Package Executor](https://www.npmjs.com/package/npx)

After installing all dependencies, you need to run:

```sh
npm install
npm run prepare
```

## Development

The development is done in the `/app` directory for the website, or from Directus admin UI, on `http://localhost/directus`.

In order to run the server, use docker and run the compose file in the `/.devcontainer` directory:

```sh
docker compose --file .devcontainer/docker-compose.yaml up
```

**Note:** For VSCode users, there are two tasks, under `Terminal > Run tasks...`, to both start and stop the server. The start task is automatically run when you open the directory.

When editing the website, modifications will immediately be visible, without reloading the page or restarting the server.

All services are ran behind a [Caddy](https://caddyserver.com/) reverse proxy, mounted on port 80. The associated config is found in the `/caddy` directory (note: this is not the production config).

### Code conventions

The code must be formatted with Prettier (using `npx prettier --write <directory>`). This will be checked by a hook upon commit.

The commit message must follow [conventional commits convention](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13). This is both checked by a local hook and by the CI.

Style scss must be imported into code files and classnames must not be referenced in clear.

## Deployment

After a push on the main branch, the website is automatically built into a docker image, and pushed to [GHRC](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry). When opening or pushing to a pull-request on the main branch, the images are also built, but not pushed, for sanity check.

The rest of the deployment is done by a dedicated [repository](https://github.com/clicepfl/clic-website-v2-infra).

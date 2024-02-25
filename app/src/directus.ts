import { Schema } from "./types/schema";
import { createDirectus, rest, staticToken } from "@directus/sdk";

/**
 * Creates a handle to use Directus' API. See the [official documentation](https://docs.directus.io/guides/sdk/getting-started.html).
 *
 * May only be called server-side (e.g. in [`getServerSideProps()`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)).
 *
 * @returns a handle to Directus' API.
 */
export const directus = () =>
  createDirectus<Schema>(process.env.DIRECTUS_URL || "")
    .with(staticToken(process.env.DIRECTUS_TOKEN || ""))
    .with(rest());

import { Schema, components } from "./types/schema";
import { createDirectus, rest, staticToken } from "@directus/sdk";

// URL to access Directus from server side. Used to query the Directus instance (also see `directus()` below).
export const INTERNAL_DIRECTUS_URL = process.env.DIRECTUS_URL as string;
// URL to access Directus from client side. Used for images.
export const PUBLIC_DIRECTUS_URL = process.env
  .NEXT_PUBLIC_DIRECTUS_URL as string;

/**
 * Creates a handle to use Directus' API. See the [official documentation](https://docs.directus.io/guides/sdk/getting-started.html).
 *
 * May only be called server-side (e.g. in [`getServerSideProps()`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)).
 *
 * @returns a handle to Directus' API.
 */
export function directus() {
  const directus = createDirectus<Schema>(INTERNAL_DIRECTUS_URL).with(rest());

  return (process.env.DIRECTUS_TOKEN || "") !== ""
    ? directus.with(staticToken(process.env.DIRECTUS_TOKEN as string))
    : directus;
}

/**
 * Computes the full URL to access an image returned by the Directus instance,
 * or `undefined` if no image is given.
 * @param image the image object returned by directus
 * @returns the full URL of the image, if any
 */
export function getDirectusImageUrl(
  image: string | components["schemas"]["Files"] | null | undefined
): string | undefined {
  return image
    ? `${PUBLIC_DIRECTUS_URL}/assets/${
        typeof image === "string" ? image : image.filename_disk
      }`
    : undefined;
}

/**
 * Computes the full URL to access an image in a format appropriate for an OG property.
 * @param image the image object returned by directus
 * @returns the full URL of the image, if any
 */
export function getDirectusOgImageUrl(
  image: string | components["schemas"]["Files"] | null | undefined
): string | undefined {
  return image
    ? `/api/og-image?id=${
        typeof image === "string" ? image : image.filename_disk
      }`
    : undefined;
}

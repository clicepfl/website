import { TranslationTable, getTranslation } from "./locales";
import { Association, Commission, SocialLink } from "./types/aliases";
import { Schema, components } from "./types/schema";
import {
  createDirectus,
  readItems,
  readSingleton,
  readTranslations,
  rest,
  staticToken,
} from "@directus/sdk";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

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

export type LayoutProps = {
  layoutProps: {
    association: Association;
    socialLinks: SocialLink[];
    commissions: Commission[];
    langs: string[];
    translations: TranslationTable;
  };
};
/**
 * Adds additional props to a getServerSideProps function - when it is successful. Those props are used by the layout components, e.g. the navigation bar and footer.
 * @param f Your getServerSideProps function. If it returns successfully, its output props will be populated with layout props.
 * @returns the getServerSideProps function to export from your component.
 */
export function populateLayoutProps<T>(
  //@ts-ignore
  f?: GetServerSideProps<T>
): GetServerSideProps<T & LayoutProps> {
  return cleanTranslations(async (context: GetServerSidePropsContext) => {
    let association = await directus().request(
      readSingleton("association", {
        fields: ["email", "logo", "phone", "address", "name"],
      })
    );

    let socialLinks = await directus()
      .request(
        readItems("association_social_links", {
          fields: [{ social_links_id: ["*"] }],
        })
      )
      .then((result) => result.map((s) => s.social_links_id));

    let langs = await directus().request(readItems("languages"));

    let commissions = await directus().request(
      readItems("commissions", { fields: ["slug", "name"] })
    );

    let translations = (await directus().request(readTranslations({}))).reduce<{
      [lang: string]: { [key: string]: string };
    }>((res, val) => {
      if (val.language in res) {
        res[val.language][val.key] = val.value;
      } else {
        res[val.language] = { [val.key]: val.value };
      }
      return res;
    }, {});

    let layoutProps = {
      layoutProps: {
        association: association,
        socialLinks: socialLinks,
        commissions: commissions,
        langs: langs,
        translations,
      },
    };

    if (f) {
      let res = await f(context);

      if ("props" in res) {
        return {
          props: {
            ...layoutProps,
            ...res.props,
          } as any,
        };
      } else {
        return res;
      }
    } else {
      return {
        props: layoutProps,
      };
    }
  });
}

/**
 * Remove useless translations, according to the request locale.
 * @param f Your getServerSideProps function. If it returns successfully, the translations for other locales will be stripped.
 * @returns the getServerSideProps function to export from your component.
 */
export function cleanTranslations<T extends { [key: string]: any }>(
  f: GetServerSideProps<T>
): GetServerSideProps<T> {
  function rec(value: any, locale: string | undefined): any {
    if (Array.isArray(value)) {
      return value.map((v) => rec(v, locale));
    } else if (value && typeof value === "object") {
      return Object.entries(value)
        .map((e) => {
          if (e[0] === "translations") {
            let t: any[] = e[1] as any[];
            try {
              t = [getTranslation(value, locale, true)];
            } catch {}
            return [e[0], t];
          } else {
            return [e[0], rec(e[1], locale)];
          }
        })
        .reduce((a, b) => ({ ...a, [b[0]]: b[1] }), {});
    } else {
      return value;
    }
  }

  return async (context) => {
    return rec(await f(context), context.locale);
  };
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

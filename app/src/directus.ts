import { TranslationTable, getTranslation } from "./locales";
import { Association, Commission, SocialLink } from "./types/aliases";
import { Schema } from "./types/schema";
import {
  createDirectus,
  readItems,
  readSingleton,
  readTranslations,
  rest,
  staticToken,
} from "@directus/sdk";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const DIRECTUS_URL = "https://clic.epfl.ch/directus";

/**
 * Creates a handle to use Directus' API. See the [official documentation](https://docs.directus.io/guides/sdk/getting-started.html).
 *
 * May only be called server-side (e.g. in [`getServerSideProps()`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)).
 *
 * @returns a handle to Directus' API.
 */
export const directus = () =>
  createDirectus<Schema>(DIRECTUS_URL)
    .with(staticToken(process.env.DIRECTUS_TOKEN || ""))
    .with(rest());

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

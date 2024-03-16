import { queryTranslations } from "./locales";
import { SocialLink } from "./types/aliases";
import { Schema } from "./types/schema";
import {
  createDirectus,
  readItems,
  readSingleton,
  rest,
  staticToken,
} from "@directus/sdk";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

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

/**
 * Adds additional props to a getServerSideProps function - when it is successful. Those props are used by the layout components, e.g. the navigation bar and footer.
 * @param f Your getServerSideProps function. If it returns successfully, its output props will be populated with layout props.
 * @returns the getServerSideProps function to export from your component.
 */
export function populateLayoutProps<T>(
  //@ts-ignore
  f?: GetServerSideProps<T>
): GetServerSideProps<T & { layoutProps: SocialLink[] }> {
  return async (context: GetServerSidePropsContext) => {
    let association = await directus().request(readSingleton("association"));

    let socialLinks = await directus()
      .request(
        readItems("association_social_links", {
          fields: [{ social_links_id: ["*"] }],
        })
      )
      .then((result) => result.map((s) => s.social_links_id));

    let langs = await directus().request(readItems("languages"));

    let commissions = await directus().request(
      readItems("commissions", queryTranslations)
    );

    let layoutProps = {
      layoutProps: {
        association: association,
        socialLinks: socialLinks,
        commissions: commissions,
        langs: langs,
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
  };
}

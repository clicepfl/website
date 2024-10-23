import Background from "@/assets/background.svg";
import Icon from "@/assets/icons/news.svg";
import NewsCard from "@/components/NewsCard";
import TabTitle from "@/components/TabTitle";
import { directus, getDirectusImageUrl, populateLayoutProps } from "@/directus";
import { capitalize, useTranslationTable } from "@/locales";
import listPageStyle from "@/styles/ListPage.module.scss";
import newsStyle from "@/styles/NewsPage.module.scss";
import { Association, News } from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function NewsComponent(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const tt = useTranslationTable();

  return (
    <>
      <TabTitle
        title={capitalize(tt["news"])}
        image={getDirectusImageUrl(props.association.preview_image)}
      />

      <Background className={listPageStyle.background} name="background" />
      <div className={listPageStyle.page}>
        <div className={listPageStyle.title}>
          <Icon className={listPageStyle.icon} />
          <h1>{capitalize(tt["news"])}</h1>
        </div>
        <div className={newsStyle.list}>
          {props.news.map((n) => (
            <NewsCard key={(n as any).id} news={n} />
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  news: News[];
  association: Association;
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      association: await directus().request(
        readSingleton("association", { fields: ["preview_image"] })
      ),
      news: await directus().request(
        readItems("news", {
          sort: "-date_created",
          filter: { status: { _eq: "published" } },
          fields: [
            "id",
            "slug",
            "date_created",
            {
              translations: [
                "title",
                "banner",
                "description",
                "languages_code",
              ],
            },
          ],
        })
      ),
    },
  };
});

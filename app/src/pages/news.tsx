import Background from "@/assets/background.svg";
import Icon from "@/assets/icons/news.svg";
import NewsCard from "@/components/NewsCard";
import TabTitle from "@/components/TabTitle";
import { directus, populateLayoutProps } from "@/directus";
import { capitalize, queryTranslations, useTranslationTable } from "@/locales";
import listPageStyle from "@/styles/ListPage.module.scss";
import newsStyle from "@/styles/NewsPage.module.scss";
import { News } from "@/types/aliases";
import { readItems } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function NewsComponent(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const tt = useTranslationTable();

  return (
    <>
      <TabTitle title={capitalize(tt["news"])} />

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
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      news: await directus().request(
        readItems("news", { sort: "-date_created", ...queryTranslations })
      ),
    },
  };
});

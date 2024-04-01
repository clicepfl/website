import Background from "@/assets/background.svg";
import Icon from "@/assets/icons/news.svg";
import NewsCard from "@/components/NewsCard";
import { directus, populateLayoutProps } from "@/directus";
import { queryTranslations } from "@/locales";
import listPageStyle from "@/styles/ListPage.module.scss";
import newsStyle from "@/styles/NewsPage.module.scss";
import { News } from "@/types/aliases";
import { readItems } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function NewsComponent(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <>
      <Background className={listPageStyle.background} name="background" />
      <div className={listPageStyle.page}>
        <div className={listPageStyle.title}>
          <Icon className={listPageStyle.icon} />
          <h1>News</h1>
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

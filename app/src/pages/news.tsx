import NewsCard from "@/components/NewsCard";
import { directus, populateLayoutProps } from "@/directus";
import { queryTranslations } from "@/locales";
import { News } from "@/types/aliases";
import { readItems } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function NewsComponent(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div className="pageList">
      <div>
        <h1>News</h1>
      </div>
      {props.news.map((n) => (
        <NewsCard key={(n as any).id} news={n} />
      ))}
    </div>
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

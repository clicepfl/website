import NewsCard from "@/components/NewsCard";
import strapi from "@/strapi";
import { ApiNews } from "@/types/generated/contentTypes";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function News(
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
  news: ApiNews[];
}> = async (context) => {
  let res = await strapi.find<ApiNews[]>("newss", {
    sort: "createdAt",
    populate: "picture",
  });
  return { props: { news: res.data.reverse() } };
};

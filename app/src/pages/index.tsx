import NewsCard from "@/components/NewsCard";
import StrapiImage from "@/components/StrapiImage";
import strapi from "@/strapi";
import { ApiAssociation, ApiNews } from "@/types/generated/contentTypes";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Markdown from "react-markdown";

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <>
      <StrapiImage
        img={props.association.attributes.logo}
        size="medium"
        className="CLICLogo"
      />
      <div>
        {props.news.map((n) => (
          <NewsCard news={n} />
        ))}
      </div>
      <Markdown className="text">{props.association.attributes.about}</Markdown>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  association: ApiAssociation;
  news: ApiNews[];
}> = async (context) => {
  let association = await strapi.find<ApiAssociation>("association", {
    populate: "*",
  });
  let news = await strapi.find<ApiNews[]>("newss", {
    pagination: { start: 0, limit: 3 },
    populate: "*",
  });
  return { props: { association: association.data, news: news.data } };
};

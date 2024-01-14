import Card from "@/components/Card";
import NewsCard from "@/components/NewsCard";
import StrapiImage from "@/components/StrapiImage";
import strapi from "@/strapi";
import {
  ApiAssociation,
  ApiMember,
  ApiNews,
} from "@/types/generated/contentTypes";
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
          <NewsCard key={(n as any).id} news={n} />
        ))}
      </div>
      <Markdown className="text">{props.association.attributes.about}</Markdown>
      <div className="cardList">
        <h1 className="title">Notre comité</h1>
        <div>
          {props.committee.map((m: ApiMember) => (
            <Card
              size="small"
              key={(m as any).id}
              member={m}
              membership={m.attributes.pole_memberships.data[0]}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  association: ApiAssociation;
  news: ApiNews[];
  committee: ApiMember[];
}> = async (context) => {
  let association = await strapi.find<ApiAssociation>("association", {
    populate: "logo",
  });
  let news = await strapi.find<ApiNews[]>("newss", {
    pagination: { start: 0, limit: 3 },
    populate: "picture",
  });
  let committee = await strapi.find<ApiMember[]>("members", {
    populate: ["pole_memberships", "picture"],
    filters: {
      pole_memberships: {
        id: {
          // Do not fetch members with no pole membership => not in the main association
          $notNull: true,
        },
        level: "Comité",
      },
    },
  });
  return {
    props: {
      association: association.data,
      news: news.data,
      committee: committee.data,
    },
  };
};

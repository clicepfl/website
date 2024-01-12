import MemberCard from "@/components/MemberCard";
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
          <NewsCard news={n} />
        ))}
      </div>
      <Markdown className="text">{props.association.attributes.about}</Markdown>
      <div className="memberList">
        {props.members.map((m: ApiMember) => (
          <MemberCard
            key={m.attributes.name}
            member={m}
            membership={m.attributes.pole_memberships.data[0]}
          />
        ))}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  association: ApiAssociation;
  news: ApiNews[];
  members: ApiMember[];
}> = async (context) => {
  let association = await strapi.find<ApiAssociation>("association", {
    populate: "logo",
  });
  let news = await strapi.find<ApiNews[]>("newss", {
    pagination: { start: 0, limit: 3 },
    populate: "picture",
  });
  let members = await strapi.find<ApiMember[]>("members", {
    populate: ["pole_memberships", "picture"],
    filters: { pole_memberships: { id: { $notNull: true } } },
  });
  return {
    props: {
      association: association.data,
      news: news.data,
      members: members.data,
    },
  };
};

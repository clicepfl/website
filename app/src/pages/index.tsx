import Card from "@/components/Card";
import NewsCard from "@/components/NewsCard";
import Slider from "@/components/Slider";
import StrapiImage from "@/components/StrapiImage";
import { locale, translate } from "@/locales";
import strapi from "@/strapi";
import {
  ApiAssociation,
  ApiMember,
  ApiNews,
} from "@/types/generated/contentTypes";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();

  return (
    <>
      <StrapiImage
        img={props.association.attributes.logo}
        size="medium"
        className="CLICLogo"
      />
      <Slider>
        {props.news.map((n) => (
          <NewsCard key={(n as any).id} news={n} />
        ))}
      </Slider>
      <Markdown className="text">{props.association.attributes.about}</Markdown>
      <div className="cardList">
        <h1 className="title">
          {translate("committee", locale(router), { capitalize: true })}
        </h1>
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
    locale: locale(context),
  });
  let news = await strapi.find<ApiNews[]>("newss", {
    pagination: { start: 0, limit: 3 },
    populate: "picture",
    locale: locale(context),
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
    locale: locale(context),
  });
  return {
    props: {
      association: association.data,
      news: news.data,
      committee: committee.data,
    },
  };
};

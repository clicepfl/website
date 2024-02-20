import Card from "@/components/Card";
import DirectusImage from "@/components/DirectusImage";
import NewsCard from "@/components/NewsCard";
import Slider from "@/components/Slider";
import { directus } from "@/directus";
import { locale, translate } from "@/locales";
import {
  ApiAssociation,
  ApiMember,
  ApiNews,
} from "@/types/generated/contentTypes";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();

  return (
    <>
      <DirectusImage
        img={props.association.logo}
        size="medium"
        className="CLICLogo"
      />
      <Slider>
        {props.news.map((n) => (
          <NewsCard key={(n as any).id} news={n} />
        ))}
      </Slider>
      <Markdown className="text">{props.association.about}</Markdown>
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
              membership="true"
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
  const assoc = await directus.request(readSingleton("association"));
  const news = await directus.request(readItems("news"));
  const committee = await directus.request(
    readItems("association_memberships", {
      fields: [{ member: ["*"] }],
      filter: {
        level: {
          _eq: "committee",
        },
      },
    })
  );

  return {
    props: {
      association: assoc,
      news: news,
      committee: committee,
    },
  };
};

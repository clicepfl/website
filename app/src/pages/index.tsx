import Card from "@/components/Card";
import NewsCard from "@/components/NewsCard";
import Slider from "@/components/Slider";
import { directus } from "@/directus";
import {
  getTranslation,
  locale,
  queryTranslations,
  translate,
} from "@/locales";
import {
  Association,
  AssociationMembership,
  Member,
  News,
} from "@/types/aliases";
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
      <Slider>
        {props.news.map((n) => (
          <NewsCard key={(n as any).id} news={n} />
        ))}
      </Slider>
      <Markdown className="text">
        {getTranslation(props.association, router.locale).description}
      </Markdown>
      <div className="cardList">
        <h1 className="title">
          {translate("committee", locale(router), { capitalize: true })}
        </h1>
        <div>
          {props.committee.map((m) => (
            <Card
              size="small"
              key={(m as any).id}
              member={m.member}
              membership={m}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  association: Association;
  news: News[];
  committee: (AssociationMembership & { member: Member })[];
}> = async (context) => {
  return {
    props: {
      association: await directus.request(
        readSingleton("association", queryTranslations)
      ),
      news: await directus.request(
        readItems("news", {
          limit: 3,
          sort: ["-date_created"],
          ...queryTranslations,
        })
      ),
      committee: (await directus.request(
        readItems("association_memberships", {
          fields: [
            "*",
            { member: ["*"] },
            //@ts-ignore
            { translations: ["*"] },
          ],
          filter: { level: { _eq: "committee" } },
        })
      )) as (AssociationMembership & { member: Member })[],
    },
  };
};

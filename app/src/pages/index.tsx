import PreviewImage from "@/assets/galleryPreview.png";
import Card from "@/components/Card";
import DirectusImage from "@/components/DirectusImage";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import PartnersList from "@/components/PartnersList";
import { directus, populateLayoutProps } from "@/directus";
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
  Partner,
} from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const translation = getTranslation(props.association, router.locale);

  return (
    <>
      <div className="divLogo">
        <DirectusImage img={translation.banner} className="mainLogo" />
        <img src={PreviewImage.src} alt="preview" className="galleryPreview" />
      </div>

      <div className="news">
        <h1 className="title">News</h1>
        <div className="news-list">
          {props.news.map((n) => (
            <NewsCard key={(n as any).id} news={n} />
          ))}
        </div>
      </div>

      <PartnersList partners={props.partners} />

      <Markdown className="text">{translation.description}</Markdown>
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

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  association: Association;
  partners: Partner[];
  news: News[];
  committee: (AssociationMembership & { member: Member })[];
}> = populateLayoutProps(async (context) => {
  return {
    props: {
      association: await directus().request(
        readSingleton("association", queryTranslations)
      ),
      partners: (await directus()
        .request(
          readItems("association_partners", {
            fields: [{ partners_id: ["*"] }],
          })
        )
        .then((result) => result.map((p) => p.partners_id))) as Partner[],
      news: await directus().request(
        readItems("news", {
          limit: 3,
          sort: ["-date_created"],
          ...queryTranslations,
        })
      ),
      committee: (await directus().request(
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
});

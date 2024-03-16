import PreviewImage from "@/assets/galleryPreview.png";
import AssociationDescription from "@/components/AssociationDescription";
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
  SocialLink,
} from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

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
        <h1 className="title ligth">News</h1>
        <div className="news-list">
          {props.news.map((n) => (
            <NewsCard key={(n as any).id} news={n} />
          ))}
        </div>
      </div>

      <PartnersList partners={props.partners} />

      <AssociationDescription
        association={props.association}
        social_links={props.social_links}
      />

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

      <Footer association={props.association} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  association: Association;
  partners: Partner[];
  social_links: SocialLink[];
  news: News[];
  committee: (AssociationMembership & { member: Member })[];
}> = populateLayoutProps(async (_) => {
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
      social_links: (await directus()
        .request(
          readItems("association_social_links", {
            fields: [{ social_links_id: ["*"] }],
          })
        )
        .then((result) =>
          result.map((s) => s.social_links_id)
        )) as SocialLink[],
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

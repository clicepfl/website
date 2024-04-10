import Background from "@/assets/background.svg";
import Decoration from "@/assets/decoration.svg";
import PreviewImage from "@/assets/galleryPreview.png";
import AssociationDescription from "@/components/AssociationDescription";
import Button from "@/components/Button";
import DirectusImage from "@/components/DirectusImage";
import Gallery from "@/components/Gallery";
import MembersList from "@/components/MembersList";
import NewsCard from "@/components/NewsCard";
import PartnersList from "@/components/PartnersList";
import TabTitle from "@/components/TabTitle";
import { LayoutProps, directus, populateLayoutProps } from "@/directus";
import {
  getTranslation,
  queryTranslations,
  useTranslationTable,
} from "@/locales";
import styles from "@/styles/Homepage.module.scss";
import {
  Association,
  AssociationMembership,
  Member,
  News,
  Partner,
  PartnerCategory,
  PublicFiles,
  SocialLink,
} from "@/types/aliases";
import { readFiles, readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const translation = getTranslation(props.association, router.locale);
  const tt = useTranslationTable();

  var orderedPartners = props.partners.reduce(
    (list: [PartnerCategory, Partner[]][], partner: Partner) => {
      var entry = list.find(
        (e) => e[0].rank === (partner.category as PartnerCategory).rank
      );
      if (entry) {
        entry[1].push(partner);
      } else {
        list.push([partner.category as PartnerCategory, [partner]]);
      }
      return list;
    },
    []
  );

  return (
    <>
      <TabTitle title={tt["slogan"]} />
      <Background className={styles.background} name="background" />
      <div className={styles.divLogo}>
        <DirectusImage
          sizes="(max-width: 800px) 25vw, (max-width: 1200px) 37.5, 50vw"
          img={translation.banner}
          className={styles.mainLogo}
        />
        <img
          src={PreviewImage.src}
          alt="preview"
          className={styles.galleryPreview}
        />
      </div>

      <div className={styles.news}>
        <h1 className="light">News</h1>
        <div className={styles.newsList}>
          {props.news.map((n) => (
            <NewsCard key={(n as any).id} news={n} />
          ))}
        </div>
        <Button text={tt["moreNews"]} onClick={() => router.push("/news")} />
      </div>

      <PartnersList partners={orderedPartners} />

      <AssociationDescription
        association={props.association}
        socialLinks={props.socialLinks}
        publicFiles={props.publicFiles}
      />

      <Decoration className={styles.decoration} />

      <MembersList membership={props.committee} />

      <Gallery
        imgs={props.gallery.sort((a, b) => a.title.localeCompare(b.title))}
        translations={props.layoutProps.translations}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  {
    association: Association;
    partners: Partner[];
    socialLinks: SocialLink[];
    news: News[];
    committee: (AssociationMembership & { member: Member })[];
    publicFiles: PublicFiles[];
    gallery: any[];
  } & LayoutProps
> = populateLayoutProps(async (_) => {
  return {
    props: {
      association: await directus().request(
        readSingleton("association", queryTranslations)
      ),
      partners: (await directus()
        .request(
          readItems("association_partners", {
            fields: [
              {
                partners_id: [
                  "*",
                  { category: ["*", { translations: ["*"] }] },
                ],
              },
            ],
          })
        )
        .then((result) => result.map((p) => p.partners_id))) as Partner[],
      socialLinks: (await directus()
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
      publicFiles: await directus().request(
        readItems("association_public_files", {
          fields: ["*", { translations: ["*"], icon: ["*"] }],
        })
      ),
      gallery: await directus().request(
        readFiles({
          fields: ["*"],
          filter: {
            folder: {
              _eq: "2fd1d075-83a4-40b7-902e-b46a0d861dfe",
            },
            type: {
              _eq: "image/jpeg",
            },
          },
        })
      ),
    },
  };
});

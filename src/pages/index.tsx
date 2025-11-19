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
import RegistrationProgressBar from "@/components/RegistrationProgressBar";
import SocialsList from "@/components/SocialsList";
import TabTitle from "@/components/TabTitle";
import {
  directus,
  getDirectusImageUrl,
  LayoutProps,
  populateLayoutProps,
} from "@/directus";
import {
  getTranslation,
  queryTranslations,
  useTranslationTable,
} from "@/locales";
import styles from "@/styles/Homepage.module.scss";
import {
  Association,
  AssociationMembership,
  Event,
  Member,
  News,
  Partner,
  PublicFiles,
  SocialLink,
} from "@/types/aliases";
import { Schema } from "@/types/schema";
import {
  aggregate,
  AggregationOutput,
  readFiles,
  readItems,
  readSingleton,
} from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const translation = getTranslation(props.association, router.locale);
  const tt = useTranslationTable();

  return (
    <>
      <TabTitle
        title={tt["slogan"]}
        ogTitle={props.association.name || undefined}
        description={tt["slogan"]}
        image={getDirectusImageUrl(props.association.preview_image)}
      />
      <Background className={styles.background} name="background" />
      <div className={styles.divLogo}>
        <DirectusImage
          sizes="(max-width: 800px) 25vw, (max-width: 1200px) 37.5, 50vw"
          img={translation.banner}
          className={styles.mainLogo}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PreviewImage.src}
          alt="preview"
          className={styles.galleryPreview}
        />
      </div>

      <div id="news" className={styles.news}>
        {props.events.map((event) => (
          <RegistrationProgressBar
            key={event.id}
            event_name={event.name || ""}
            max_registrations={event.max_registrations || 0}
            registration_count={parseInt(
              props.registrations_count.find((b) => b.event == event.id)
                ?.count || ""
            )}
          />
        ))}
        <h1 className="light">News</h1>
        <div className={styles.newsList}>
          {props.news.map((n) => (
            <NewsCard key={(n as any).id} news={n} />
          ))}
        </div>
        <Button text={tt["moreNews"]} onClick={() => router.push("/news")} />
      </div>

      <PartnersList
        id="partners"
        partners={props.partners}
        background={true}
        homePage={true}
      />

      <div className={styles.associationDescription}>
        <div className={styles.center}>
          <AssociationDescription
            association={props.association}
            socialLinks={props.socialLinks}
            publicFiles={props.publicFiles}
          />
          <SocialsList socials={props.socialLinks} />
        </div>
        <MembersList membership={props.committee} />
      </div>

      <Decoration className={styles.decoration} />

      <Gallery
        id="gallery"
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
    events: Event[];
    registrations_count: AggregationOutput<
      Schema,
      "registrations",
      { aggregate: { count: "*" }; groupBy: "event"[] }
    >;
  } & LayoutProps
> = populateLayoutProps(async (_) => {
  return {
    props: {
      association: await directus().request(
        readSingleton("association", queryTranslations as any)
      ),
      partners: (await directus()
        .request(
          readItems("association_partners", {
            fields: [
              {
                partners_id: [
                  "*",
                  //@ts-ignore
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
          filter: { status: { _eq: "published" } },
          fields: [
            "id",
            "slug",
            "date_created",
            {
              //@ts-ignore
              translations: [
                "title",
                "banner",
                "description",
                "languages_code",
              ],
            },
          ],
        })
      ),
      committee: (await directus().request(
        readItems("association_memberships", {
          fields: [
            "*",
            { member: ["*"] },
            //@ts-ignore
            //@ts-ignore
            { translations: ["*"] },
            //@ts-ignore
            { pole: ["slug", { translations: ["name", "languages_code"] }] },
          ],
          filter: { level: { _eq: "committee" } },
        })
      )) as (AssociationMembership & { member: Member })[],
      publicFiles: await directus().request(
        readItems("association_public_files", {
          fields: [
            "*",
            //@ts-ignore
            { translations: ["*"], icon: ["*"] },
          ],
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
      events: await directus().request(
        readItems("events", {
          fields: ["id", "name", "max_registrations"],
          filter: {
            opened: {
              _eq: true,
            },
            max_registrations: {
              _nnull: true,
            },
          },
        })
      ),
      registrations_count: await directus().request(
        aggregate("registrations", {
          aggregate: { count: "*" },
          groupBy: ["event"],
        })
      ),
    },
  };
});

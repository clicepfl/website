import DirectusImage from "@/components/DirectusImage";
import MembersList from "@/components/MembersList";
import PartnersList from "@/components/PartnersList";
import SocialsList from "@/components/SocialsList";
import TabTitle from "@/components/TabTitle";
import {
  LayoutProps,
  directus,
  getDirectusImageUrl,
  populateLayoutProps,
} from "@/directus";
import { getTranslation, locale, queryTranslations } from "@/locales";
import markdownStyle from "@/styles/Markdown.module.scss";
import styles from "@/styles/Page.module.scss";
import {
  AssociationMembership,
  Commission,
  Member,
  Partner,
  SocialLink,
} from "@/types/aliases";
import { readItems } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const translation = getTranslation(props.commission, locale(router));

  return (
    <div className={styles.main}>
      <TabTitle
        title={props.commission.name || ""}
        description={translation.small_description || undefined}
        image={getDirectusImageUrl(translation.banner)}
      />

      <div className={styles.center}>
        <DirectusImage
          sizes="100rem"
          className={styles.banner}
          img={translation.banner}
          cover={true}
        />
        <h2>{props.commission.name}</h2>

        <Markdown className={markdownStyle.markdown}>
          {translation.description}
        </Markdown>

        <SocialsList socials={props.socialLinks} />
      </div>
      <MembersList membership={props.members} />
      <PartnersList
        partners={props.partners}
        background={false}
        homePage={false}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  {
    commission: Commission;
    socialLinks: SocialLink[];
    members: (AssociationMembership & { member: Member })[];
    partners: Partner[];
  } & LayoutProps
> = populateLayoutProps(async (context) => {
  if (typeof context.params?.slug !== "string") {
    return { notFound: true };
  }

  let commissions = await directus().request(
    readItems("commissions", {
      filter: { slug: { _eq: context.params.slug } },
      ...queryTranslations,
    })
  );

  if (commissions.length != 1) {
    return { notFound: true };
  }

  let commission = commissions[0];

  let socialLinks = (await directus()
    .request(
      readItems("commissions_social_links", {
        fields: [{ social_links_id: ["*"] }],
        filter: { commissions_id: { _eq: commission.id } },
      })
    )
    .then((result) => result.map((s) => s.social_links_id))) as SocialLink[];

  let members = (await directus().request(
    readItems("commission_memberships", {
      fields: ["*", { member: ["*"] }, { translations: ["*"] }],
      filter: {
        level: { _eq: "committee" },
        commission: { _eq: commission.id },
      },
    })
  )) as (AssociationMembership & { member: Member })[];

  let partners = (await directus().request(
    readItems("partners", {
      fields: ["*", { category: ["*", { translations: ["*"] }] }],
      filter: { commission: { _eq: commission.id } },
    })
  )) as Partner[];

  return {
    props: {
      commission: commission,
      socialLinks: socialLinks,
      members: members,
      partners: partners,
    },
  };
});

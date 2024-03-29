import DirectusImage from "@/components/DirectusImage";
import MembersList from "@/components/MembersList";
import SocialsList from "@/components/SocialsList";
import { directus, populateLayoutProps } from "@/directus";
import { getTranslation, locale, queryTranslations } from "@/locales";
import {
  AssociationMembership,
  Commission,
  Member,
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
    <div className="page">
      <div className="center">
        <DirectusImage
          className="banner"
          img={translation.banner}
          cover={true}
        />
        <h3>{props.commission.name}</h3>
        <h4>{translation.small_description}</h4>

        <Markdown className="text">{translation.description}</Markdown>

        <SocialsList socials={props.socialLinks} />
      </div>
      <hr />
      <MembersList membership={props.members} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  commission: Commission;
  socialLinks: SocialLink[];
  members: (AssociationMembership & { member: Member })[];
}> = populateLayoutProps(async (context) => {
  if (typeof context.params?.slug !== "string") {
    console.log(typeof context.params?.slug);
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
      fields: [
        "*",
        { member: ["*"] },
        //@ts-ignore
        { translations: ["*"] },
      ],
      filter: {
        level: { _eq: "committee" },
        commission: { _eq: commission.id },
      },
    })
  )) as (AssociationMembership & { member: Member })[];

  return {
    props: {
      commission: commission,
      socialLinks: socialLinks,
      members: members,
    },
  };
});

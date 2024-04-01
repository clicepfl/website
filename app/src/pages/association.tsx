import AssociationDescription from "@/components/AssociationDescription";
import DirectusImage from "@/components/DirectusImage";
import MembersList from "@/components/MembersList";
import TabTitle from "@/components/TabTitle";
import { directus, populateLayoutProps } from "@/directus";
import {
  getTranslation,
  locale,
  queryTranslations,
  translate,
} from "@/locales";
import styles from "@/styles/Page.module.scss";
import {
  Association,
  AssociationMembership,
  Member,
  PublicFiles,
  SocialLink,
} from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function AssociationPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const translation = getTranslation(props.association, locale(router));
  return (
    <div className={styles.main}>
      <TabTitle
        title={translate("association", router.locale, {
          capitalize: true,
        })}
      />

      <div className="center">
        <DirectusImage className="logo" img={translation.banner} />
        <AssociationDescription
          association={props.association}
          socialLinks={props.socialLinks}
          publicFiles={props.publicFiles}
        />
      </div>
      <MembersList membership={props.committee} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  association: Association;
  socialLinks: SocialLink[];
  committee: (AssociationMembership & { member: Member })[];
  publicFiles: PublicFiles[];
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      association: await directus().request(
        readSingleton("association", queryTranslations)
      ),
      socialLinks: (await directus()
        .request(
          readItems("association_social_links", {
            fields: [{ social_links_id: ["*"] }],
          })
        )
        .then((result) =>
          result.map((s) => s.social_links_id)
        )) as SocialLink[],
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
    },
  };
});

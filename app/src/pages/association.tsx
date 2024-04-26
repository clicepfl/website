import AssociationDescription from "@/components/AssociationDescription";
import PoleDescription from "@/components/PoleDescription";
import TabTitle from "@/components/TabTitle";
import { directus, populateLayoutProps } from "@/directus";
import { capitalize, queryTranslations, useTranslationTable } from "@/locales";
import styles from "@/styles/Page.module.scss";
import {
  Association,
  AssociationMembership,
  AssociationPole,
  Member,
  PublicFiles,
  SocialLink,
} from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const HEAD_POLE = "presidency";

export default function AssociationPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const tt = useTranslationTable();

  (props.poles as AssociationPole[]).sort(
    (a: AssociationPole, b: AssociationPole) => {
      const ap = a.slug || "";
      const bp = b.slug || "";

      if (ap === HEAD_POLE) {
        return -1;
      } else if (bp === HEAD_POLE) {
        return 1;
      } else {
        return ap.localeCompare(bp);
      }
    }
  );

  return (
    <div className={styles.main}>
      <TabTitle title={capitalize(tt["association"])} />

      <div className={styles.center}>
        <AssociationDescription
          association={props.association}
          socialLinks={props.socialLinks}
          publicFiles={props.publicFiles}
        />
      </div>
      <h1 id="pole">{tt["pole"]}</h1>
      {props.poles.map((p) => (
        <div className={styles.section} key={p.slug} id={p.slug}>
          <PoleDescription
            pole={p}
            members={props.committee.filter(
              (m) => (m.pole as AssociationPole).id == p.id
            )}
          />
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  association: Association;
  socialLinks: SocialLink[];
  poles: AssociationPole[];
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
      poles: await directus().request(
        readItems("association_poles", queryTranslations)
      ),
      committee: (await directus().request(
        readItems("association_memberships", {
          fields: [
            "*",
            { member: ["*"] },
            //@ts-ignore
            { translations: ["*"] },
            { pole: ["*"] },
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

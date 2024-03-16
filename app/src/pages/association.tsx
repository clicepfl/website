import AssociationDescription from "@/components/AssociationDescription";
import { directus, populateLayoutProps } from "@/directus";
import { queryTranslations } from "@/locales";
import { Association, SocialLink } from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function Association(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  return (
    <AssociationDescription
      association={props.association}
      social_links={props.social_links}
    ></AssociationDescription>
  );
}

export const getServerSideProps: GetServerSideProps<{
  association: Association;
  social_links: SocialLink[];
}> = populateLayoutProps(async (context) => {
  return { props: {
      association: await directus().request(
        readSingleton("association", queryTranslations)
      ),
      social_links: (await directus()
        .request(
          readItems("association_social_links", {
            fields: [{ social_links_id: ["*"] }],
          })
        )
        .then((result) =>
          result.map((s) => s.social_links_id)
        )) as SocialLink[],
}}});

import Background from "@/assets/background.svg";
import Icon from "@/assets/icons/family.svg";
import CommissionCard from "@/components/CommissionCard";
import TabTitle from "@/components/TabTitle";
import { directus, getDirectusImageUrl, populateLayoutProps } from "@/directus";
import { capitalize, useTranslationTable } from "@/locales";
import commissionsStyle from "@/styles/CommissionsPage.module.scss";
import listPageStyle from "@/styles/ListPage.module.scss";
import { Association, Commission } from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Commissions(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const tt = useTranslationTable();

  return (
    <>
      <TabTitle
        title={capitalize(tt["commissions"])}
        image={getDirectusImageUrl(props.association.preview_image)}
      />

      <Background className={listPageStyle.background} name="background" />
      <div className={listPageStyle.page}>
        <div className={listPageStyle.title}>
          <Icon className={listPageStyle.icon} />
          <h1>{capitalize(tt["commissions"])}</h1>
        </div>
        <div className={commissionsStyle.list}>
          {props.commissions.map((c) => (
            <CommissionCard
              className={commissionsStyle.card}
              key={c.id}
              commission={c}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  commissions: Commission[];
  association: Association;
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      association: await directus().request(
        readSingleton("association", { fields: ["preview_image"] })
      ),
      commissions: await directus().request(
        readItems("commissions", {
          fields: [
            "name",
            "slug",
            "id",
            // @ts-expect-error
            { translations: ["banner", "small_description", "languages_code"] },
          ],
        })
      ),
    },
  };
});

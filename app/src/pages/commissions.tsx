import Background from "@/assets/background.svg";
import Icon from "@/assets/icons/family.svg";
import CommissionCard from "@/components/CommissionCard";
import TabTitle from "@/components/TabTitle";
import { directus, populateLayoutProps } from "@/directus";
import { capitalize, useTranslationTable } from "@/locales";
import commissionsStyle from "@/styles/CommissionsPage.module.scss";
import listPageStyle from "@/styles/ListPage.module.scss";
import { Commission } from "@/types/aliases";
import { readItems } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Commissions(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const tt = useTranslationTable();

  return (
    <>
      <TabTitle title={capitalize(tt["commissions"])} />

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
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      commissions: await directus().request(
        readItems("commissions", { fields: ["*", { translations: ["*"] }] })
      ),
    },
  };
});

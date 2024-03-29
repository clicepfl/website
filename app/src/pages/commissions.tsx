import CommissionCard from "@/components/CommissionCard";
import { directus, populateLayoutProps } from "@/directus";
import { locale, translate } from "@/locales";
import commissionsStyle from "@/styles/CommissionsPage.module.scss";
import listPageStyle from "@/styles/ListPage.module.scss";
import { Commission } from "@/types/aliases";
import { readItems } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function Commissions(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  return (
    <div className={listPageStyle.page}>
      <h1>
        {translate("commission", locale(router), {
          capitalize: true,
          plural: true,
        })}
      </h1>
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

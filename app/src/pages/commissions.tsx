import Card from "@/components/Card";
import { locale, translate } from "@/locales";
import strapi from "@/strapi";
import { ApiCommission } from "@/types/generated/contentTypes";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function Commissions(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  return (
    <div className="pageList">
      <div>
        <h1>
          {translate("commission", locale(router), {
            capitalize: true,
            plural: true,
          })}
        </h1>
      </div>
      {props.news.map((c) => (
        <Card key={(c as any).id} commission={c} size="large" background />
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  news: ApiCommission[];
}> = async (context) => {
  let res = await strapi.find<ApiCommission[]>("commissions", {
    sort: "name",
    populate: "logo",
    locale: locale(context),
  });
  return { props: { news: res.data.reverse() } };
};

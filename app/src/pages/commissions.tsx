import Card from "@/components/Card";
import strapi from "@/strapi";
import { ApiCommission } from "@/types/generated/contentTypes";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Commissions(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div className="pageList">
      <div>
        <h1>Commissions</h1>
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
  });
  return { props: { news: res.data.reverse() } };
};

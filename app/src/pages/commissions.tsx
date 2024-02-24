import Card from "@/components/Card";
import { directus } from "@/directus";
import { locale, translate } from "@/locales";
import { Commission } from "@/types/aliases";
import { readItems } from "@directus/sdk";
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
  news: Commission[];
}> = async (context) => {
  const c = await directus().request(
    readItems("commissions", {
      fields: ["*", { translations: ["*"] }],
    })
  );
  return { props: { news: c } };
};

import { directus } from "@/directus";
import { readItem } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Test(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  console.log(JSON.stringify(props.association, null, 2));
  return <p>{JSON.stringify(props.association, null, 2)}</p>;
}

export const getServerSideProps: GetServerSideProps<{
  association: any;
}> = async (context) => {
  const assoc = await directus.request(
    readItem("news", 1, {
      deep: {
        translations: {
          _filter: {
            languages_code: { _eq: "fr-FR" },
          },
        },
      },
      fields: ["*", { translations: ["*"] }],
    })
  );
  console.log(assoc);
  return { props: { association: assoc } };
};

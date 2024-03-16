import DirectusImage from "@/components/DirectusImage";
import { directus, populateLayoutProps } from "@/directus";
import { getTranslation, locale, queryTranslations } from "@/locales";
import { Commission } from "@/types/aliases";
import { readItems } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const translation = getTranslation(props.commission, locale(router));
  console.log(JSON.stringify(props, null, 2));

  return (
    <div className="page">
      <h1 className="large">{props.commission.name}</h1>
      <h4>{translation.small_description}</h4>

      <DirectusImage className="banner" img={translation.banner} />
      <Markdown className="text">{translation.description}</Markdown>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  commission: Commission;
}> = populateLayoutProps(async (context) => {
  if (typeof context.params?.slug !== "string") {
    console.log(typeof context.params?.slug);
    return { notFound: true };
  }

  let commission = await directus().request(
    readItems("commissions", {
      filter: { slug: { _eq: context.params.slug } },
      ...queryTranslations,
    })
  );

  if (commission.length != 1) {
    return { notFound: true };
  }

  return { props: { commission: commission[0] } };
});

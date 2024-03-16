import Card from "@/components/Card";
import DirectusImage from "@/components/DirectusImage";
import { directus, populateLayoutProps } from "@/directus";
import {
  formatDate,
  getTranslation,
  locale,
  queryTranslations,
  translate,
} from "@/locales";
import { Commission, News } from "@/types/aliases";
import { readItems } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const commissions: Commission[] = props.news.commissions;
  const router = useRouter();
  const translation = getTranslation(props.news, router.locale);

  return (
    <div className="page">
      <div>
        <h1 className="large">{translation.title}</h1>
        <h4>{translation.description}</h4>
        {props.news.date_created ? (
          <p className="author">
            {`${formatDate(props.news.date_created, router.locale, {
              capitalize: true,
            })}`}
          </p>
        ) : (
          <></>
        )}
        <DirectusImage className="banner" img={translation.banner} />
        <Markdown className="text">{translation.content}</Markdown>
        {commissions.length > 0 ? (
          <>
            <h1>
              {translate("relatedContent", locale(router), {
                capitalize: true,
              })}
            </h1>
            {commissions.map((c) => (
              <Card key={(c as any).id} commission={c} size="large" />
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  news: News & { commissions: Commission[] };
}> = populateLayoutProps(async (context) => {
  if (typeof context.params?.slug !== "string") {
    return { notFound: true };
  }

  let news = await directus().request(
    readItems("news", {
      ...queryTranslations,
      limit: 1,
      filter: { slug: { _eq: context.params.slug } },
    })
  );

  if (news.length != 1) {
    return { notFound: true };
  }

  return { props: { news: news[0] as News & { commissions: Commission[] } } };
});

import CommissionCard from "@/components/CommissionCard";
import DirectusImage from "@/components/DirectusImage";
import TabTitle from "@/components/TabTitle";
import { directus, populateLayoutProps } from "@/directus";
import {
  formatDate,
  getTranslation,
  locale,
  queryTranslations,
  translate,
} from "@/locales";
import styles from "@/styles/Page.module.scss";
import { Commission, News } from "@/types/aliases";
import { readItems } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const translation = getTranslation(props.news, locale(router));

  return (
    <div className={styles.main}>
      <TabTitle title={translation.title || ""} />

      <div className={styles.center}>
        {props.news.date_created ? (
          <p className={styles.author}>
            {`${formatDate(props.news.date_created, router.locale, {
              capitalize: true,
            })}`}
          </p>
        ) : (
          <></>
        )}
        <DirectusImage
          sizes="100vw"
          className={styles.banner}
          img={translation.banner}
          cover={true}
        />
        <h1>{translation.title}</h1>
        <h4>{translation.description}</h4>
        <Markdown className={styles.text}>{translation.content}</Markdown>
      </div>
      {props.commissions.length > 0 ? (
        <>
          <h1>
            {translate("relatedContent", locale(router), {
              capitalize: true,
            })}
          </h1>
          <div className={styles.relatedContent}>
            {props.commissions.map((c) => (
              <CommissionCard key={c.id} commission={c} />
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  news: News;
  commissions: Commission[];
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

  let commissions = (await directus()
    .request(
      readItems("news_commissions", {
        ...queryTranslations,
        fields: [{ commissions_id: ["*.*"] }],
        filter: { news_id: { _eq: news[0].id } },
      })
    )
    .then((result) => result.map((c) => c.commissions_id))) as Commission[];

  return { props: { news: news[0], commissions: commissions } };
});

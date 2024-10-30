import CommissionCard from "@/components/CommissionCard";
import DirectusImage from "@/components/DirectusImage";
import TabTitle from "@/components/TabTitle";
import { directus, getDirectusImageUrl, populateLayoutProps } from "@/directus";
import {
  capitalize,
  formatDate,
  getTranslation,
  queryTranslations,
  useTranslationTable,
} from "@/locales";
import markdownStyle from "@/styles/Markdown.module.scss";
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
  const translation = getTranslation(props.news, router.locale);
  const tt = useTranslationTable();

  return (
    <div className={styles.main}>
      <TabTitle
        title={translation.title || ""}
        description={translation.description}
        image={getDirectusImageUrl(translation.banner)}
      />

      <div className={styles.center}>
        <DirectusImage
          sizes="100rem"
          className={styles.banner}
          img={translation.banner}
          cover={true}
        />
        {props.news.date_created ? (
          <p className={styles.date}>
            {`${formatDate(props.news.date_created, router.locale, tt, true)}`}
          </p>
        ) : (
          <></>
        )}
        <h2>{translation.title}</h2>
        <Markdown className={markdownStyle.markdown}>
          {translation.content}
        </Markdown>
        {props.news.video_link ? (
          <video width="600" controls preload="none" className={styles.video}>
            <source src={props.news.video_link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <></>
        )}
      </div>
      {props.commissions.length > 0 ? (
        <>
          <h2>{capitalize(tt["relatedContent"])}</h2>
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
    //@ts-expect-error
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
        //@ts-expect-error
        fields: [{ commissions_id: ["*.*"] }],
        filter: { news_id: { _eq: news[0].id } },
      })
    )
    .then((result) => result.map((c) => c.commissions_id))) as Commission[];

  return { props: { news: news[0], commissions: commissions } };
});

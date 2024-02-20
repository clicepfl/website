import Card from "@/components/Card";
import StrapiImage from "@/components/DirectusImage";
import { formatDate, locale, translate } from "@/locales";
import strapi from "@/strapi";
import { ApiCommission, ApiNews } from "@/types/generated/contentTypes";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const commissions: ApiCommission[] = props.news.attributes.commissions.data;
  const router = useRouter();

  return (
    <div className="page">
      <h1 className="title large">{props.news.attributes.news_title}</h1>
      <h4>{props.news.attributes.small_description}</h4>
      <p className="author">
        {`${formatDate(props.news.attributes.createdAt, router.locale, {
          capitalize: true,
        })}`}
      </p>
      <StrapiImage
        className="banner"
        img={props.news.attributes.picture}
        size="large"
      />
      <Markdown className="text">{props.news.attributes.content}</Markdown>
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
  );
}

export const getServerSideProps: GetServerSideProps<{ news: ApiNews }> = async (
  context
) => {
  if (typeof context.params?.slug !== "string") {
    console.log(typeof context.params?.slug);
    return { notFound: true };
  }

  let news = await strapi.find<ApiNews[]>("newss", {
    populate: ["picture", "created_by", "commissions", "commissions.logo"],
    locale: locale(context),
    filters: {
      slug: context.params.slug,
    },
  });

  if (news.data.length != 1) {
    return { notFound: true };
  }

  return { props: { news: news.data[0] } };
};

import Card from "@/components/Card";
import StrapiImage from "@/components/StrapiImage";
import { formatDate, translate } from "@/locales";
import strapi from "@/strapi";
import {
  AdminUser,
  ApiCommission,
  ApiEvent,
  ApiNews,
} from "@/types/generated/contentTypes";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Markdown from "react-markdown";

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const createdBy: AdminUser = props.news.attributes.createdBy.data;
  const event: ApiEvent | null = props.news.attributes.event.data;
  const commissions: ApiCommission[] = props.news.attributes.commissions.data;

  return (
    <div className="page">
      <h1 className="title">{props.news.attributes.news_title}</h1>
      <h3>{props.news.attributes.small_description}</h3>
      <p className="author">
        {`${formatDate(props.news.attributes.createdAt, "en" /* TODO i18n */, {
          capitalize: true,
        })}, ${translate("by", "en" /* TODO i18n */)} ${
          createdBy.attributes.firstname
        } ${createdBy.attributes.lastname}`}
      </p>
      <StrapiImage
        className="picture"
        img={props.news.attributes.picture}
        size="large"
      />
      <Markdown>{props.news.attributes.content}</Markdown>
      {event !== null || commissions.length > 0 ? (
        <>
          <h1>
            {translate("relatedContent", "en" /* TODO i18n */, {
              capitalize: true,
            })}
          </h1>
          {event ? <Card event={event} size="large" /> : <></>}
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
  if (typeof context.params?.id !== "string") {
    console.log(typeof context.params?.id);
    return { notFound: true };
  }

  let news = await strapi.findOne<ApiNews>("newss", context.params.id, {
    populate: [
      "picture",
      "createdBy",
      "event",
      "commissions",
      "commissions.logo",
    ],
  });

  return { props: { news: news.data } };
};

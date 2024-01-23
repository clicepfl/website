import StrapiImage from "@/components/StrapiImage";
import strapi from "@/strapi";
import { ApiCommission } from "@/types/generated/contentTypes";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Markdown from "react-markdown";

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div className="page">
      <h1 className="title large">{props.commission.attributes.name}</h1>
      <h4>{props.commission.attributes.small_description}</h4>

      <StrapiImage
        className="banner"
        img={props.commission.attributes.logo}
        size="large"
      />
      <Markdown className="text">
        {props.commission.attributes.description}
      </Markdown>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  commission: ApiCommission;
}> = async (context) => {
  if (typeof context.params?.id !== "string") {
    console.log(typeof context.params?.id);
    return { notFound: true };
  }

  let commission = await strapi.findOne<ApiCommission>(
    "commissions",
    context.params.id,
    {
      populate: ["picture", "logo"],
    }
  );

  return { props: { commission: commission.data } };
};

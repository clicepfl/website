import StrapiImage from "@/components/StrapiImage";
import strapi from "@/strapi";
import { ApiAssociation } from "@/types/generated/contentTypes";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Home(props: { association: ApiAssociation }) {
  return (
    <StrapiImage
      img={props.association.attributes.logo}
      size="medium"
      className="CLICLogo"
    />
  );
}

export const getServerSideProps: GetServerSideProps<
  InferGetServerSidePropsType<typeof Home>
> = async (context) => {
  let association = await strapi.find<ApiAssociation>("association", {
    populate: "*",
  });
  return { props: { association: association.data } };
};

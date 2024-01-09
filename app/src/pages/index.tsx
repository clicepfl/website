import Background from "@/assets/background.svg";
import NavigationBar from "@/components/NavigationBar";
import StrapiImage from "@/components/StrapiImage";
import strapi from "@/strapi";
import { ApiAssociation } from "@/types/generated/contentTypes";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Home(props: { association: ApiAssociation }) {
  return (
    <div className="main">
      <NavigationBar />
      <div className="background">
        <StrapiImage
          img={props.association.attributes.logo}
          size="medium"
          className="CLICLogo"
        />
        <Background className="background" />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  InferGetServerSidePropsType<typeof Home>
> = async (context) => {
  let association = await strapi.find<ApiAssociation>("association", {
    populate: "*",
  });
  console.log(JSON.stringify(association));
  return { props: { association: association.data } };
};

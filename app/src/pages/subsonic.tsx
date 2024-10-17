import Card from "@/components/Card";
import DirectusImage from "@/components/DirectusImage";
import TabTitle from "@/components/TabTitle";
import { directus, getDirectusImageUrl, populateLayoutProps } from "@/directus";
import { capitalize, useTranslationTable } from "@/locales";
import style from "@/styles/SubsonicPage.module.scss";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function SubsonicPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const tt = useTranslationTable();

  return (
    <>
      <TabTitle
        title={capitalize(tt["subsonic"])}
        image={getDirectusImageUrl(props.subsonic.header_image)}
      />

      <div className={style.header}>
        <DirectusImage
          sizes={"30rem"}
          name={"subsonic"}
          img={props.subsonic.header_image}
          className={style.headerImage}
          cover={true}
        />
        <p className={style.headerTitle}>Subsonic</p>
      </div>

      <div className={style.mainDiv}>
        <h1>DJ</h1>
        <div className={style.artistsList}>
          {props.artists.map((artist) => {
            return (
              <Card
                key={artist.id}
                img={artist.image}
                title={artist.name}
                description={artist.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  subsonic: Subsonic;
  artists: Artists;
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      subsonic: await directus().request(
        readSingleton("subsonic", { fields: ["header_image"] })
      ),
      artists: await directus().request(readItems("artists", { fields: "*" })),
    },
  };
});

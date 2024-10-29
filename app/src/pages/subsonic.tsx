import Card from "@/components/Card";
import DirectusImage from "@/components/DirectusImage";
import PartnersList from "@/components/PartnersList";
import TabTitle from "@/components/TabTitle";
import { directus, getDirectusImageUrl, populateLayoutProps } from "@/directus";
import { capitalize, useTranslationTable } from "@/locales";
import style from "@/styles/SubsonicPage.module.scss";
import { Partner } from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Markdown from "react-markdown";

export default function SubsonicPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const tt = useTranslationTable();

  return (
    <>
      <style jsx global>{`
        body {
          background: black;
        }
      `}</style>

      <TabTitle
        title={capitalize(tt["subsonic"])}
        image={getDirectusImageUrl(props.subsonic.header_image)}
      />

      <div className={style.header}>
        <div className={style.headerImage}>
          <DirectusImage
            sizes={"30rem"}
            name={"subsonic"}
            img={props.subsonic.header_image}
            className={style.headerImage}
            cover={true}
          />
        </div>
        <div className={style.logo_div}>
          <DirectusImage
            sizes={"50rem"}
            name={"subsonic"}
            img={props.subsonic.logo}
            className={style.logo}
          />
        </div>
      </div>

      <div className={style.mainDiv}>
        <p className={style.text}>The CLIC silent party</p>
        <p className={style.text}>November 15th, 19h BC Hall</p>

        <div className={style.artists}>
          <h1 className={style.title}>DJ</h1>
          <div className={style.artistsList}>
            {props.artists.map((artist) => {
              return (
                <Card
                  key={artist.id}
                  img={artist.image}
                  title={artist.name}
                  description={`
                    ${(artist.start_time || "").substring(
                      0,
                      (artist.start_time || "000").length - 3
                    )} -
                    ${(artist.end_time || "").substring(
                      0,
                      (artist.end_time || "000").length - 3
                    )}`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <PartnersList partners={props.partners} />

      <div className={style.map_div}>
        <h1 className={style.title}>PLAN</h1>
        <DirectusImage
          sizes={"50rem"}
          name={"subsonic"}
          img={props.subsonic.map}
          className={style.map}
        />
      </div>

      <Markdown className={style.markdown}>{props.subsonic.info}</Markdown>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  subsonic: Subsonic;
  artists: Artists;
  partners: Partner[];
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      subsonic: await directus().request(
        readSingleton("subsonic", {
          fields: ["header_image", "logo", "map", "info"],
        })
      ),
      artists: await directus().request(readItems("artists", { fields: "*" })),
      partners: (await directus()
        .request(
          readItems("association_partners", {
            fields: [
              {
                partners_id: [
                  "*",
                  { category: ["*", { translations: ["*"] }] },
                ],
              },
            ],
          })
        )
        .then((result) => result.map((p) => p.partners_id))) as Partner[],
    },
  };
});

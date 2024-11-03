import Card from "@/components/Card";
import DirectusImage from "@/components/DirectusImage";
import PartnersList from "@/components/PartnersList";
import TabTitle from "@/components/TabTitle";
import { directus, getDirectusImageUrl, populateLayoutProps } from "@/directus";
import { useTranslationTable } from "@/locales";
import style from "@/styles/SubsonicPage.module.scss";
import { Artist, Partner, Subsonic } from "@/types/aliases";
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
        title={"Subsonic"}
        image={getDirectusImageUrl(props.subsonic.logo)}
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
        <p className={style.text}>{tt["subsonic.catchphrase"]}</p>
        <p className={style.text}>{tt["subsonic.date-and-place"]}</p>

        <div className={style.artists}>
          <h1 className={style.title}>{tt["artits"]}</h1>
          <div className={style.artistsList}>
            {props.artists.map((artist: Artist) => {
              return (
                <Card
                  key={artist.id}
                  img={artist.image}
                  title={artist.name || ""}
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
        <h1 className={style.title}>{tt["subsonic.map"]}</h1>
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
  artists: Artist[];
  partners: Partner[];
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      subsonic: await directus().request(
        // @ts-ignore
        readSingleton("subsonic", {
          fields: ["header_image", "logo", "map", "info"],
        })
      ),
      artists: await directus().request(
        readItems("artists", { fields: ["*"] })
      ),
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

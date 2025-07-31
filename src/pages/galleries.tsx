import Background from "@/assets/background.svg";
import Icon from "@/assets/icons/gallery.svg";
import DirectusImage from "@/components/DirectusImage";
import { directus, populateLayoutProps } from "@/directus";
import { capitalize, useTranslationTable } from "@/locales";
import galleriesPageStyle from "@/styles/GalleriesPage.module.scss";
import listPageStyle from "@/styles/ListPage.module.scss";
import { Gallery } from "@/types/aliases";
import { readItems } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

function GalleryTile(props: { gallery: Gallery }) {
  return (
    <>
      <div className={galleriesPageStyle.tile}>
        <p>{props.gallery.name}</p>
        <DirectusImage
          img={props.gallery.preview}
          sizes="20rem"
          className={galleriesPageStyle.preview}
          cover={true}
        />
      </div>
    </>
  );
}

export default function GalleriesComponent(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const tt = useTranslationTable();

  const emptyArray: { [date: number]: Gallery[] } = {};

  const sortedGalleries: { [date: number]: Gallery[] } = props.galleries.reduce(
    (array, gallery) => {
      const date = new Date(gallery.date || "").getFullYear();
      if (!array[date]) {
        array[date] = [];
      }
      array[date].push(gallery);
      return array;
    },
    emptyArray
  );

  return (
    <>
      <Background className={listPageStyle.background} name="background" />
      <div className={listPageStyle.page}>
        <div className={listPageStyle.title}>
          <Icon className={listPageStyle.icon} />
          <h1>{capitalize(tt["news"])}</h1>
        </div>

        <div className={galleriesPageStyle.list}>
          {Object.entries(sortedGalleries)
            .reverse()
            .flatMap(([year, galleries]) => {
              return (
                <div key={year}>
                  <h1>{year}</h1>
                  <div className={galleriesPageStyle.subList}>
                    {galleries.map((n: Gallery) => (
                      <GalleryTile gallery={n} key={n.id} />
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  galleries: Gallery[];
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      galleries: await directus().request(
        readItems("galleries", {
          sort: "-date",
          fields: ["id", "name", "date", "folder", "preview"],
        })
      ),
    },
  };
});

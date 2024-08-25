import DirectusImage from "@/components/DirectusImage";
import { directus, populateLayoutProps } from "@/directus";
import { getTranslation } from "@/locales";
import { SaveTheDate, SaveTheDateCell } from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function Commissions(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <>
      <style>{props.save_the_date.style}</style>
      <div className="main-div">
        <div className="content-div">
          {/* Pas affiché dans le mail mais dans la preview du mail */}
          <p style={{ display: "none" }}> Quoi de nouveau à la CLIC ? </p>

          <div className="header">
            <img
              src="https://clic.epfl.ch/nextcloud/index.php/s/8pCSkD3Zocx5Nzz/download/logo%20clic.png"
              alt="CLIC"
              className="clic-logo"
            />
            <h1 className="title">Save the date !</h1>
          </div>

          <h2>ENGLISH VERSION BELOW</h2>

          {props.std_cells.map((cell) => StdCellComponent(cell))}

          <h2>Commissions</h2>

          <div className="commissions"></div>

          <div className="end-div">
            <h2>CLIC Bons Plans</h2>
            <p>
              Pour vous partager tous les bons plans IC, offres de stages ou
              bien tarifs préférentiels, la CLIC a créé le channel CLIC Bon Plan
              !
            </p>
            <a href="https://t.me/clic_bonsplans" className="details-link">
              rejoindre le channel
            </a>

            <h2>CLIC website 2.0</h2>
            <p>
              Nous travaillons sur une nouvelle version de notre site web, en
              utilisant Docker, Next.js, Strapi, et bien d'autres outils
              open-source. Si vous voulez rejoindre le projet, vous pouvez nous
              envoyer un message sur Telegram !
            </p>
            <a
              href="https://github.com/clicepfl/clic-website-v2"
              className="details-link"
            >
              Github du projet
            </a>

            <div className="socials">
              <div className="socials-list">
                <a href="https://clic.epfl.ch">Website</a> |
                <a href="https://go.epfl.ch/clic_telegram">Telegram</a> |
                <a href="https://go.epfl.ch/clic_twitter">Twitter</a> |
                <a href="https://go.epfl.ch/clic_insta">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Function to convert CSS string to a style object
const convertCssStringToObject = (cssString: string) => {
  const styleObject: { [key: string]: string } = {};
  cssString.split(";").forEach((style) => {
    if (style.trim()) {
      const [property, value] = style.split(":");
      const camelCaseProperty = property
        .trim()
        .replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      styleObject[camelCaseProperty] = value;
    }
  });
  return styleObject;
};

function StdCellComponent(cell: SaveTheDateCell) {
  const translation = getTranslation(cell, useRouter().locale);
  return (
    <div key={translation.title}>
      <style>{cell.style}</style>
      <div className="cell">
        <DirectusImage
          sizes="4rem"
          img={cell.image}
          name={translation.title}
          className="cell_image"
        />
        <h2 className="cell_title">{translation.title}</h2>
        <p className="cell_date">Date: {cell.date}</p>
        <p className="cell_description">{translation.description}</p>
        <a className="cell_link" href={cell.url}>
          <span>{translation.detail_button_title}</span>
        </a>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  save_the_date: SaveTheDate;
  std_cells: SaveTheDateCell[];
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      save_the_date: await directus().request(
        readSingleton("save_the_date", { fields: ["style"] })
      ),
      std_cells: await directus().request(
        readItems("std_cell", {
          fields: ["date", "style", "image", { translations: ["*"] }],
        })
      ),
    },
  };
});

import DirectusImage from "@/components/DirectusImage";
import SocialsList from "@/components/SocialsList";
import { directus, populateLayoutProps } from "@/directus";
import { getTranslation } from "@/locales";
import { SaveTheDate, SaveTheDateCell, SocialLink } from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function SaveTheDatePage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const commissions_cells = props.std_cells.filter((cell) => cell.commission);

  const clic_cells = props.std_cells.filter((cell) => cell.commission == null);

  return (
    <>
      <style>{props.save_the_date.style}</style>
      <div className="main-div">
        <div className="content-div">
          {/* Not rendered in the mail, only in the preview */}
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

          {clic_cells.map((cell) => StdCellComponent(cell))}

          <h2>Commissions</h2>

          {commissions_cells.map((cell) => StdCellComponent(cell))}

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

            <SocialsList socials={props.socialLinks} light={true} />
          </div>
        </div>
      </div>
    </>
  );
}

function StdCellComponent(cell: SaveTheDateCell) {
  const translation = getTranslation(cell, useRouter().locale);
  const cell_id = "cell-" + cell.id;
  return (
    <div key={translation.title} id={cell_id}>
      <style>{cell.style?.replaceAll("#cell-id", "#" + cell_id)}</style>
      <div className="cell">
        {cell.image ? (
          <DirectusImage
            sizes="4rem"
            img={cell.image}
            name={translation.title}
            className="cell_image"
          />
        ) : (
          <></>
        )}
        <div>
          <h2 className="cell_title">{translation.title}</h2>
          <p className="cell_date">Date: {cell.date}</p>
          <p className="cell_description">{translation.description}</p>
          {cell.url ? (
            <a className="cell_link" href={cell.url}>
              <span>{translation.detail_button_title || "test"}</span>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  save_the_date: SaveTheDate;
  std_cells: SaveTheDateCell[];
  socialLinks: SocialLink[];
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      save_the_date: await directus().request(
        readSingleton("save_the_date", { fields: ["style"] })
      ),
      std_cells: await directus().request(
        readItems("std_cell", {
          fields: [
            "id",
            "date",
            "style",
            "image",
            "url",
            { translations: ["*"], commission: ["name"] },
          ],
        })
      ),
      socialLinks: (await directus()
        .request(
          readItems("association_social_links", {
            fields: [{ social_links_id: ["*"] }],
          })
        )
        .then((result) =>
          result.map((s) => s.social_links_id)
        )) as SocialLink[],
    },
  };
});

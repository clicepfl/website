import { directusImageUrl } from "@/components/DirectusImage";
import { directus, populateLayoutProps } from "@/directus";
import { getTranslation, locale, useTranslationTable } from "@/locales";
import style from "@/styles/SaveTheDate.module.scss";
import { SaveTheDate, SaveTheDateCell, SocialLink } from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

const BUTTON_STYLE = {
  color: "white",
  padding: "0.5rem 1rem 0.5rem 1rem",
  borderRadius: 10,
  textDecoration: "none",
};

const TITLE_STYLE = {
  fontWeight: 300,
  fontSize: "2rem",
  margin: 0,
  padding: "1rem",
};

const CELL_STYLE = {
  width: "100%",
  padding: "1rem",
  borderRadius: "10px",
};

const CELL_GROUP_STYLE = {
  borderSpacing: "1em",
  width: "100%",
};

export default function SaveTheDatePage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div className={style.main}>
      begin-tag
      <table
        border={0}
        cellSpacing={0}
        cellPadding={0}
        color="white"
        style={{
          borderRadius: "20px",
          background: props.save_the_date.background_color,
          width: "min(100%, 600px)",
          color: props.save_the_date.text_color,
          fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <tbody>{TranslatedSection(props.save_the_date, props.std_cells)}</tbody>
      </table>
      end-tag
    </div>
  );
}

function TranslatedSection(
  save_the_date: SaveTheDate,
  cells: SaveTheDateCell[]
) {
  const language_code = locale(useRouter());
  const commissions_cells = cells.filter((cell) => cell.commission);
  const clic_cells = cells.filter((cell) => cell.commission == null);
  const translated_std = getTranslation(save_the_date, language_code);
  const tt = useTranslationTable();

  return (
    <>
      <tr>
        <td>
          <center>
            <img
              src={directusImageUrl(save_the_date.image)}
              alt="CLIC"
              style={{ width: "100%", height: "200px" }}
            />
            <h1 style={{ color: save_the_date.title_color, ...TITLE_STYLE }}>
              {tt["save-the-date"].toUpperCase()}
            </h1>
          </center>
        </td>
      </tr>

      <tr>
        <td style={{ padding: "1rem 0 1rem 0" }}>
          <center>
            <a
              href="https://clic.epfl.ch/en-US/save-the-date/"
              style={{
                background: save_the_date.button_color,
                ...BUTTON_STYLE,
              }}
            >
              {tt["translated-version"]}
            </a>
          </center>
        </td>
      </tr>

      <tr>
        <td>
          <center>
            <table style={CELL_GROUP_STYLE}>
              <tbody>{clic_cells.map((cell) => StdCellComponent(cell))}</tbody>
            </table>
          </center>
        </td>
      </tr>

      <tr>
        <td>
          <center>
            <h1 style={{ color: save_the_date.title_color, ...TITLE_STYLE }}>
              {tt["commissions"].toUpperCase()}
            </h1>
          </center>
        </td>
      </tr>

      <tr>
        <td>
          <table style={CELL_GROUP_STYLE}>
            <tbody>
              {commissions_cells.map((cell) => StdCellComponent(cell))}
            </tbody>
          </table>
        </td>
      </tr>

      {/* TODO: add links */}
      <tr>
        <td style={{ padding: "2rem" }}>
          <h2 style={{ color: save_the_date.title_color }}>
            {translated_std.title}
          </h2>
          <p>{translated_std.description}</p>
        </td>
      </tr>
    </>
  );
}

function StdCellComponent(cell: SaveTheDateCell) {
  const language_code = locale(useRouter());
  const translation = getTranslation(cell, language_code);
  const dateParts = (cell.date || "00-01-0000").split("-").map(Number);
  const myDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

  // Use Intl.DateTimeFormat to format the date as needed
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long", // Full name of the day (e.g., Monday)
    day: "numeric", // Day of the month (e.g., 25)
    month: "long", // Full name of the month (e.g., December)
    year: "numeric", // Full year (e.g., 2023)
  }).format(myDate);

  return (
    <tr>
      <td
        key={translation.title}
        style={{
          color: cell.text_color,
          background: cell.background_color,
          ...CELL_STYLE,
        }}
      >
        <div>
          {cell.image ? (
            <center>
              <img
                sizes="4rem"
                src={directusImageUrl(cell.image)}
                alt={translation.title}
                style={{ maxHeight: "6rem", maxWidth: "10rem" }}
              />
            </center>
          ) : (
            <></>
          )}
          <div>
            <h2 style={{ color: cell.text_color }}>{translation.title}</h2>
            <p style={{ margin: 0 }}>{formattedDate}</p>
            <p>{translation.description}</p>
            {cell.url ? (
              <a
                href={cell.url}
                style={{
                  background: cell.button_color,
                  ...BUTTON_STYLE,
                }}
              >
                <span>{translation.detail_button_title || "test"}</span>
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </td>
    </tr>
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
        readSingleton("save_the_date", {
          fields: [
            "image",
            "background_color",
            "text_color",
            "title_color",
            "button_color",
            { translations: ["*"] },
          ],
        })
      ),
      std_cells: await directus().request(
        readItems("std_cell", {
          fields: [
            "id",
            "date",
            "image",
            "url",
            "background_color",
            "text_color",
            "button_color",
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

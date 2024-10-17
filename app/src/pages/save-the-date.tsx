import { directusImageUrl } from "@/components/DirectusImage";
import { directus, populateLayoutProps } from "@/directus";
import { getTranslation, locale, useTranslationTable } from "@/locales";
import style from "@/styles/SaveTheDate.module.scss";
import {
  Commission,
  SaveTheDate,
  SaveTheDateCell,
  SocialLink,
} from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

const MAIN_TABLE_STYLE = {
  borderRadius: "20px",
  maxWidth: "600px",
  fontFamily: "Noto Sans, Helvetica, Arial, sans-serif",
  overflow: "hidden",
};

const BUTTON_STYLE = {
  color: "white",
  padding: "0.5rem 1rem 0.5rem 1rem",
  fontSize: "1rem",
  borderRadius: 20,
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
  borderRadius: "15px",
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
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>
              <center>
                <table
                  border={0}
                  cellSpacing={0}
                  cellPadding={0}
                  style={{
                    background:
                      props.save_the_date.background_color || undefined,
                    color: props.save_the_date.text_color || undefined,
                    ...MAIN_TABLE_STYLE,
                  }}
                >
                  <tbody>
                    {CellsSection(props.save_the_date, props.std_cells)}
                    {SocialLinkSection(props.save_the_date, props.socialLinks)}
                  </tbody>
                </table>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
      end-tag
    </div>
  );
}

function CellsSection(save_the_date: SaveTheDate, cells: SaveTheDateCell[]) {
  const language_code = locale(useRouter());
  const commissions_cells = cells
    .filter((cell) => cell.commission)
    .sort(sortByCommissionThenDate);
  const clic_cells = cells
    .filter((cell) => cell.commission == null)
    .sort(sortByDate);
  const translated_std = getTranslation(save_the_date, language_code);
  const tt = useTranslationTable();
  const router = useRouter();

  return (
    <>
      {/* Header */}
      <tr>
        <td>
          <center>
            {save_the_date.image ? (
              <img
                src={directusImageUrl(save_the_date.image)}
                alt="CLIC"
                style={{ width: "100%", maxHeight: "200px" }}
              />
            ) : (
              <></>
            )}
            <h1
              style={{
                color: save_the_date.title_color || undefined,
                ...TITLE_STYLE,
              }}
            >
              {tt["save-the-date"].toUpperCase()}
            </h1>
          </center>
        </td>
      </tr>

      {router.locale === save_the_date.language_button_target ? (
        <></>
      ) : (
        <tr>
          <td style={{ padding: "1rem 0 1rem 0" }}>
            <center>
              <a
                href={`https://clic.epfl.ch/${save_the_date.language_button_target}/save-the-date/`}
                style={{
                  background: save_the_date.button_color || undefined,
                  ...BUTTON_STYLE,
                }}
              >
                {tt["translated-version"]}
              </a>
            </center>
          </td>
        </tr>
      )}

      {/* CLIC cells */}
      <tr>
        <td>
          <center>
            <table style={CELL_GROUP_STYLE}>
              <tbody>{clic_cells.map((cell) => StdCellComponent(cell))}</tbody>
            </table>
          </center>
        </td>
      </tr>

      {/* Commissions cells */}
      <tr>
        <td>
          <center>
            <h1
              style={{
                color: save_the_date.title_color || undefined,
                ...TITLE_STYLE,
              }}
            >
              {tt["commissions"].toUpperCase()}
            </h1>
          </center>
        </td>
      </tr>

      <tr>
        <td style={{ padding: 10 }}>
          <table
            style={{
              border: "solid 1px " + save_the_date.title_color,
              borderRadius: 25,
              ...CELL_GROUP_STYLE,
            }}
          >
            <tbody>
              {commissions_cells.map((cell) => StdCellComponent(cell))}
            </tbody>
          </table>
        </td>
      </tr>

      {/* End cell */}
      <tr>
        <td
          style={{
            padding: "2rem",
            color: save_the_date.text_color || undefined,
          }}
        >
          <h2 style={{ color: save_the_date.title_color || undefined }}>
            {translated_std.title}
          </h2>
          <Markdown>{translated_std.description}</Markdown>
        </td>
      </tr>
    </>
  );
}

function SocialLinkSection(save_the_date: SaveTheDate, socials: SocialLink[]) {
  const tt = useTranslationTable();
  return (
    <tr
      style={{
        background: save_the_date.title_color || undefined,
        color: save_the_date.background_color || undefined,
      }}
    >
      <td>
        <center>
          <p style={{ marginTop: "1rem" }}>{tt["follow-us"]}</p>
          {socials
            .filter((s) => s != null)
            .map((social) => (
              <a key={social.id} href={social.link || ""}>
                <img
                  src={directusImageUrl(social.logo || "")}
                  alt={social.media_name || ""}
                  style={{
                    height: "2rem",
                    margin: "0 0.5rem 1rem 0.5rem",
                  }}
                />
              </a>
            ))}
        </center>
      </td>
    </tr>
  );
}

function sortByCommissionThenDate(
  cell1: SaveTheDateCell,
  cell2: SaveTheDateCell
) {
  if (
    (cell1.commission as Commission).id == (cell2.commission as Commission).id
  ) {
    console.log(cell1.commission);
    return sortByDate(cell1, cell2);
  } else {
    console;
    return ((cell1.commission as Commission).name || "").localeCompare(
      (cell2.commission as Commission).name || ""
    );
  }
}

function sortByDate(cell1: SaveTheDateCell, cell2: SaveTheDateCell) {
  return dateStringToDate(cell1.date) > dateStringToDate(cell2.date) ? 1 : -1;
}

function dateStringToDate(date: string | null | undefined) {
  const [day, month, year] = (date || "00-01-0000").split("-").map(Number);
  return new Date(day, month - 1, year);
}

function formatDate(
  date: string | null | undefined,
  recurrence: string | null | undefined
): string {
  const tt = useTranslationTable();
  const myDate = dateStringToDate(date);
  const formattedDate = new Intl.DateTimeFormat(locale(useRouter()), {
    weekday: "long", // Full name of the day (e.g., Monday)
    day: "numeric", // Day of the month (e.g., 25)
    month: "long", // Full name of the month (e.g., December)
    year: "numeric", // Full year (e.g., 2023)
  }).format(myDate);

  switch (recurrence) {
    case "weekly":
      return `${tt["weekly"]} ${new Intl.DateTimeFormat(locale(useRouter()), {
        weekday: "long",
      }).format(myDate)}`;
    case "monthly":
      return `${tt["monthly"]} ${formattedDate}`;
    case "from":
      return `${tt["from"]} ${formattedDate}`;
    case "punctual":
    default:
      return formattedDate;
  }
}

function StdCellComponent(cell: SaveTheDateCell) {
  const language_code = locale(useRouter());
  const translation = getTranslation(cell, language_code);
  const formattedDate = translation.date_replacement
    ? translation.date_replacement
    : formatDate(cell.date, cell.recurrence);

  return (
    <tr key={cell.id}>
      <td
        key={translation.title}
        style={{
          color: cell.text_color || undefined,
          background: cell.background_color || undefined,
          ...CELL_STYLE,
        }}
      >
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      {cell.image ? (
                        <td style={{ paddingRight: "1rem" }}>
                          <center>
                            <img
                              sizes="4rem"
                              src={directusImageUrl(cell.image)}
                              alt={translation.title}
                              style={{ maxHeight: "6rem", minWidth: "6rem" }}
                            />
                          </center>
                        </td>
                      ) : (
                        <></>
                      )}
                      <td style={{ color: cell.text_color || undefined }}>
                        {cell.commission ? (
                          <p style={{ margin: 0, fontStyle: "italic" }}>
                            {(cell.commission as Commission).name}
                          </p>
                        ) : (
                          <></>
                        )}
                        <h2
                          style={{
                            color: cell.text_color || undefined,
                            margin: 0,
                            fontSize: Math.max(
                              40 -
                                (Math.max(translation.title?.length || 1), 10),
                              25
                            ),
                          }}
                        >
                          {translation.title}
                        </h2>
                        <p style={{ margin: 0, fontStyle: "italic" }}>
                          {formattedDate}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <Markdown>{translation.description}</Markdown>
              </td>
            </tr>
            {cell.url ? (
              <tr>
                <td style={{ textAlign: "end" }}>
                  <a
                    href={cell.url}
                    style={{
                      background: cell.button_color || undefined,
                      ...BUTTON_STYLE,
                    }}
                  >
                    <span>{translation.detail_button_title || ">"}</span>
                  </a>
                </td>
              </tr>
            ) : (
              <></>
            )}
          </tbody>
        </table>
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
        // @ts-ignore
        readSingleton("save_the_date", {
          fields: [
            "image",
            "background_color",
            "text_color",
            "title_color",
            "button_color",
            { translations: ["*"] },
            "language_button_target",
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
            "recurrence",
            { translations: ["*"], commission: ["id", "name"] },
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

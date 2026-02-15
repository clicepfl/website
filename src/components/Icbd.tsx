import Card from "@/components/Card";
import DirectusImage from "@/components/DirectusImage";
import IcbdActivityCard from "@/components/IcbdActivityCard";
import ParticlesComponent from "@/components/Particles";
import TabTitle from "@/components/TabTitle";
import { findStartTime, Timetable } from "@/components/Timetable";
import { getDirectusOgImageUrl } from "@/directus";
import { getTranslation, useTranslationTable } from "@/locales";
import style from "@/styles/ICBDPage.module.scss";
import pageStyle from "@/styles/Page.module.scss";
import { ICBD, ICBDActivity, ICBDPhd, ICBDSpeaker } from "@/types/aliases";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function ICBDDisplay({ icbd }: { icbd: ICBD }) {
  const router = useRouter();
  const translation = getTranslation(icbd, router.locale);

  const formattedDate = new Intl.DateTimeFormat(router.locale, {
    weekday: "long", // full weekday name (e.g., 'Monday')
    year: "numeric", // full year (e.g., 2025)
    month: "long", // full month name (e.g., 'January')
    day: "numeric", // day of the month (e.g., 5)
    timeZone: "Europe/Zurich", // timezone of formatting (used to calculate the actual values)
  }).format(new Date(icbd.date || ""));

  const formatTime = (time: string): string => {
    const [hours, minutes] = time.split(":").map(Number); // Split and parse hours and minutes
    const period = hours >= 12 ? "pm" : "am"; // Determine AM/PM
    const formattedHour = hours % 12 || 12; // Convert 24-hour time to 12-hour time, handling midnight (0 becomes 12)
    return `${formattedHour}${minutes ? `:${minutes}` : ""}${period}`;
  };

  const formattedSecondTitle = `${formatTime(
    icbd.start_time || ""
  )} to ${formatTime(icbd.end_time || "")}, ${icbd.place}`;

  const tt = useTranslationTable();

  return (
    <>
      <style jsx global>{`
        body {
          background: white;
        }
      `}</style>

      <TabTitle title={"ICBD"} image={getDirectusOgImageUrl(icbd.logo)} />

      <div className={style.header}>
        <div className={style.logo_div}>
          <DirectusImage
            sizes={"50rem"}
            name={"icbd"}
            img={icbd.logo}
            className={style.logo}
          />
          <h1>{formattedDate}</h1>
          <h2>{formattedSecondTitle}</h2>
        </div>

        <ParticlesComponent id={style.particles} />
      </div>

      <div className={style.mainDiv}>
        <div className={pageStyle.main}>
          <div className={pageStyle.center}>
            <div className={style.registration}>
              <h1>{tt["icbd.registration"]}</h1>
              <Markdown>{translation.registration_instructions}</Markdown>
            </div>

            <Markdown>{translation.description}</Markdown>
            {icbd.presentation_video ? (
              <video
                width="600"
                controls
                preload="none"
                className={pageStyle.video}
              >
                <source src={icbd.presentation_video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className={style.partners}>
          <div className={style.partnersList}>
            {icbd.partners_images?.map((file) =>
              typeof file === "number" ? (
                <></>
              ) : (
                <DirectusImage
                  sizes="20rem"
                  img={file.directus_files_id}
                  key={
                    typeof file.directus_files_id === "string"
                      ? file.directus_files_id
                      : file.directus_files_id?.id
                  }
                  className={style.partnerImage}
                />
              )
            )}
          </div>
        </div>

        <div className={pageStyle.main}>
          <h1>{tt["icbd.alumni"]}</h1>
          <h2>{tt["icbd.alumni-description"]}</h2>

          <div className={style.alumni}>
            <div className={style.alumniList}>
              {(icbd.speakers as ICBDSpeaker[]).map((speaker: ICBDSpeaker) => {
                const card = (
                  <Card
                    key={speaker.id}
                    img={speaker.picture}
                    title={`${speaker.first_name} ${speaker.last_name}` || ""}
                    description={speaker.company || ""}
                  />
                );

                return speaker.linkedin ? (
                  <a key={speaker.id} href={speaker.linkedin}>
                    {card}
                  </a>
                ) : (
                  card
                );
              })}
            </div>
          </div>
        </div>

        <div className={pageStyle.main}>
          <h1>{tt["icbd.phds"]}</h1>
          <h2>{tt["icbd.phds-description"]}</h2>
          <div className={style.alumni}>
            <div className={style.alumniList}>
              {(icbd.phds as ICBDPhd[]).map((phd: ICBDPhd) => (
                <Card
                  key={phd.id}
                  img={phd.picture}
                  title={`${phd.first_name} ${phd.last_name}` || ""}
                  description={phd.laboratory || ""}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={pageStyle.main}>
          <h1>{tt["icbd.timetable"]}</h1>
          <div className={style.timetable}>
            <Timetable activities={icbd.activities as ICBDActivity[]} />
          </div>
        </div>

        <div className={style.activities}>
          <h1>{tt["icbd.activities"]}</h1>

          <div className={style.activitiesList}>
            {(icbd.activities as ICBDActivity[])
              .sort((a, b) => {
                return findStartTime(a) - findStartTime(b);
              })
              .map((activity: ICBDActivity) => (
                <IcbdActivityCard key={activity.id} activity={activity} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

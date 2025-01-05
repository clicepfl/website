import Card from "@/components/Card";
import DirectusImage from "@/components/DirectusImage";
import IcbdActivityCard from "@/components/IcbdActivityCard";
import ParticlesComponent from "@/components/Particles";
import TabTitle from "@/components/TabTitle";
import { directus, getDirectusImageUrl, populateLayoutProps } from "@/directus";
import { getTranslation, useTranslationTable } from "@/locales";
import style from "@/styles/ICBDPage.module.scss";
import pageStyle from "@/styles/Page.module.scss";
import { ICBD, ICBDActivity, ICBDSpeaker } from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function ICBDPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const translation = getTranslation(props.icbd, router.locale);
  const tt = useTranslationTable();

  return (
    <>
      <style jsx global>{`
        body {
          background: white;
        }
      `}</style>

      <TabTitle title={"ICBD"} image={getDirectusImageUrl(props.icbd.logo)} />

      <div className={style.header}>
        <div className={style.logo_div}>
          <DirectusImage
            sizes={"50rem"}
            name={"icbd"}
            img={props.icbd.logo}
            className={style.logo}
          />
          <h1>{new Date(props.icbd.date).toUTCString()}</h1>
          <h2>{props.icbd.place}</h2>
        </div>

        <ParticlesComponent id={style.particles} />
      </div>

      <div className={style.mainDiv}>
        <p className={style.text}>{tt["subsonic.catchphrase"]}</p>
        <p className={style.text}>{tt["subsonic.date-and-place"]}</p>

        <div className={pageStyle.main}>
          <div className={pageStyle.center}>
            <div className={style.registration}>
              <h1>Registration</h1>
              <Markdown>{translation.registration_instructions}</Markdown>
              <div className={style.buttons}>
                <script
                  id="luma-checkout"
                  src="https://embed.lu.ma/checkout-button.js"
                />
                <a
                  href="https://lu.ma/event/evt-jl8ySRI9GGAtkWm"
                  className="luma-checkout--button"
                  data-luma-action="checkout"
                  data-luma-event-id="evt-jl8ySRI9GGAtkWm"
                >
                  Talks and meetups
                </a>
                <a
                  href="https://lu.ma/event/evt-sddFjg2Xixyj5PV"
                  className="luma-checkout--button"
                  data-luma-action="checkout"
                  data-luma-event-id="evt-sddFjg2Xixyj5PV"
                >
                  Mock interviews
                </a>
                <a
                  href="https://lu.ma/event/evt-yzNqzZ2llO3kzoL"
                  className="luma-checkout--button"
                  data-luma-action="checkout"
                  data-luma-event-id="evt-yzNqzZ2llO3kzoL"
                >
                  Speed Networking
                </a>
              </div>
            </div>

            <h1>Description</h1>

            <Markdown>{translation.description}</Markdown>
            {props.icbd.presentation_video ? (
              <video
                width="600"
                controls
                preload="none"
                className={pageStyle.video}
              >
                <source src={props.icbd.presentation_video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className={style.partners}>
          <h1>Partners</h1>
        </div>

        <div className={pageStyle.main}>
          <h1>Alumni</h1>
          <h2>speakers present at the event</h2>

          <div className={style.alumni}>
            <div className={style.alumniList}>
              {props.speakers.map((speaker: ICBDSpeaker) => {
                return (
                  <Card
                    key={speaker.id}
                    img={speaker.picture}
                    title={`${speaker.first_name} ${speaker.last_name}` || ""}
                    description={speaker.company || ""}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className={pageStyle.main}>
          <h1>PHD students</h1>
          <h2>during the poster session</h2>
        </div>

        <div className={pageStyle.main}>
          <h1>Timetable</h1>
        </div>

        <div className={style.activities}>
          <h1>Activities</h1>

          <div className={style.activitiesList}>
            {props.activities.map((activity: ICBDActivity) => {
              const t = getTranslation(activity, router.locale);
              return <IcbdActivityCard key={activity.id} activity={activity} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  icbd: ICBD;
  speakers: ICBDSpeaker[];
  activities: ICBDActivity[];
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      icbd: await directus().request(
        // @ts-ignore
        readSingleton("ICBD", {
          fields: [
            "logo",
            "presentation_video",
            "date",
            "place",
            "start_time",
            "end_time",
            { translations: ["*"] },
          ],
        })
      ),
      speakers: await directus().request(
        readItems("icbd_speakers", {
          fields: ["picture", "first_name", "last_name", "company"],
        })
      ),
      activities: await directus().request(
        readItems("icbd_activities", {
          fields: ["hosts", "icon", { translations: ["*"] }],
        })
      ),
    },
  };
});

import { getTranslation, locale } from "@/locales";
import styles from "@/styles/IcbdActivityCard.module.scss";
import { ICBDActivity, ICBDSpeaker, ICBDSpeakerActivityRelation } from "@/types/aliases";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import DirectusImage from "./DirectusImage";

export default function IcbdActivityCard(props: { activity: ICBDActivity }) {
  const router = useRouter();

  const hosts = props.activity.hosts as ICBDSpeakerActivityRelation[];
  console.log(props.activity);

  const translation = getTranslation(props.activity, locale(router));
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <DirectusImage
          sizes="5rem"
          img={props.activity.icon}
          name={translation.name || ""}
          className={styles.picture}
        />
        <h2>{translation.name}</h2>
      </div>
      <Markdown className={styles.description}>
        {translation.description}
      </Markdown>
      {hosts.length != 0 ? (
        <p className={styles.hosts}>
          {"⦿ " +
            hosts
              .map((s) => {
                let speaker = s.icbd_speakers_id as ICBDSpeaker;
                return `${speaker.first_name} ${speaker.last_name}`;
              })
              .join(" - ")}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

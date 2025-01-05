import DirectusImage from "./DirectusImage";
import { getTranslation, locale } from "@/locales";
import styles from "@/styles/IcbdActivityCard.module.scss";
import { ICBDActivity } from "@/types/aliases";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function IcbdActivityCard(props: { activity: ICBDActivity }) {
  const router = useRouter();

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
    </div>
  );
}

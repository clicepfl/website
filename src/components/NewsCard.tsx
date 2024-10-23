import Button from "./Button";
import DirectusImage from "./DirectusImage";
import { getTranslation, locale } from "@/locales";
import styles from "@/styles/NewsCard.module.scss";
import { News } from "@/types/aliases";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NewsCard(props: { news: News; vertical?: boolean }) {
  const router = useRouter();

  const translation = getTranslation(props.news, locale(router));
  return (
    <Link
      href={`/news/${props.news.slug}`}
      className={`${styles.newsCard} ${props.vertical ? styles.vertical : ""}`}
    >
      <DirectusImage
        sizes="30rem"
        img={translation.banner}
        name={translation.title || ""}
        className={styles.picture}
        cover={true}
      />

      <div className={styles.content}>
        <h2>{translation.title}</h2>
        <p className={styles.description}>{translation.description}</p>
        <div className={styles.details}>
          <p className={styles.date}>
            {props.news.date_created
              ? new Date(props.news.date_created).toDateString()
              : ""}
          </p>
        </div>
        <Button className={styles.button} text=">" />
      </div>
    </Link>
  );
}

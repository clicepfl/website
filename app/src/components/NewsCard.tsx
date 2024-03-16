import Button from "./Button";
import DirectusImage from "./DirectusImage";
import { getTranslation } from "@/locales";
import styles from "@/styles/NewsCard.module.scss";
import { News } from "@/types/aliases";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NewsCard({ news }: { news: News }) {
  const router = useRouter();

  const translation = getTranslation(news, router.locale);
  return (
    <Link href={`/news/${news.slug}`} className={`${styles.newsCard}`}>
      <DirectusImage
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
            {news.date_created ? new Date(news.date_created).toUTCString() : ""}
          </p>
          <Button
            className={styles.button}
            text="> "
            link={`/news/${news.slug}`}
            size="small"
          />
        </div>
      </div>
    </Link>
  );
}

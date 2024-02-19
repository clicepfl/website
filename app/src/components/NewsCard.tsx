import { getTranslation } from "@/locales";
import styles from "@/styles/NewsCard.module.scss";
import { News } from "@/types/aliases";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NewsCard({ news }: { news: News }) {
  const router = useRouter();

  return (
    <Link href={`/news/${news.slug}`} className={`${styles.newsCard}`}>
      <div></div>
      <div>
        <h2>{getTranslation(news, router.locale).title}</h2>
        <p>{getTranslation(news, router.locale).description}</p>
        <p>
          {news.date_created ? new Date(news.date_created).toUTCString() : ""}
        </p>
      </div>
    </Link>
  );
}

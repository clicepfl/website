import StrapiImage from "./DirectusImage";
import styles from "@/styles/NewsCard.module.scss";
import { ApiNews } from "@/types/generated/contentTypes";
import Link from "next/link";

export default function NewsCard({ news }: { news: ApiNews }) {
  return (
    <Link href={`/news/${news.slug}`} className={`${styles.newsCard}`}>
      <div>
        <StrapiImage img={news.picture} />
      </div>
      <div>
        <h2>{news.news_title}</h2>
        <p>{news.small_description}</p>
        <p>{new Date(news.createdAt).toUTCString()}</p>
      </div>
    </Link>
  );
}

import StrapiImage from "./StrapiImage";
import styles from "@/styles/NewsCard.module.scss";
import { ApiNews } from "@/types/generated/contentTypes";
import Link from "next/link";

export default function NewsCard({ news }: { news: ApiNews }) {
  return (
    <Link
      href={`/news/${news.attributes.slug}`}
      className={`${styles.newsCard}`}
    >
      <div>
        <StrapiImage img={news.attributes.picture} size="small" />
      </div>
      <div>
        <h2>{news.attributes.news_title}</h2>
        <p>{news.attributes.small_description}</p>
        <p>{new Date(news.attributes.createdAt).toUTCString()}</p>
      </div>
    </Link>
  );
}

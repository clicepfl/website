import StrapiImage from "./StrapiImage";
import { ApiNews } from "@/types/generated/contentTypes";
import Link from "next/link";

export default function NewsCard({
  news,
  vertical,
}: {
  news: ApiNews;
  vertical?: boolean;
}) {
  return (
    <Link
      href={`/news/${(news as any).id}`}
      className={`news-card ${vertical ? "vertical" : "horizontal"}`}
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

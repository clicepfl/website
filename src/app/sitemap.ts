import { BASE_URL } from "@/consts";
import { directus } from "@/directus";
import { readItems } from "@directus/sdk";
import { MetadataRoute } from "next";

type SitemapEntry = MetadataRoute.Sitemap[0];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  function subpage(
    path: string,
    changeFrequency: SitemapEntry["changeFrequency"],
    priority: number
  ): SitemapEntry {
    return {
      url: `${BASE_URL}/${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  }

  // Try to fetch commissions and news. This avoids an error when building the static version since
  // there are no token to access directus.
  let commissions: { slug?: string | null }[] = [];
  let news: { slug?: string | null }[] = [];
  try {
    news = await directus().request(readItems("news", { fields: ["slug"] }));
    commissions = await directus().request(
      readItems("commissions", { fields: ["slug"] })
    );
  } catch (e) {}

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...news.map((n) => subpage(`news/${n.slug}`, "monthly", 0.6)),
    ...commissions.map((c) => subpage(`commissions/${c.slug}`, "monthly", 0.6)),
    ...[
      "association",
      "commissions",
      "galleries",
      "icbd",
      "news",
      "save-the-date",
      "subsonic",
    ].map((p) => subpage(p, "weekly", 0.8)),
  ];
}

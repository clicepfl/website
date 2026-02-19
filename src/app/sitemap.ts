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

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...(await directus().request(readItems("news", { fields: ["slug"] }))).map(
      (n) => subpage(`news/${n.slug}`, "monthly", 0.6)
    ),
    ...(
      await directus().request(readItems("commissions", { fields: ["slug"] }))
    ).map((c) => subpage(`commissions/${c.slug}`, "monthly", 0.6)),
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

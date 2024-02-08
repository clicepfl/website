import { createDirectus, rest, staticToken } from "@directus/sdk";

export const directus = createDirectus(process.env.DIRECTUS_URL || "")
  .with(staticToken(process.env.DIRECTUS_TOKEN || ""))
  .with(rest());

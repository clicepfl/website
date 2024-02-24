import { Schema } from "./types/schema";
import { createDirectus, rest, staticToken } from "@directus/sdk";

export const directus = () =>
  createDirectus<Schema>(process.env.DIRECTUS_URL || "")
    .with(staticToken(process.env.DIRECTUS_TOKEN || ""))
    .with(rest());

import config from "@/../next.config";
import { StrapiLocale } from "strapi-sdk-js";

export type Locale = string;

export function locale(context: { locale?: string }) {
  return (context.locale || config.i18n.defaultLocale) as StrapiLocale;
}

interface Translations {
  dateIndicator: string;
  timeIndicator: string;
  by: string;
  relatedContent: string;
  committee: string;
}

const translations: { [key in Locale]: Translations } = {
  en: {
    dateIndicator: "on",
    timeIndicator: "at",
    by: "by",
    relatedContent: "related content",
    committee: "committee",
  },
  fr: {
    dateIndicator: "le",
    timeIndicator: "à",
    by: "par",
    relatedContent: "contenu lié",
    committee: "comité",
  },
};

interface LangOptions {
  capitalize: boolean;
}
export function applyOptions(
  str: string,
  locale: Locale,
  opts?: LangOptions
): string {
  let result = str;
  if (opts?.capitalize) {
    result = result.replace(/(\s*\w)/, (s) => s.toUpperCase());
  }

  return result;
}

export function formatDate(
  date: Date | string,
  locale: Locale = config.i18n.defaultLocale,
  opts?: LangOptions
): string {
  const d = new Date(date);
  const t = translations[locale];

  return applyOptions(
    `${t.dateIndicator} ${d.toLocaleDateString(locale, {
      dateStyle: "long",
    })}`,
    locale,
    opts
  );
}

export function translate(
  id: keyof Translations,
  locale: Locale = config.i18n.defaultLocale,
  opts?: LangOptions
) {
  return applyOptions(translations[locale][id], locale, opts);
}

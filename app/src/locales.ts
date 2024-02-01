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
  commission: string;
}

type OptionsOperators = {
  [key in keyof LangOptions]: (value: string) => string;
};

const translations: { [key in Locale]: Translations & OptionsOperators } = {
  en: {
    dateIndicator: "on",
    timeIndicator: "at",
    by: "by",
    relatedContent: "related content",
    committee: "committee",
    commission: "commission",
    capitalize: (s) => s.replace(/^(\s*\w)/, (s) => s.toUpperCase()),
    plural: (s) => s + "s",
  },
  fr: {
    dateIndicator: "le",
    timeIndicator: "à",
    by: "par",
    relatedContent: "contenu lié",
    committee: "comité",
    commission: "commission",
    capitalize: (s) => s.replace(/^(\s*\w)/, (s) => s.toUpperCase()),
    plural: (s) => (s.endsWith("u") ? s + "x" : s + "s"),
  },
};

interface LangOptions {
  capitalize?: boolean;
  plural?: boolean;
}

export function applyOptions(
  str: string,
  locale: Locale,
  opts?: LangOptions
): string {
  let result = str;
  let l = translations[locale];

  if (opts) {
    Object.keys(opts).forEach((opt: string) => {
      if ((opts as any)[opt] && opt in l) {
        result = (l as any)[opt](result);
      }
    });
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

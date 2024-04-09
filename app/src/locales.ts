import config from "@/../next.config";
import React, { useContext } from "react";

export type Locale = string;

export function locale(locale?: string | { locale?: string }) {
  return (
    (typeof locale === "string" ? locale : locale?.locale) ||
    config.i18n.defaultLocale
  );
}

interface Translations {
  dateIndicator: string;
  timeIndicator: string;
  by: string;
  relatedContent: string;
  committee: string;
  commission: string;
  partners: string;
  association: string;
  news: string;
  moreNews: string;
  error404: string;
  error404desc: string;
  gallery: string;
  readMore: string;
  slogan: string;
}

export type TranslationTable = { [lang: string]: { [key: string]: string } };

export const TranslationTableContext = React.createContext(
  {} as { [key: string]: string }
);

export const useTranslationTable = () => useContext(TranslationTableContext);

export function capitalize(val?: string) {
  return val && val.length > 0
    ? (val.at(0) as string).toUpperCase() + val.slice(1)
    : "";
}

interface LangOptions {
  capitalize?: boolean;
  plural?: boolean;
}

export function formatDate(
  date: Date | string,
  locale: Locale = config.i18n.defaultLocale,
  t: { [key: string]: string },
  cap?: boolean
): string {
  const d = new Date(date);
  const val = `${t.dateIndicator} ${d.toLocaleDateString(locale, {
    dateStyle: "long",
  })}`;

  return cap ? capitalize(val) : val;
}
/**
 * Extracts the translation from an object queried from the Directus instance.
 * If the locale given as parameter could not be found in the object, it will default to the `en` locale.
 * If there is no `en` locale, the function will throw an error.
 *
 * @param model an object containing translations
 * @param locale the locale wanted
 * @returns the corresponding instance of the translation objects
 */
export function getTranslation<
  T extends {
    languages_code?: string | { code?: string | undefined } | null | undefined;
  }
>(
  model: {
    translations?: (number | T)[] | null;
  },
  loc: string | undefined
): T {
  const l = locale(loc);

  function getLang(
    language_code: string | { code?: string | undefined } | null | undefined
  ): string | null {
    return language_code
      ? typeof language_code === "string"
        ? language_code.slice(0, 2)
        : language_code.code?.slice(0, 2) || null
      : null;
  }

  if (model.translations) {
    let translations = model.translations.filter(
      (t) => typeof t !== "number"
    ) as T[];

    let res =
      translations.find((t) => t.languages_code === l) ||
      translations.find((t) => getLang(t.languages_code) == getLang(l)) ||
      translations.find((t) => getLang(t.languages_code) == "en") ||
      null;

    if (res) {
      return res;
    }
  }

  console.error(`While getting ${l} from`);
  console.error(model);
  throw new Error("Missing translation in queried data");
}

/**
 * Adds the necessary fields to a query parameters object to fetch all the translations of the item(s).
 * Example: `{filter: {key: {_eq: value}}, ...queryTranslations}`
 *
 * /!\ Do not use when `fields` is set to a custom value /!\
 */
export const queryTranslations = {
  fields: ["*", { translations: ["*"] }],
};

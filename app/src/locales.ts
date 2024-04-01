import config from "@/../next.config";

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

type OptionsOperators = {
  [key in keyof LangOptions]: (value: string) => string;
};

const translations: { [key in Locale]: Translations & OptionsOperators } = {
  "en-US": {
    dateIndicator: "on",
    timeIndicator: "at",
    by: "by",
    relatedContent: "related content",
    committee: "committee",
    commission: "commission",
    partners: "partners",
    association: "association",
    news: "news",
    moreNews: "more news",
    error404: "error 404",
    error404desc: "this page does not exist!",
    gallery: "gallery",
    readMore: "read more >",
    slogan:
      "Association of students in Computer science and Communication systems",
    capitalize: (s) => s.replace(/^(\s*\w)/, (s) => s.toUpperCase()),
    plural: (s) => (!s.endsWith("s") ? s + "s" : s),
  },
  "fr-FR": {
    dateIndicator: "le",
    timeIndicator: "à",
    by: "par",
    relatedContent: "contenu lié",
    committee: "comité",
    commission: "commission",
    partners: "partenaires",
    association: "association",
    news: "news",
    moreNews: "plus de news",
    error404: "erreur 404",
    error404desc: "cette page n'existe pas!",
    gallery: "galerie",
    readMore: "lire plus >",
    slogan:
      "Association des étudiant.e.s en Informatique et Systèmes de communication",
    capitalize: (s) => s.replace(/^(\s*\w)/, (s) => s.toUpperCase()),
    plural: (s) => (s.endsWith("u") ? s + "x" : !s.endsWith("s") ? s + "s" : s),
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

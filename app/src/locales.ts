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
  locale?: string
): T {
  const l = locale || "en-US";

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
 * @param query the initial query parameters
 * @returns updated query parameters
 */
export function queryTranslations(query?: any) {
  if (!query) {
    return {
      fields: ["*", { translations: ["*"] }],
    };
  } else {
    if ("fields" in query) {
      if (Array.isArray(query.fields)) {
        if (
          !query.fields.some(
            (e: any) => typeof e === "object" && "translations" in e
          )
        ) {
          query.fields.push({ translations: ["*"] });
        }
        return query;
      } else {
        throw new Error("Malformed query parameters");
      }
    } else {
      query["fields"] = ["*", { translations: ["*"] }];
      return query;
    }
  }
}

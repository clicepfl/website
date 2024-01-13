export type Locale = "en" | "fr";

interface Translations {
  dateIndicator: string;
  timeIndicator: string;
  by: string;
}

const translations: { [key in Locale]: Translations } = {
  en: {
    dateIndicator: "on",
    timeIndicator: "at",
    by: "by",
  },
  fr: {
    dateIndicator: "le",
    timeIndicator: "à",
    by: "par",
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
  locale: Locale,
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
  locale: Locale,
  opts?: LangOptions
) {
  return applyOptions(translations[locale][id], locale, opts);
}

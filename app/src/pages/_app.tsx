import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { TranslationTableContext, locale } from "@/locales";
import "@/styles/globals.scss";
import "@/styles/utilities/_fonts.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <TranslationTableContext.Provider
      value={
        pageProps.layoutProps?.translations
          ? pageProps.layoutProps?.translations[locale(router.locale)]
          : {}
      }
    >
      <NavigationBar
        commissions={pageProps.layoutProps?.commissions}
        langs={pageProps.layoutProps?.langs}
        socials={pageProps.layoutProps?.socialLinks}
      />
      <div className="main">
        <Component {...pageProps} />
      </div>
      <Footer
        association={pageProps.layoutProps?.association}
        socials={pageProps.layoutProps?.socialLinks}
      />
    </TranslationTableContext.Provider>
  );
}

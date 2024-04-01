import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import "@/styles/globals.scss";
import "@/styles/utilities/_fonts.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  );
}

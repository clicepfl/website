import Background from "@/assets/background.svg";
import NavigationBar from "@/components/NavigationBar";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <div className="main">
        <Component {...pageProps} />
      </div>
      <div className="background">
        <Background />
      </div>
    </>
  );
}

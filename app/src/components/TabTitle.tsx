import Head from "next/head";

export default function TabTitle(props: {
  title: string;
  ogTitle?: string;
  type?: string;
  image?: string;
  description?: string;
}) {
  return (
    <Head>
      <title>{`CLIC | ${props.title}`}</title>
      <meta property="og:title" content={props.ogTitle || props.title} />
      <meta property="og:type" content={props.type || "website"} />
      {typeof props.image === "string" ? (
        <meta property="og:image" content={props.image} />
      ) : (
        <></>
      )}
      {typeof props.description === "string" ? (
        <meta property="og:description" content={props.description} />
      ) : (
        <></>
      )}
    </Head>
  );
}

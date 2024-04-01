import Head from "next/head";

export default function TabTitle(props: { title: string }) {
  return (
    <Head>
      <title>{`CLIC | ${props.title}`}</title>
    </Head>
  );
}

import TabTitle from "@/components/TabTitle";
import { populateLayoutProps } from "@/populate";
import styles from "@/styles/Page.module.scss";
import { GetServerSideProps } from "next";
import Image from "next/image";

export default function DonutsPage() {
  return (
    <div className={styles.main}>
      <TabTitle title="Donuts" />
      <div className={styles.center}>
        <Image
          src="/donuts.gif"
          alt="Donuts"
          width={480}
          height={480}
          unoptimized
        />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = populateLayoutProps(
  async () => ({ props: {} })
);

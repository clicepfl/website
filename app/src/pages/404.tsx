import Button from "@/components/Button";
import TabTitle from "@/components/TabTitle";
import styles from "@/styles/Page.module.scss";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <TabTitle title="Not found" />

      <div className={styles.main}>
        <h1>{"Error 404"}</h1>
        <h4>{"You are lost :/"}</h4>
        <Button text="Home" onClick={() => router.push("/")} />
      </div>
    </>
  );
}

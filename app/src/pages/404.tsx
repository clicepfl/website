import Background from "@/assets/background.svg";
import Button from "@/components/Button";
import TabTitle from "@/components/TabTitle";
import styles from "@/styles/404.module.scss";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <Background className={styles.background} name="background" />
      <TabTitle title="Not found" />

      <div className={styles.main}>
        <div className={styles.center}>
          <h1>{"Error 404"}</h1>
          <h4>{"You are lost :/"}</h4>
          <Button text="Home" onClick={() => router.push("/")} />
        </div>
      </div>
    </>
  );
}

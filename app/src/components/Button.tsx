import styles from "@/styles/Button.module.scss";
import Link from "next/link";

export default function Card(
  props: {
    text: string;
    link: string;
    linkTarget?: "_blank";
    className?: string;
  } & { size: "small" | "large" }
) {
  let text = props.text;
  let link = props.link;
  let linkTarget = props.linkTarget;

  return (
    <>
      <Link href={link} target={linkTarget}>
        <div
          className={`${styles.button} ${styles[props.size]} ${
            props.className
          }`}
        >
          {text}
        </div>
      </Link>
    </>
  );
}

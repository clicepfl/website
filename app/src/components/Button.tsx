import styles from "@/styles/Button.module.scss";

export default function Button(props: {
  text: string;
  className?: string;
  size: "small" | "large";
  onClick?: () => void;
}) {
  let text = props.text;

  return (
    <>
      <div
        className={`${styles.button} ${styles[props.size]} ${props.className}`}
        onClick={props.onClick}
      >
        {text}
      </div>
    </>
  );
}

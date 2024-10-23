import styles from "@/styles/Button.module.scss";

export default function Button(props: {
  text: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <>
      <div
        className={`${styles.button} ${props.className}`}
        onClick={props.onClick}
      >
        {props.text}
      </div>
    </>
  );
}

import styles from "@/styles/Button.module.scss";

export default function Button(props: {
  text: string;
  className?: string;
  onClick?: () => void;
}) {
  let text = props.text;

  return (
    <>
      <div
        className={`${styles.button} ${props.className}`}
        onClick={props.onClick}
      >
        {text}
      </div>
    </>
  );
}

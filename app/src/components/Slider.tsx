import Arrow from "@/assets/slider_arrow.svg";
import styles from "@/styles/Slider.module.scss";
import { useState } from "react";

export default function Slider({ children }: { children: JSX.Element[] }) {
  const [index, setIndex] = useState(0);

  if (children.length > 1) {
    return (
      <div className={styles.slider}>
        <div className={styles.content}>
          <Arrow
            onClick={(e: MouseEvent) =>
              setIndex((i) => (i - 1 + children.length) % children.length)
            }
            className={styles.arrow + " " + styles.left}
          />
          {children.map((c, i) => (
            // All the elements are loaded, only one is visible.
            // This avoid having to load assets on each swap.
            <div key={i} className={i === index ? styles.selected : ""}>
              {c}
            </div>
          ))}
          <Arrow
            onClick={(e: MouseEvent) => {
              setIndex((i) => (i + 1) % children.length);
            }}
            className={styles.arrow + " " + styles.right}
          />
        </div>
        <div className={styles.position}>
          {children.map((c, i) => (
            <div
              key={i}
              className={i === index ? styles.selected : ""}
              onClick={(e) => setIndex(i)}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return children[0];
  }
}

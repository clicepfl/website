import DirectusImage from "./DirectusImage";
import { TranslationTable, useTranslationTable } from "@/locales";
import styles from "@/styles/Gallery.module.scss";
import { components } from "@/types/schema";

export default function Gallery(props: {
  imgs?: (string | components["schemas"]["Files"])[] | null;
  limit?: number;
  translations: TranslationTable;
}) {
  const translations = useTranslationTable();

  if (props.imgs == null) {
    return;
  }

  let count_5 = 0;
  let count_3 = 0;

  const content = props.imgs.slice(0, props.limit || 15).map((img, key) => {
    let is_long_5 = Math.random() > 0.5 && count_5 < 4;
    count_5 += is_long_5 ? 2 : 1;
    count_5 %= 5;

    let is_long_3 = Math.random() > 0.5 && count_3 < 2;
    count_3 += is_long_3 ? 2 : 1;
    count_3 %= 3;

    return (
      <DirectusImage
        sizes={
          is_long_5
            ? "(max-width: 1200px) 20vw, 40vw"
            : is_long_3
            ? "40vw"
            : "20vw"
        }
        img={img}
        name={"gallery image"}
        cover={true}
        className={`
            ${styles.image} 
            ${is_long_3 ? styles.long_3 : ""} 
            ${is_long_5 ? styles.long_5 : ""}
          `}
        key={key}
      />
    );
  });

  return (
    <div className={styles.main}>
      <h1>{translations["gallery"]}</h1>
      <div className={styles.gallery}>{content}</div>
    </div>
  );
}

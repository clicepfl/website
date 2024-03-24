import DirectusImage from "./DirectusImage";
import { translate } from "@/locales";
import styles from "@/styles/Gallery.module.scss";
import { components } from "@/types/schema";
import { useRouter } from "next/router";

export default function Gallery({
  imgs,
  limit = 15,
}: {
  imgs?: (string | components["schemas"]["Files"])[] | null;
  limit?: number;
}) {
  const router = useRouter();

  if (imgs == null) {
    return;
  }

  imgs = imgs.slice(0, limit);

  var content: any = [];

  var count_5 = 0;
  var count_3 = 0;
  imgs.map((img) => {
    var is_long_5 = Math.random() > 0.5 && count_5 < 4;
    count_5 += is_long_5 ? 2 : 1;
    count_5 %= 5;

    var is_long_3 = Math.random() > 0.5 && count_3 < 2;
    count_3 += is_long_3 ? 2 : 1;
    count_3 %= 3;

    content.push(
      <DirectusImage
        img={img}
        name={"gallery image"}
        cover={true}
        className={`
            ${styles.image} 
            ${is_long_3 ? styles.long_3 : ""} 
            ${is_long_5 ? styles.long_5 : ""}
          `}
      />
    );
  });

  return (
    <div className={styles.main}>
      <h1>{translate("gallery", router.locale)}</h1>
      <div className={styles.gallery}>{content}</div>
    </div>
  );
}

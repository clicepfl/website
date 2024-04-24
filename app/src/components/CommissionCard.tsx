import Button from "./Button";
import DirectusImage from "./DirectusImage";
import { getTranslation, locale, useTranslationTable } from "@/locales";
import styles from "@/styles/CommissionCard.module.scss";
import { Commission } from "@/types/aliases";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CommissionCard(props: {
  commission: Commission;
  className?: string;
}) {
  const router = useRouter();

  const translation = getTranslation(props.commission, locale(router));
  const tt = useTranslationTable();

  const img = translation.banner ? translation.banner : props.commission.logo;

  const component = (
    <div>
      <DirectusImage
        sizes="30rem"
        img={img}
        name={props.commission.name || ""}
        className={styles.picture}
        cover={translation.banner != null}
      />
      <div className={styles.content}>
        <h2 className={styles.name}>{props.commission.name}</h2>
        <p className={styles.description}>{translation.small_description}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.card + " " + props.className || ""}>
      <Link
        href={`/commissions/${props.commission.slug}`}
        style={{ display: "contents" }}
      >
        {component}
        <Button text={tt["readMore"]} className={styles.button} />
      </Link>
    </div>
  );
}

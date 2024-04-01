import Button from "./Button";
import DirectusImage from "./DirectusImage";
import { getTranslation, locale, translate } from "@/locales";
import styles from "@/styles/CommissionCard.module.scss";
import { Commission } from "@/types/aliases";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CommissionCard(props: {
  commission: Commission;
  className?: string;
}) {
  const router = useRouter();

  let translation = getTranslation(props.commission, locale(router));
  let img = translation.banner ? translation.banner : props.commission.logo;
  let description = getTranslation(
    props.commission,
    locale(router)
  ).small_description;

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
        <h4 className={styles.name}>{props.commission.name}</h4>
        <p className={styles.description}>{description}</p>
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
        <Button
          text={translate("readMore", router.locale)}
          className={styles.button}
        />
      </Link>
    </div>
  );
}

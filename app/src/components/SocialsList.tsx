import DirectusImage from "./DirectusImage";
import styles from "@/styles/SocialsList.module.scss";
import { SocialLink } from "@/types/aliases";
import Link from "next/link";

export default function SocialsList(props: {
  socials: SocialLink[];
  light?: boolean;
}) {
  if (props.socials.length == 0) {
    return;
  }

  return (
    <div className={styles.socialsList}>
      <div className={styles.list}>
        {props.socials.map((s) => (
          <Link
            href={s.link || ""}
            id={s.id?.toString()}
            key={s.id?.toString()}
          >
            <DirectusImage
              sizes="4rem"
              img={s.logo}
              name={s.media_name}
              className={`${styles.social} ${props.light ? styles.light : ""}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

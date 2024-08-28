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
        {props.socials
          .filter((s) => s)
          .map((s) => {
            const content = (
              <DirectusImage
                sizes="4rem"
                img={s.logo}
                name={s.media_name}
                className={`${styles.social} ${
                  props.light ? styles.light : ""
                }`}
              />
            );

            if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(s.link || "")) {
              return (
                <a
                  href={`mailto:${s.link}`}
                  id={s.id?.toString()}
                  key={s.id?.toString()}
                >
                  {content}
                </a>
              );
            } else {
              return (
                <Link
                  href={s.link || ""}
                  id={s.id?.toString()}
                  key={s.id?.toString()}
                >
                  {content}
                </Link>
              );
            }
          })}
      </div>
    </div>
  );
}

import DirectusImage from "./DirectusImage";
import SocialsList from "./SocialsList";
import styles from "@/styles/Footer.module.scss";
import { Association, SocialLink } from "@/types/aliases";

export default function Footer({
  association,
  socials,
}: {
  association: Association;
  socials: SocialLink[];
}) {
  if (association == null) {
    return;
  }

  return (
    <div className={styles.footer}>
      <div className={styles.bgAnimated}>
        <div className={styles.moving}>
          <p>&nbsp;</p>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.content}>
          <DirectusImage
            img={association.logo}
            name={association.name || ""}
            className={styles.footerLogo}
          />
          <p className={styles.coord}>
            {association.address} <br />
            <a href="mailto:{association.email}">{association.email}</a> <br />
            {association.phone}
          </p>

          <SocialsList socials={socials} light={true} />
        </div>
      </div>
    </div>
  );
}

import DirectusImage from "./DirectusImage";
import SocialsList from "./SocialsList";
import styles from "@/styles/Footer.module.scss";
import { Association, SocialLink } from "@/types/aliases";

export default function Footer(props: {
  association: Association;
  socials: SocialLink[];
}) {
  if (props.association == null) {
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
            sizes="33vw"
            img={props.association.logo}
            name={props.association.name || ""}
            className={styles.footerLogo}
          />
          <p className={styles.coord}>
            {props.association.address} <br />
            <a href="mailto:{association.email}">
              {props.association.email}
            </a>{" "}
            <br />
            {props.association.phone}
          </p>

          <SocialsList socials={props.socials} light={true} />
        </div>
      </div>
    </div>
  );
}

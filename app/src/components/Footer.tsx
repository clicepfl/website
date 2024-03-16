import DirectusImage from "./DirectusImage";
import styles from "@/styles/Footer.module.scss";
import { Association } from "@/types/aliases";

export default function Footer({ association }: { association: Association }) {
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
          <p className={styles.big}>
            Une association à but non-lucratif de l'Ecole Polytechnique Fédérale
            de Lausanne
          </p>
          <p className={styles.coord}>
            {association.address} <br />
            <a href="mailto:{association.email}">{association.email}</a> <br />
            {association.phone}
          </p>

          {/* </br>{{ social.icons() }} */}
        </div>
      </div>
    </div>
  );
}

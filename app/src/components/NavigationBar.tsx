import Corner from "@/assets/corner.svg";
import styles from "@/styles/NavigationBar.module.scss";
import { SocialLink } from "@/types/aliases";
import Link from "next/link";
import { useState } from "react";

/* TODO the socials should be dynamically loaded from Directus. 
  This would probably require to migrate to an App Router to use
  server-side components. */
export default function NavigationBar(props: { socialLinks?: SocialLink[] }) {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.navigationBar}>
      <Link href="/" className={styles.corner}>
        <Corner />
      </Link>

      <div className={styles.navigationMenu}>
        <Link className={styles.menuItem} href="/association">
          L'Association
        </Link>

        <div className={styles.dropdownMenuItem}>
          <Link className={styles.menuItem} href="/commissions">
            Commissions
            <div className={styles.content}>
              <Link className={styles.menuItem} href="/commissions/Polygl0ts">
                Polygl0ts
              </Link>
              <Link className={styles.menuItem} href="/commissions/CEVE">
                CEVE
              </Link>
              <Link className={styles.menuItem} href="/commissions/GameStar">
                Game*
              </Link>
              <Link className={styles.menuItem} href="/commissions/ICTravel">
                IC Travel
              </Link>
              <Link
                className={styles.menuItem}
                href="/commissions/OrbitalGameJam"
              >
                Orbital Game Jam
              </Link>
            </div>
          </Link>
        </div>

        <Link className={styles.menuItem} href="/news">
          News
        </Link>
      </div>
    </div>
  );
}

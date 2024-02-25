import Corner from "@/assets/corner.svg";
import styles from "@/styles/NavigationBar.module.scss";
import Link from "next/link";
import { useState } from "react";

/* TODO the socials should be dynamically loaded from Directus. 
  This would probably require to migrate to an App Router to use
  server-side components. */
export default function NavigationBar() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.navigationBar}>
      {/* <div className={styles.socials}>
        <Link href="https://telegram.com">
          <TelegramIcon className={styles.icon} alt="telegram" />
        </Link>
        <Link href="https://instagram.com">
          <InstagramIcon className={styles.icon} alt="instagram" />
        </Link>
        <Link href="https://x.com">
          <XIcon className={styles.icon} alt="X" />
        </Link>
        <Link href="https://github.com">
          <GitHubIcon className={styles.icon} alt="github" />
        </Link>
      </div> */}

      <Link href="/" className={styles.corner}>
        <Corner />
      </Link>

      <div className={styles.navigationMenu}>
        <Link className={styles.menuItem} href="/association">
          L'Association
        </Link>
        <Link className={styles.menuItem} href="/commissions">
          Commissions
        </Link>
        <Link className={styles.menuItem} href="/news">
          News
        </Link>
      </div>
    </div>
  );
}

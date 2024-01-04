import GitHubIcon from "@/assets/icons/GitHub_icon.svg";
import InstagramIcon from "@/assets/icons/Instagram_icon.svg";
import TelegramIcon from "@/assets/icons/Telegram_icon.svg";
import XIcon from "@/assets/icons/X_icon.svg";
import BurgerIcon from "@/assets/icons/burger_menu_icon.svg";
import FolderIcon from "@/assets/icons/folder.svg";
import styles from "@/styles/NavigationBar.module.scss";
import Link from "next/link";
import { useState } from "react";

function Entry({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className={styles.entry}>
      <FolderIcon className={styles.folderIcon}></FolderIcon>
      <p>{title}</p>
    </Link>
  );
}

function NavMenu() {
  return (
    <div className={styles.navigationMenu}>
      <div className={styles.menuList}>
        <Entry title="L'Association" href="/" />
        <Entry title="Commissions" href="/commissions" />
        <Entry title="Coaching" href="/coaching" />
        <Entry title="Évenements" href="/events" />
        <Entry title="News" href="/news" />
      </div>
    </div>
  );
}

export default function NavigationBar() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.navigationBar}>
      <button className={styles.burgerButton} onClick={toggleMenu}>
        <BurgerIcon></BurgerIcon>
      </button>

      <div className={styles.socials}>
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
      </div>

      <div style={{ display: visible ? "block" : "none" }}>
        <NavMenu />
      </div>
    </div>
  );
}

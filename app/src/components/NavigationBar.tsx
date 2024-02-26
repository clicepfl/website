import Corner from "@/assets/corner.svg";
import styles from "@/styles/NavigationBar.module.scss";
import Link from "next/link";

type LinkRef = {
  title: string;
  href: string;
};

function DropdownMenuItem({
  link,
  subLinks,
}: {
  link: LinkRef;
  subLinks: LinkRef[];
}) {
  const content: any = [];

  subLinks.forEach((subLink) => {
    content.push(
      <Link
        className={styles.menuItem}
        href={link.href + subLink.href}
        key={subLink.title}
      >
        {subLink.title}
      </Link>
    );
  });

  return (
    <div className={styles.dropdownMenuItem}>
      <Link className={styles.menuItem} href={link.href}>
        {link.title}
      </Link>
      <div className={styles.content}>{content}</div>
    </div>
  );
}

export default function NavigationBar() {
  return (
    <div className={styles.navigationBar}>
      <Link href="/" className={styles.corner}>
        <Corner />
      </Link>

      <div className={styles.navigationMenu}>
        <Link className={styles.menuItem} href="/association">
          L'Association
        </Link>

        <DropdownMenuItem
          link={{ title: "Commissions", href: "/commissions" }}
          subLinks={[
            { title: "PolyglOts", href: "/Polygl0ts" },
            { title: "CEVE", href: "/CEVE" },
            { title: "Game*", href: "/Game*" },
            { title: "IC Travel", href: "/ICTravel" },
            { title: "Orbital Game Jam", href: "/OrbitalGameJam" },
          ]}
        />

        <Link className={styles.menuItem} href="/news">
          News
        </Link>
      </div>
    </div>
  );
}

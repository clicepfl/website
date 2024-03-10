import Corner from "@/assets/corner.svg";
import styles from "@/styles/NavigationBar.module.scss";
import { Commission } from "@/types/aliases";
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
        <i className={styles.arrow} />
      </Link>
      <div className={styles.content}>{content}</div>
    </div>
  );
}

export default function NavigationBar(props: { commissions?: Commission[] }) {
  return (
    <div className={styles.navigationBar}>
      <Link href="/" className={styles.corner}>
        <Corner />
      </Link>

      <div className={styles.navigationMenu}>
        <Link className={styles.menuItem} href="/association">
          L&apos;Association {/* TODO: translation */}
        </Link>

        <DropdownMenuItem
          link={{ title: "Commissions", href: "/commissions" }}
          subLinks={
            props.commissions
              ? props.commissions.map((c) => {
                  if (c.name && c.slug) {
                    return {
                      title: c.name,
                      href: `/${c.slug}`,
                    };
                  } else {
                    throw new Error("Invalid commission");
                  }
                })
              : []
          }
        />

        <Link className={styles.menuItem} href="/news">
          News
        </Link>
      </div>
    </div>
  );
}

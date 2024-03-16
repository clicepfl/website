import Corner from "@/assets/corner.svg";
import Lang from "@/assets/lang.svg";
import styles from "@/styles/NavigationBar.module.scss";
import { Commission } from "@/types/aliases";
import { Schema } from "@/types/schema";
import Link from "next/link";
import { useRouter } from "next/router";

type LinkRef = {
  title: string;
  href: string;
};

function DropdownMenu({
  head: button,
  children,
}: {
  head: any;
  children: any;
}) {
  return (
    <div className={styles.dropdownMenuItem}>
      {button}
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default function NavigationBar(props: {
  commissions?: Commission[];
  langs: Schema["languages"];
}) {
  const router = useRouter();

  return (
    <div className={styles.navigationBar}>
      <Link href="/" className={styles.corner}>
        <Corner />
      </Link>

      <div className={styles.navigationMenu}>
        <Link className={styles.menuItem} href="/association">
          L&apos;Association {/* TODO: translation */}
        </Link>

        <DropdownMenu
          head={
            <Link className={styles.menuItem} href="/commissions">
              Commissions
              <i className={styles.arrow} />
            </Link>
          }
        >
          {props.commissions ? (
            props.commissions.map((c) => {
              if (c.name && c.slug) {
                return (
                  <Link
                    key={c.slug}
                    href={`/commissions/${c.slug}`}
                    className={styles.menuItem}
                  >
                    {c.name}
                  </Link>
                );
              } else {
                console.error(
                  `Missing \`name\` or \`slug\` in commission: ${JSON.stringify(
                    c
                  )}`
                );
                throw new Error("Invalid commission");
              }
            })
          ) : (
            <></>
          )}
        </DropdownMenu>

        <Link className={styles.menuItem} href="/news">
          News
        </Link>

        {props.langs ? (
          <DropdownMenu
            head={<Lang className={styles.lang + " " + styles.dropdownHead} />}
          >
            {props.langs.map((l) => (
              <div
                key={l.code}
                className={styles.menuItem}
                onClick={() =>
                  router.push(router.asPath, undefined, { locale: l.code })
                }
              >
                {l.name}
              </div>
            ))}
          </DropdownMenu>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

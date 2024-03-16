import Corner from "@/assets/corner.svg";
import Burger from "@/assets/icons/burger_menu_icon.svg";
import Lang from "@/assets/icons/lang.svg";
import { locale, translate } from "@/locales";
import styles from "@/styles/NavigationBar.module.scss";
import { Commission } from "@/types/aliases";
import { Schema } from "@/types/schema";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function DropdownMenu({
  head: button,
  children,
  className,
}: {
  head: any;
  children: any;
  className?: string;
}) {
  return (
    <div className={styles.dropdownMenu + " " + (className || "")}>
      {button}
      <div className={styles.content}>{children}</div>
    </div>
  );
}

function SideMenu({
  headToggle: toggle,
  children,
  visible,
  className,
}: {
  headToggle: any;
  children: any;
  visible: boolean;
  className?: string;
}) {
  return (
    <>
      <Burger
        className={styles.burger + " " + styles.sidemenuHead}
        onClick={toggle}
      />
      <div
        className={styles.sideMenuContainer}
        style={{ display: visible ? "flex" : "none" }}
      >
        <div className={styles.sideMenu + " " + (className || "")}>
          {children}
        </div>
      </div>
    </>
  );
}

export default function NavigationBar(props: {
  commissions?: Commission[];
  langs: Schema["languages"];
}) {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible((v) => !v);
  };

  const router = useRouter();
  const entries = [
    <Link
      className={styles.sidemenuItem}
      href="/association"
      onClick={toggleMenu}
    >
      {translate("association", locale(router), {
        capitalize: true,
        plural: false,
      })}
    </Link>,
    <Link
      className={styles.sidemenuItem}
      href="/commissions"
      onClick={toggleMenu}
    >
      {translate("commission", locale(router), {
        capitalize: true,
        plural: true,
      })}
    </Link>,
    <Link className={styles.sidemenuItem} href="/news" onClick={toggleMenu}>
      {translate("news", locale(router), {
        capitalize: true,
        plural: false,
      })}
    </Link>,
  ];

  return (
    <div className={styles.navigationBar}>
      <Link href="/" className={styles.corner}>
        <Corner />
      </Link>

      <div className={styles.navigationMenu}>
        <Link className={styles.menuItem} href="/association">
          {translate("association", locale(router), {
            capitalize: true,
            plural: false,
          })}
        </Link>

        {props.commissions ? (
          <DropdownMenu
            head={
              <Link className={styles.menuItem} href="/commissions">
                {translate("commission", locale(router), {
                  capitalize: true,
                  plural: true,
                })}
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
        ) : (
          <Link className={styles.menuItem} href="/commissions">
            {translate("commission", locale(router), {
              capitalize: true,
              plural: true,
            })}
          </Link>
        )}

        <Link className={styles.menuItem} href="/news">
          {translate("news", locale(router), {
            capitalize: true,
            plural: false,
          })}
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

        <SideMenu
          headToggle={toggleMenu}
          visible={menuVisible}
          className={styles.burgerContainer}
        >
          {entries}
        </SideMenu>
      </div>
    </div>
  );
}

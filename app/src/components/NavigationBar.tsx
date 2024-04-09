import SocialsList from "./SocialsList";
import Corner from "@/assets/corner.svg";
import Burger from "@/assets/icons/burger_menu_icon.svg";
import Lang from "@/assets/icons/lang.svg";
import { capitalize, useTranslationTable } from "@/locales";
import styles from "@/styles/NavigationBar.module.scss";
import { Commission, SocialLink } from "@/types/aliases";
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
  langs,
  socials,
  className,
}: {
  headToggle: any;
  children: any;
  visible: boolean;
  langs: {
    code?: string | undefined;
    name?: string | null | undefined;
  }[];
  socials: SocialLink[];
  className?: string;
}) {
  const router = useRouter();

  if (!langs) {
    return <></>;
  }

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
          <div className={styles.sideMenuLangs}>
            <Lang className={styles.sideLang} />
            {langs.map((l) => (
              <div
                key={l.code}
                className={styles.langItem}
                onClick={() => {
                  router.push(router.asPath, undefined, { locale: l.code });
                  toggle();
                }}
              >
                {l.name}
              </div>
            ))}
            <SocialsList socials={socials} light={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default function NavigationBar(props: {
  commissions?: Commission[];
  socials?: SocialLink[];
  langs: Schema["languages"];
}) {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible((v) => !v);
  };

  const translations = useTranslationTable();

  const router = useRouter();
  const entries = [
    <Link
      key={0}
      className={styles.sidemenuItem}
      href="/association"
      onClick={toggleMenu}
    >
      {capitalize(translations["association"])}
    </Link>,
    <Link
      key={1}
      className={styles.sidemenuItem}
      href="/commissions"
      onClick={toggleMenu}
    >
      {capitalize(translations["commissions"])}
    </Link>,
    <Link
      key={2}
      className={styles.sidemenuItem}
      href="/news"
      onClick={toggleMenu}
    >
      {capitalize(translations["news"])}
    </Link>,
  ];

  return (
    <div className={styles.navigationBar}>
      <Link href="/" className={styles.corner}>
        <Corner />
      </Link>

      <div className={styles.navigationMenu}>
        <Link className={styles.menuItem} href="/association">
          {capitalize(translations["association"])}
        </Link>

        {props.commissions ? (
          <DropdownMenu
            head={
              <Link className={styles.menuItem} href="/commissions">
                {capitalize(translations["commissions"])}
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
            {capitalize(translations["commissions"])}
          </Link>
        )}

        <Link className={styles.menuItem} href="/news">
          {capitalize(translations["news"])}
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
          langs={props.langs}
          socials={props.socials || []}
          className={styles.burgerContainer}
        >
          {entries}
        </SideMenu>
      </div>
    </div>
  );
}

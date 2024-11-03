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

function DropdownMenu(props: { head: any; children: any; className?: string }) {
  return (
    <div className={styles.dropdownMenu + " " + (props.className || "")}>
      {props.head}
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

function MenuLink({
  path,
  text,
  side = false,
  children,
  toggle,
}: {
  path: string;
  text: string;
  side?: boolean;
  children?: any;
  toggle?: () => void;
}) {
  const router = useRouter();
  return (
    <Link
      className={`${side ? "" : styles.menuItem} ${
        useRouter().asPath.startsWith(path) ? styles.selected : ""
      }`}
      href={path}
      onClick={() => {
        if (toggle) {
          toggle();
        }
        router.push(path);
      }}
    >
      {text}
      {children}
    </Link>
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
    <MenuLink
      key={0}
      side={true}
      path="/association"
      text={capitalize(translations["association"])}
      toggle={toggleMenu}
    />,
    <MenuLink
      key={1}
      side={true}
      path="/commissions"
      text={capitalize(translations["commissions"])}
      toggle={toggleMenu}
    />,
    <MenuLink
      key={2}
      side={true}
      path="/news"
      text={capitalize(translations["news"])}
      toggle={toggleMenu}
    />,
  ];

  let className;
  switch (router.pathname) {
    case "/subsonic":
      className = styles.subsonic;
      break;
    default:
      className = styles.navigationBar;
      break;
  }

  return (
    <div className={className}>
      <Link href="/" className={styles.corner}>
        <Corner />
      </Link>

      <div className={styles.navigationMenu}>
        {/* <MenuLink path="/subsonic" text={capitalize("Subsonic")} /> */}

        <MenuLink
          path="/association"
          text={capitalize(translations["association"])}
        />

        {props.commissions ? (
          <DropdownMenu
            head={
              <>
                <MenuLink
                  path="/commissions"
                  text={capitalize(translations["commissions"])}
                >
                  <i className={styles.arrow} />
                </MenuLink>
              </>
            }
          >
            {props.commissions ? (
              props.commissions.map((c) => {
                if (c.name && c.slug) {
                  return (
                    <MenuLink
                      key={c.slug}
                      path={`/commissions/${c.slug}`}
                      text={c.name}
                    />
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
          <></>
        )}

        <MenuLink path="/news" text={capitalize(translations["news"])} />

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

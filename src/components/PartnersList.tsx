import { getDirectusImageUrl } from "@/directus";
import { getTranslation } from "@/locales";
import styles from "@/styles/PartnersList.module.scss";
import { Partner, PartnerCategory } from "@/types/aliases";
import Link from "next/link";
import { useRouter } from "next/router";

function PartnerDisplay({ p }: { p: Partner }) {
  return (
    <Link href={p.link || ""} key={p.id}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={getDirectusImageUrl(p.logo)}
        className={styles.logo}
        alt={p.name || ""}
      />
    </Link>
  );
}

function PartnerCategoryDisplay({
  c,
  p,
}: {
  c: PartnerCategory;
  p: Partner[];
}) {
  const router = useRouter();
  const entries = p
    .filter((p) => Date.parse(p.end || "01/01/1970") > Date.now())
    .map((p) => <PartnerDisplay key={p.id} p={p} />);

  if (entries.length === 0) {
    return <></>;
  }

  return (
    <>
      <h1 className="light">{getTranslation(c, router.locale).name}</h1>
      <div className={styles.list}>{entries}</div>
    </>
  );
}

export default function PartnersList(props: {
  id?: string;
  partners: [PartnerCategory, Partner[]][];
}) {
  props.partners.sort(
    (a, b) => (b[0].rank || Infinity) - (a[0].rank || Infinity)
  );

  return (
    <div id={props.id} className={styles.partnersList}>
      {props.partners.map((e) => (
        <PartnerCategoryDisplay key={e[0].id} c={e[0]} p={e[1]} />
      ))}
    </div>
  );
}

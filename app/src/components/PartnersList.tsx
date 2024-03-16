import DirectusImage from "./DirectusImage";
import { locale, translate } from "@/locales";
import styles from "@/styles/PartnersList.module.scss";
import { Partner } from "@/types/aliases";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PartnersList({ partners }: { partners: Partner[] }) {
  if (partners.length == 0) {
    return;
  }

  var list: any = [];
  partners.forEach((p) => {
    list.push(
      <Link href={p.link || ""} key={p.id}>
        <DirectusImage img={p.logo} name={p.name} className={styles.logo} />
      </Link>
    );
  });

  var router = useRouter();
  return (
    <div className={styles.partnersList}>
      <h1 className="light">
        {translate("partners", locale(router), { capitalize: true })}{" "}
      </h1>
      <div className={styles.list}>{list}</div>
    </div>
  );
}

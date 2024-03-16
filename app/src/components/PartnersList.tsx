import DirectusImage from "./DirectusImage";
import styles from "@/styles/PartnersList.module.scss";
import { Partner } from "@/types/aliases";
import Link from "next/link";

export default function PartnersList({ partners }: { partners: Partner[] }) {
  if (partners.length == 0) {
    return;
  }

  var list: any = [];
  partners.forEach((p) => {
    list.push(
      <Link href={p.link || ""}>
        <DirectusImage img={p.logo} name={p.name} className={styles.logo} />
      </Link>
    );
  });

  return (
    <div className={styles.partnersList}>
      <h1 className="light">Partenaires</h1>
      <div className={styles.list}>{list}</div>
    </div>
  );
}

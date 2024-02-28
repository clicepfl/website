import DirectusImage from "./DirectusImage";
import styles from "@/styles/PartnersList.module.scss";
import { Partner } from "@/types/aliases";

export default function PartnersList({ partners }: { partners: Partner[] }) {
  var list: any = [];
  partners.forEach((p) => {
    list.push(
      <DirectusImage img={p.logo} name={p.name} className={styles.logo} />
    );
  });

  return (
    <div className={styles.partnersList}>
      <div>{list}</div>
    </div>
  );
}

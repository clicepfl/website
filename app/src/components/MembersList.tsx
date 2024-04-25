import Card from "./Card";
import { capitalize, useTranslationTable } from "@/locales";
import styles from "@/styles/MembersList.module.scss";
import {
  AssociationMembership,
  AssociationPole,
  Member,
} from "@/types/aliases";

const HEAD_POLE = "presidency";

export default function MembersList(props: {
  membership: AssociationMembership & { member: Member }[];
  title?: boolean;
}) {
  const translations = useTranslationTable();

  props.membership.sort(
    (
      a: AssociationMembership & { member: Member },
      b: AssociationMembership & { member: Member }
    ) => {
      const an = a.member.name || "",
        bn = b.member.name || "",
        ap = (a.pole as AssociationPole)?.slug || "",
        bp = (b.pole as AssociationPole)?.slug || "";

      if (ap === HEAD_POLE && bp === HEAD_POLE) {
        return an.localeCompare(bn);
      } else if (ap === HEAD_POLE) {
        return -1;
      } else if (bp === HEAD_POLE) {
        return 1;
      } else {
        if (ap !== bp) {
          return ap.localeCompare(bp);
        } else {
          return an.localeCompare(bn);
        }
      }
    }
  );

  return (
    <div className={styles.membersList}>
      {props.title !== false ? (
        <h1>{capitalize(translations["committee"])}</h1>
      ) : (
        <></>
      )}
      <div className={styles.list}>
        {props.membership.map((m) => (
          <Card key={(m as any).id} member={m.member} membership={m} />
        ))}
      </div>
    </div>
  );
}

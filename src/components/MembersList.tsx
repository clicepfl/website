import Card from "./Card";
import { capitalize, getTranslation, useTranslationTable } from "@/locales";
import styles from "@/styles/MembersList.module.scss";
import {
  AssociationMembership,
  AssociationPole,
  Member,
} from "@/types/aliases";
import { useRouter } from "next/router";

const HEAD_POLE = "presidency";

export default function MembersList(props: {
  id?: string;
  membership: (AssociationMembership & { member: Member })[];
  title?: boolean;
}) {
  const translations = useTranslationTable();
  const router = useRouter();

  props.membership.sort(
    (
      a: AssociationMembership & { member: Member },
      b: AssociationMembership & { member: Member }
    ) => {
      const an = a.member.name || "",
        bn = b.member.name || "",
        ap = (a.pole as AssociationPole)?.slug || "",
        bp = (b.pole as AssociationPole)?.slug || "",
        apt = a.pole
          ? getTranslation(a.pole as AssociationPole, router.locale).name || ""
          : "",
        bpt = b.pole
          ? getTranslation(b.pole as AssociationPole, router.locale).name || ""
          : "";

      if (ap === HEAD_POLE && bp === HEAD_POLE) {
        return an.localeCompare(bn);
      } else if (ap === HEAD_POLE) {
        return -1;
      } else if (bp === HEAD_POLE) {
        return 1;
      } else {
        if (ap !== bp) {
          return apt.localeCompare(bpt);
        } else {
          return an.localeCompare(bn);
        }
      }
    }
  );

  return (
    <div id={props.id} className={styles.membersList}>
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

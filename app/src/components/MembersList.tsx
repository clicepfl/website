import Card from "./Card";
import { capitalize, useTranslationTable } from "@/locales";
import styles from "@/styles/MembersList.module.scss";
import { AssociationMembership, Member } from "@/types/aliases";
import { useRouter } from "next/router";

export default function MembersList(props: {
  membership: AssociationMembership & { member: Member }[];
}) {
  var router = useRouter();
  const translations = useTranslationTable();

  return (
    <div className={styles.membersList}>
      <h1>{capitalize(translations["committee"])}</h1>
      <div className={styles.list}>
        {props.membership.map((m) => (
          <Card key={(m as any).id} member={m.member} membership={m} />
        ))}
      </div>
    </div>
  );
}

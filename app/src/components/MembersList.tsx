import Card from "./Card";
import { locale, translate } from "@/locales";
import styles from "@/styles/MembersList.module.scss";
import { AssociationMembership, Member } from "@/types/aliases";
import { useRouter } from "next/router";

export default function MembersList(props: {
  membership: AssociationMembership & { member: Member }[];
}) {
  var router = useRouter();

  return (
    <div className={styles.membersList}>
      <h1>{translate("committee", locale(router), { capitalize: true })}</h1>
      <div>
        {props.membership.map((m) => (
          <Card
            size="small"
            key={(m as any).id}
            member={m.member}
            membership={m}
          />
        ))}
      </div>
    </div>
  );
}

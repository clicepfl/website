import MembersList from "./MembersList";
import { getTranslation, locale } from "@/locales";
import markdownStyle from "@/styles/Markdown.module.scss";
import styles from "@/styles/Page.module.scss";
import {
  AssociationMembership,
  AssociationPole,
  Member,
} from "@/types/aliases";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function PoleDescription(props: {
  pole: AssociationPole;
  members: (AssociationMembership & { member: Member })[];
}) {
  const router = useRouter();
  const translation = getTranslation(props.pole, locale(router));

  return (
    <div className={styles.section}>
      <div className={styles.center}>
        <div>
          <h2 className={styles.poleName}>{translation.name}</h2>
          <Markdown className={markdownStyle.markdown}>
            {translation.description}
          </Markdown>
        </div>
      </div>
      <MembersList title={false} membership={props.members} />
    </div>
  );
}

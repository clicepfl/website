import MembersList from "./MembersList";
import { getTranslation, locale, useTranslationTable } from "@/locales";
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
  const tt = useTranslationTable();

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
      {props.pole.mail ? (
        <div className={styles.center}>
          <div className={styles.info}>
            <p>{tt["contact"]}</p>
            <a href={"mailto:" + props.pole.mail}>{props.pole.mail}</a>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

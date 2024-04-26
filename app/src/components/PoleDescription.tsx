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
  let i = 0;

  return (
    <div className={styles.main}>
      <h2 className={styles.center}>{translation.name}</h2>
      <MembersList key={i++} title={false} membership={props.members} />
      <div className={styles.center}>
        <Markdown className={markdownStyle.markdown}>
          {translation.description}
        </Markdown>
      </div>
    </div>
  );
}

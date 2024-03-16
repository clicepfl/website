import SocialsList from "./SocialsList";
import { getTranslation } from "@/locales";
import styles from "@/styles/AssociationDescription.module.scss";
import { Association, SocialLink } from "@/types/aliases";
import Markdown from "react-markdown";

export default function AssociationDescription({
  association,
  social_links,
}: {
  association: Association;
  social_links: SocialLink[];
}) {
  var translation = getTranslation(association);

  return (
    <div className={styles.description}>
      <h1 className="title">À propos</h1>
      <h2>Qu'est-ce que la CLIC ?</h2>
      <Markdown className="text">{translation.description}</Markdown>
      <SocialsList socials={social_links}></SocialsList>
    </div>
  );
}

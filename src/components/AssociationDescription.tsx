import DirectusImage from "./DirectusImage";
import { getTranslation, locale } from "@/locales";
import styles from "@/styles/AssociationDescription.module.scss";
import markdownStyle from "@/styles/Markdown.module.scss";
import { Association, PublicFiles, SocialLink } from "@/types/aliases";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function AssociationDescription({
  association,
  publicFiles,
}: {
  association: Association;
  socialLinks: SocialLink[];
  publicFiles: PublicFiles[];
}) {
  const router = useRouter();
  const translation = getTranslation(association, locale(router));

  return (
    <div className={styles.main}>
      <DirectusImage
        sizes="25rem"
        img={association.logo}
        className={styles.logo}
      />
      <Markdown className={markdownStyle.markdown}>
        {translation.description}
      </Markdown>
      <div className={styles.publicFiles}>
        {publicFiles.map((f) => (
          <a href={f.link || ""} key={f.id}>
            {f.icon ? (
              <DirectusImage
                sizes="1.5rem"
                className={styles.icon}
                img={f.icon}
              />
            ) : (
              <></>
            )}
            {getTranslation(f, locale(router)).name}
          </a>
        ))}
      </div>
    </div>
  );
}

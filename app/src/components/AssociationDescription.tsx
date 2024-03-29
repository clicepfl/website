import DirectusImage from "./DirectusImage";
import SocialsList from "./SocialsList";
import { getTranslation, locale } from "@/locales";
import styles from "@/styles/AssociationDescription.module.scss";
import { Association, PublicFiles, SocialLink } from "@/types/aliases";
import Link from "next/link";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function AssociationDescription({
  association,
  socialLinks,
  publicFiles,
}: {
  association: Association;
  socialLinks: SocialLink[];
  publicFiles: PublicFiles[];
}) {
  const router = useRouter();
  const translation = getTranslation(association, locale(router));

  return (
    <div className="page">
      <div className="center">
        <Markdown className="text">{translation.description}</Markdown>
        <div className={styles.publicFiles}>
          {publicFiles.map((f) => (
            <Link href={f.link || ""} key={f.id}>
              {f.icon ? (
                <DirectusImage className={styles.icon} img={f.icon} />
              ) : (
                <></>
              )}
              {getTranslation(f, locale(router)).name}
            </Link>
          ))}
        </div>
        <SocialsList socials={socialLinks} />
      </div>
    </div>
  );
}

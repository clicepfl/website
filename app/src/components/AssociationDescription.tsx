import DirectusImage from "./DirectusImage";
import SocialsList from "./SocialsList";
import { getTranslation } from "@/locales";
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
  const translation = getTranslation(association, router.locale);

  return (
    <div className="page">
      <div>
        <Markdown className="text">{translation.description}</Markdown>
        <SocialsList socials={socialLinks}></SocialsList>
        <div className={styles.publicFiles}>
          {publicFiles.map((f) => (
            <Link href={f.link || ""} key={f.id}>
              {f.icon ? (
                <DirectusImage className={styles.icon} img={f.icon} />
              ) : (
                <></>
              )}
              {getTranslation(f, router.locale).name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

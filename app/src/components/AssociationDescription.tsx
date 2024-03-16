import SocialsList from "./SocialsList";
import { getTranslation } from "@/locales";
import { Association, SocialLink } from "@/types/aliases";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function AssociationDescription({
  association,
  social_links,
}: {
  association: Association;
  social_links: SocialLink[];
}) {
  const router = useRouter();
  const translation = getTranslation(association, router.locale);

  return (
    <div className="page">
      <div>
        <Markdown className="text">{translation.description}</Markdown>
        <SocialsList socials={social_links}></SocialsList>
      </div>
    </div>
  );
}

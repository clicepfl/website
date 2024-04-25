import { getTranslation, locale } from "@/locales";
import markdownStyle from "@/styles/Markdown.module.scss";
import { AssociationPole } from "@/types/aliases";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function PoleDescription({ pole }: { pole: AssociationPole }) {
  const router = useRouter();
  const translation = getTranslation(pole, locale(router));

  return (
    <div>
      <h2>{translation.name}</h2>
      <Markdown className={markdownStyle.markdown}>
        {translation.description}
      </Markdown>
    </div>
  );
}

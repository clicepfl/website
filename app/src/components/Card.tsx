import DirectusImage from "./DirectusImage";
import { getTranslation } from "@/locales";
import styles from "@/styles/Card.module.scss";
import {
  AssociationMembership,
  CommissionMembership,
  Member,
} from "@/types/aliases";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Card(
  props: (
    | {
        member: Member;
        membership: AssociationMembership | CommissionMembership;
      }
    | {
        img: any;
        title: string;
        description: string;
        link?: string;
        linkTarget?: "_blank";
      }
  ) & { background?: boolean }
) {
  const router = useRouter();

  let img = null,
    title = null,
    description = null,
    link = null,
    linkTarget = undefined;

  if ("member" in props) {
    img = props.member.picture;
    title = `${props.member.name} ${props.member.surname}`;
    description = getTranslation(props.membership, router.locale).title;
    link = props.member.link;
    linkTarget = "_blank";
  } else {
    img = props.img;
    title = props.title;
    description = props.description;
    link = props.link;
    linkTarget = props.linkTarget;
  }

  const component = (
    <div
      className={`${styles.card} ${props.background ? styles.background : ""}`}
    >
      <div className={styles.imageDiv}>
        <DirectusImage
          sizes="6rem"
          img={img}
          name={title || "6rem"}
          className={styles.picture}
        />
      </div>
      <div className={styles.content}>
        <h4 className={styles.name}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link href={link} target={linkTarget} style={{ display: "contents" }}>
        {component}
      </Link>
    );
  } else {
    return component;
  }
}

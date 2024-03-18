import DirectusImage from "./DirectusImage";
import { getTranslation } from "@/locales";
import styles from "@/styles/Card.module.scss";
import {
  AssociationMembership,
  Commission,
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
    | { commission: Commission }
    | {
        img: any;
        title: string;
        description: string;
        link?: string;
        linkTarget?: "_blank";
      }
  ) & { size: "small" | "large"; background?: boolean }
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
  } else if ("commission" in props) {
    img = props.commission.logo;
    title = props.commission.name;
    description = getTranslation(
      props.commission,
      router.locale
    ).small_description;
    link = `/commissions/${props.commission.slug}`;
  } else {
    img = props.img;
    title = props.title;
    description = props.description;
    link = props.link;
    linkTarget = props.linkTarget;
  }

  const component = (
    <div
      className={`${styles.card} ${styles[props.size]} ${
        props.background ? styles.background : ""
      }`}
    >
      <DirectusImage img={img} name={title || ""} className={styles.picture} />
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

import StrapiImage from "./DirectusImage";
import styles from "@/styles/Card.module.scss";
import {
  ApiCommission,
  ApiCommissionMembership,
  ApiMember,
  ApiPoleMembership,
} from "@/types/generated/contentTypes";
import Link from "next/link";

export default function Card(
  props: (
    | {
        member: ApiMember;
        membership: ApiPoleMembership | ApiCommissionMembership;
      }
    | { commission: ApiCommission }
    | {
        img: any;
        title: string;
        description: string;
        link?: string;
        linkTarget?: "_blank";
      }
  ) & { size: "small" | "large"; background?: boolean }
) {
  let img = null,
    title = null,
    description = null,
    link = null,
    linkTarget = undefined;

  if ("member" in props) {
    img = props.member.picture;
    title = props.member.name;
    description = props.membership.role;
    link = props.member.link;
    linkTarget = "_blank";
  } else if ("commission" in props) {
    img = props.commission.logo;
    title = props.commission.name;
    description = props.commission.small_description;
    link = `/commission/${props.commission.slug}`;
  } else {
    img = props.img;
    title = props.title;
    description = props.description;
    link = props.link;
    linkTarget = props.link;
  }

  const component = (
    <div
      className={`${styles.card} ${styles[props.size]} ${
        props.background ? styles.background : ""
      }`}
    >
      {img && img.data ? (
        <StrapiImage className={styles.picture} img={img} size="thumbnail" />
      ) : (
        <></>
      )}
      <div>
        <p className={styles.title}>{title}</p>
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

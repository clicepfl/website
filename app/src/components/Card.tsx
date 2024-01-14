import StrapiImage from "./StrapiImage";
import styles from "@/styles/Card.module.scss";
import {
  ApiCommission,
  ApiCommissionMembership,
  ApiEvent,
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
    | { event: ApiEvent }
    | {
        img: any;
        title: string;
        description: string;
        link?: string;
        linkTarget?: "_blank";
      }
  ) & { size: "small" | "large" }
) {
  let img = null,
    title = null,
    description = null,
    link = null,
    linkTarget = undefined;

  if ("member" in props) {
    img = props.member.attributes.picture;
    title = props.member.attributes.name;
    description = props.membership.attributes.role;
    link = props.member.attributes.link;
    linkTarget = "_blank";
  } else if ("commission" in props) {
    img = props.commission.attributes.logo;
    title = props.commission.attributes.name;
    description = props.commission.attributes.small_description;
    link = `/commission/${(props.commission as any).id}`;
  } else if ("event" in props) {
    img = null;
    title = props.event.attributes.event_name;
    description = props.event.attributes.small_description;
    link = `/event/${(props.event as any).id}`;
  } else {
    img = props.img;
    title = props.title;
    description = props.description;
    link = props.link;
    linkTarget = props.link;
  }

  const component = (
    <div className={`${styles.card} ${styles[props.size]}`}>
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

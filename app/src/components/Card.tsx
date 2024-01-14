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
    | { img: any; title: string; description: string }
  ) & { link?: string; size: "small" | "large" }
) {
  let img = null,
    title = null,
    description = null;

  if ("member" in props) {
    img = props.member.attributes.picture;
    title = props.member.attributes.name;
    description = props.membership.attributes.role;
  } else if ("commission" in props) {
    img = null; // TODO add commission logo in content type builder
    title = props.commission.attributes.commission_name;
    description = props.commission.attributes.small_description;
  } else if ("event" in props) {
    img = null;
    title = props.event.attributes.event_name;
    description = props.event.attributes.small_description;
  } else {
    img = props.img;
    title = props.title;
    description = props.description;
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

  if (props.link) {
    return (
      <Link href={props.link} target="_blank" style={{ display: "contents" }}>
        {component}
      </Link>
    );
  } else {
    return component;
  }
}

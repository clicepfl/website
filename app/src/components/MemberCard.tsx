import StrapiImage from "./StrapiImage";
import styles from "@/styles/MemberCard.module.scss";
import {
  ApiCommissionMembership,
  ApiMember,
  ApiPoleMembership,
} from "@/types/generated/contentTypes";
import Link from "next/link";

export default function MemberCard({
  member,
  membership,
}: {
  member: ApiMember;
  membership: ApiPoleMembership | ApiCommissionMembership;
}) {
  const component = (
    <div className={styles.memberCard}>
      {member.attributes.picture.data ? (
        <StrapiImage
          className={styles.picture}
          img={member.attributes.picture}
          size="thumbnail"
        />
      ) : (
        <></>
      )}
      <div>
        <p className={styles.name}>{member.attributes.name}</p>
        <p className={styles.role}>{membership.attributes.role}</p>
      </div>
    </div>
  );

  if (member.attributes.link) {
    return (
      <Link
        href={member.attributes.link}
        target="_blank"
        style={{ display: "contents" }}
      >
        {component}
      </Link>
    );
  } else {
    return component;
  }
}

import DirectusImage from "./DirectusImage";
import { useTranslationTable } from "@/locales";
import styles from "@/styles/ChannelsList.module.scss";
import { SocialLink } from "@/types/aliases";

function Channel({ channel }: { channel: SocialLink }) {
  return (
    <a className={styles.channel} href={channel.link || ""} target="_blank">
      <DirectusImage
        className={styles.image}
        name={channel.account_name}
        img={channel.logo}
        sizes="5rem"
        cover
      />
      <p>{channel.account_name}</p>
    </a>
  );
}

export default function ChannelsList(props: { channels: SocialLink[] }) {
  const tt = useTranslationTable();
  return (
    <div className={styles.main}>
      <h1>{tt["join-our-channels"]}</h1>
      <div className={styles.list}>
        {props.channels
          .sort(
            (a, b) => a.account_name?.localeCompare(b.account_name || "") || -1
          )
          .map((c) => (
            <Channel channel={c} key={c.id} />
          ))}
      </div>
    </div>
  );
}

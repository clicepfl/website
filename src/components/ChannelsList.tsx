import DirectusImage from "./DirectusImage";
import { useTranslationTable } from "@/locales";
import styles from "@/styles/ChannelsList.module.scss";
import { DirectusFile } from "@directus/sdk";

function Channel({ file }: { file: DirectusFile }) {
  const tt = useTranslationTable();

  return (
    <a className={styles.channel} href={file.location || ""} target="_blank">
      <DirectusImage
        className={styles.image}
        name={file.title || tt.join_our_channels}
        // @ts-expect-error
        img={file}
        cover
      />
      <p>{file.title || tt.join_our_channels}</p>
    </a>
  );
}

export default function ChannelsList(props: { channels: DirectusFile[] }) {
  return (
    <div className={styles.list}>
      {props.channels
        .sort((a, b) => a.title?.localeCompare(b.title || "") || -1)
        .map((c) => (
          <Channel file={c} key={c.id} />
        ))}
    </div>
  );
}

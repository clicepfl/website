import style from "@/styles/RegistrationProgressBar.module.scss";

export default function RegistrationProgressBar(props: {
  registration_count: number;
  max_registrations: number;
  event_name: string;
}) {
  var inner_bar_width =
    (props.registration_count / props.max_registrations) * 100;
  return (
    <div className={style.main}>
      <div className={style.info}>
        <p className={style.eventName}>{props.event_name}</p>
        <p className={style.count}>
          · {props.registration_count}/{props.max_registrations} inscriptions
        </p>
      </div>
      <div className={style.progressBar}>
        <div className={style.outerBar}></div>
        <div
          className={style.innerBar}
          style={{
            width: `${inner_bar_width}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

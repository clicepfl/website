import { getTranslation, useTranslationTable } from "@/locales";
import styles from "@/styles/Timetable.module.scss";
import { ICBDActivity } from "@/types/aliases";
import { useRouter } from "next/router";

type Timeslot = {
  start_time: string;
  end_time: string;
  room: string;
};

// Convert string representation "hh:mm" to minutes
function timeToMinutes(time: string) {
  const [hours, minutes, seconds = 0] = time.split(":").map(Number);
  return hours * 60 + minutes + seconds / 60;
}

function Hours(props: { startTime: string; endTime: string }) {
  let startHour = timeToMinutes(props.startTime) / 60;
  const endHour = timeToMinutes(props.endTime) / 60;
  const numberOfHours = endHour - startHour;

  let hours: any[] = [];

  for (; startHour <= endHour; startHour++) {
    let style =
      startHour == endHour ? {} : { height: `${100 / numberOfHours}%` };
    hours.push(
      <div key={startHour} style={style} className={styles.hourEntry}>
        <span className={styles.line} />
        <p>{`${startHour}h`}</p>
      </div>
    );
  }

  return <>{hours}</>;
}

function TimeTableEvent(props: {
  timeslot: Timeslot;
  activity: ICBDActivity;
  startTime: string;
  endTime: string;
}) {
  // In minutes
  const startTime = timeToMinutes(props.startTime);
  const endTime = timeToMinutes(props.endTime);
  const timeslot = props.timeslot;
  const tStartTime = timeToMinutes(timeslot.start_time);
  const tEndTime = timeToMinutes(timeslot.end_time);

  const duration = endTime - startTime;

  const size = (tEndTime - tStartTime) / duration;

  const position = (tStartTime - startTime) / duration;

  const style = { height: `calc(${size * 100}% - 0.4rem)` };

  const router = useRouter();

  const translation = getTranslation(props.activity, router.locale);

  return (
    <div
      className={styles.event}
      style={{
        top: `${position * 100}%`,
        backgroundColor: props.activity.color || "orange",
        ...style,
      }}
    >
      <p>{translation.name || ""}</p>
    </div>
  );
}

function TimetableEntry(props: {
  timeslots: [Timeslot, ICBDActivity][];
  startTime: string;
  endTime: string;
}) {
  let key = 0;

  return (
    <div className={`${styles.entry} ${styles.vertical}`}>
      {props.timeslots.map((t) => {
        return (
          <TimeTableEvent
            key={key++}
            startTime={props.startTime}
            endTime={props.endTime}
            timeslot={t[0]}
            activity={t[1]}
          />
        );
      })}
    </div>
  );
}

export function Timetable(props: {
  activities: ICBDActivity[];
  startTime: string;
  endTime: string;
}) {
  let rooms: Record<string, [Timeslot, ICBDActivity][]> = {};

  let tt = useTranslationTable();

  props.activities.forEach((activity) => {
    const timeslots: Timeslot[] = JSON.parse(
      JSON.stringify(activity.timeslots)
    );

    timeslots.forEach((timeslot) => {
      let groupKey = timeslot.room;
      if (!rooms[groupKey]) {
        rooms[groupKey] = [];
      }
      rooms[groupKey].push([timeslot, activity]);
    });
  });

  return (
    <>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th />
            {Object.keys(rooms).map((room) => (
              <th className={styles.header} key={"header|" + room}>
                <p>{room}</p>
              </th>
            ))}
          </tr>
          <tr>
            <td className={styles.hours}>
              <Hours startTime={props.startTime} endTime={props.endTime} />
            </td>
            {Object.keys(rooms).map((room) => (
              <td key={"entry|" + room}>
                <TimetableEntry
                  timeslots={rooms[room]}
                  startTime={props.startTime}
                  endTime={props.endTime}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <p>{`${tt["icbd-end-of-event"]} ${props.endTime}`}</p>
    </>
  );
}

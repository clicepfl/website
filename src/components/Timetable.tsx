import { getTranslation, useTranslationTable } from "@/locales";
import styles from "@/styles/Timetable.module.scss";
import { ICBDActivity } from "@/types/aliases";
import { useRouter } from "next/router";

type Timeslot = {
  start_time: string;
  end_time: string;
  room: string;
  custom_name?: string;
};

// Convert string representation "hh:mm" to minutes
function timeToMinutes(time: string) {
  const [hours, minutes, seconds = 0] = time.split(":").map(Number);
  return hours * 60 + minutes + seconds / 60;
}

export function findStartTime(activity: ICBDActivity): number {
  let startTime = 24 * 60;

  const timeslots: Timeslot[] = JSON.parse(JSON.stringify(activity.timeslots));

  timeslots.forEach((t) => {
    let tTime = timeToMinutes(t.start_time);
    startTime = Math.min(tTime, startTime);
  });

  return startTime;
}

function Hours(props: { startTime: number; endTime: number }) {
  let startHour = props.startTime / 60;
  const endHour = props.endTime / 60;
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
  startTime: number;
  endTime: number;
}) {
  // In minutes
  const timeslot = props.timeslot;
  const tStartTime = timeToMinutes(timeslot.start_time);
  const tEndTime = timeToMinutes(timeslot.end_time);

  const duration = props.endTime - props.startTime;

  const size = (tEndTime - tStartTime) / duration;

  const position = (tStartTime - props.startTime) / duration;

  const style = { height: `calc(${size * 100}% - 0.4rem)` };

  const router = useRouter();

  const name =
    timeslot.custom_name ||
    getTranslation(props.activity, router.locale).name ||
    "";

  return (
    <div
      className={styles.event}
      title={name}
      style={{
        top: `${position * 100}%`,
        backgroundColor: props.activity.color || "orange",
        ...style,
      }}
    >
      <p>{name}</p>
    </div>
  );
}

function TimetableEntry(props: {
  timeslots: [Timeslot, ICBDActivity][];
  startTime: number;
  endTime: number;
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

export function Timetable(props: { activities: ICBDActivity[] }) {
  let rooms: Record<string, [Timeslot, ICBDActivity][]> = {};

  let tt = useTranslationTable();

  let startTime = 24 * 60;
  let endTime = 0;

  props.activities.forEach((activity) => {
    if (!activity.timeslots) {
      return;
    }

    const timeslots: Timeslot[] = JSON.parse(
      JSON.stringify(activity.timeslots)
    );

    timeslots.forEach((timeslot) => {
      let tStartTime = timeToMinutes(timeslot.start_time);
      startTime = Math.min(tStartTime, startTime);
      let tEndTime = timeToMinutes(timeslot.end_time);
      endTime = Math.max(tEndTime, endTime);

      let groupKey = timeslot.room;
      if (!rooms[groupKey]) {
        rooms[groupKey] = [];
      }
      rooms[groupKey].push([timeslot, activity]);
    });
  });

  let hours = (endTime / 60).toString().padStart(2, "0");
  let minutes = (endTime % 60).toString().padStart(2, "0");
  let formattedEndTime = hours + ":" + minutes;

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
              <Hours startTime={startTime} endTime={endTime} />
            </td>
            {Object.keys(rooms).map((room) => (
              <td key={"entry|" + room}>
                <TimetableEntry
                  timeslots={rooms[room]}
                  startTime={startTime}
                  endTime={endTime}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <p>{`${tt["icbd-end-of-event"]} ${formattedEndTime}`}</p>
    </>
  );
}

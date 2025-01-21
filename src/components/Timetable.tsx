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

  if (activity.timeslots) {
    const timeslots: Timeslot[] = JSON.parse(
      JSON.stringify(activity.timeslots)
    );

    return Math.min(...timeslots.map((t) => timeToMinutes(t.start_time)));
  }

  return startTime;
}

function generateHourEntries(
  startTime: number,
  endTime: number,
  isLine: boolean
) {
  const startHour = startTime / 60;
  const endHour = endTime / 60;
  const numberOfHours = endHour - startHour;

  return Array.from({ length: numberOfHours + 1 }, (_, i) => {
    const hour = startHour + i;
    const style = hour === endHour ? {} : { height: `${100 / numberOfHours}%` };

    return isLine ? (
      <span key={hour} style={style} className={styles.line} />
    ) : (
      <div key={hour} style={style} className={styles.hourEntry}>
        <p>{`${hour}h`}</p>
      </div>
    );
  });
}

function Lines(props: { startTime: number; endTime: number }) {
  const lines = generateHourEntries(props.startTime, props.endTime, true);
  return <div className={styles.lines}>{lines}</div>;
}

function Hours(props: { startTime: number; endTime: number }) {
  const hours = generateHourEntries(props.startTime, props.endTime, false);
  return <div className={styles.hours}>{hours}</div>;
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

    timeslots.forEach(({ start_time, end_time, room }) => {
      let tStartTime = timeToMinutes(start_time);
      startTime = Math.min(tStartTime, startTime);
      let tEndTime = timeToMinutes(end_time);
      endTime = Math.max(tEndTime, endTime);

      if (!rooms[room]) rooms[room] = [];
      rooms[room].push([{ start_time, end_time, room }, activity]);
    });
  });

  let hours = (endTime / 60).toString().padStart(2, "0");
  let minutes = (endTime % 60).toString().padStart(2, "0");
  let formattedEndTime = hours + ":" + minutes;

  return (
    <div className={styles.main}>
      <Hours startTime={startTime} endTime={endTime} />
      <div className={styles.timetable}>
        <Lines startTime={startTime} endTime={endTime} />
        <table className={styles.table}>
          <tbody>
            <tr>
              {Object.keys(rooms).map((room) => (
                <th className={styles.header} key={"header|" + room}>
                  <p>{room}</p>
                </th>
              ))}
            </tr>
            <tr style={{ height: "100%" }}>
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
      </div>
      <p className={styles.end}>
        {`${tt["icbd-end-of-event"]} ${formattedEndTime}`}
      </p>
    </div>
  );
}

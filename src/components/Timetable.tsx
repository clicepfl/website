import { getTranslation } from "@/locales";
import styles from "@/styles/Timetable.module.scss";
import { ICBDActivity } from "@/types/aliases";
import { useRouter } from "next/router";

class Timeslot {
  start_time: string;
  end_time: string;
  room: string;

  constructor(start_time: string, end_time: string, room: string) {
    this.start_time = start_time;
    this.end_time = end_time;
    this.room = room;
  }
}

// Convert string representation "hh:mm" to minutes
function timeToMinutes(time: string) {
  const parts = time.split(":");
  // Parse hours, minutes, and seconds (if available)
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  const seconds = parts[2] ? parseInt(parts[2], 10) : 0;

  // Convert everything to minutes
  return hours * 60 + minutes + seconds / 60;
}

function Hours(props: { startTime: string; endTime: string }) {
  let startTime = timeToMinutes(props.startTime);
  const endTime = timeToMinutes(props.endTime);
  const duration = endTime - startTime;
  const numberOfHours = duration / 60;

  let hours: any[] = [];

  for (let i = 0; i < numberOfHours; i++) {
    hours.push(
      <div
        key={"hours|" + i}
        style={{ height: `${100 / numberOfHours}%` }}
        className={styles.hourEntry}
      >
        <span className={styles.line} />
        <p>{`${startTime / 60}h`}</p>
      </div>
    );
    startTime += 60;
  }
  hours.push(
    <div key={"last_line"} className={styles.hourEntry}>
      <span className={styles.line} />
      <p>{`${startTime / 60}h`}</p>
    </div>
  );

  return <>{hours}</>;
}

function TimeTableEvent(props: {
  timeslot: [Timeslot, ICBDActivity];
  vertical: boolean;
  startTime: string;
  endTime: string;
  name: string;
}) {
  // In minutes
  const startTime = timeToMinutes(props.startTime);
  const endTime = timeToMinutes(props.endTime);
  const timeslot = props.timeslot[0];
  const tStartTime = timeToMinutes(timeslot.start_time);
  const tEndTime = timeToMinutes(timeslot.end_time);

  const duration = endTime - startTime;

  const size = (tEndTime - tStartTime) / duration;

  const position = (tStartTime - startTime) / duration;

  const style = props.vertical
    ? { height: `calc(${size * 100}% - 0.4rem)` }
    : { width: `calc(${size * 100}% - 0.4rem)` };

  return (
    <div
      className={styles.event}
      style={{
        top: `${position * 100}%`,
        backgroundColor: props.timeslot[1].color || "white",
        ...style,
      }}
    >
      <p>{props.name}</p>
    </div>
  );
}

function TimetableEntry(props: {
  timeslots: [Timeslot, ICBDActivity][];
  vertical: boolean;
  startTime: string;
  endTime: string;
}) {
  let key = 0;
  const router = useRouter();

  return (
    <div className={`${styles.entry} ${styles.vertical}`}>
      {props.timeslots.map((t) => {
        const translation = getTranslation(t[1], router.locale);

        return (
          <TimeTableEvent
            name={translation.name || ""}
            key={key++}
            startTime={props.startTime}
            endTime={props.endTime}
            timeslot={t}
            vertical={props.vertical}
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
  vertical?: true;
}) {
  let rooms: Record<string, [Timeslot, ICBDActivity][]> = {};

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
                  vertical={true}
                  startTime={props.startTime}
                  endTime={props.endTime}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <p>End of the event: {props.endTime}</p>
    </>
  );
}

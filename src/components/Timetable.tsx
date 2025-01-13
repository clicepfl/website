import { getTranslation } from "@/locales";
import styles from "@/styles/Timetable.module.scss";
import { ICBDActivity } from "@/types/aliases";
import { useRouter } from "next/router";

class Timeslot {
  start_time: string;
  end_time: string;
  room: string;
}

// Convert string representation "hh:mm" to minutes
function timeToMinutes(time: string) {
  const parts = time.split(":");
  // Parse hours, minutes, and seconds (if available)
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  const seconds = parts[2] ? parseInt(parts[2], 10) : 0;

  // Convert everything to minutes
  const totalMinutes = hours * 60 + minutes + seconds / 60;

  return totalMinutes;
}

function Hours(props: { startTime: string; endTime: string; height: number }) {
  let startTime = timeToMinutes(props.startTime);
  const endTime = timeToMinutes(props.endTime);

  const duration = endTime - startTime;
  const entryAlign = (60 * props.height) / duration;

  let hours: any[] = [];

  for (; startTime < endTime; startTime += 60) {
    hours.push(
      <div style={{ height: `${entryAlign}px` }} className={styles.hourEntry}>
        <span className={styles.line} />
        {`${startTime / 60}h`}
      </div>
    );
  }
  hours.push(
    <div className={styles.hourEntry}>
      <span className={styles.line} />
    </div>
  );

  return <>{hours}</>;
}

function TimeTableEvent(props: {
  timeslot: [Timeslot, ICBDActivity];
  vertical: boolean;
  position: number;
  name: string;
  size: number;
}) {
  const style = props.vertical
    ? { height: `${props.size}px` }
    : { width: `${props.size}px` };

  return (
    <div
      className={styles.event}
      style={{
        top: `${props.position}px`,
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
  size: number;
  startTime: string;
  endTime: string;
}) {
  let key = 0;
  const router = useRouter();
  // In minutes
  const duration =
    timeToMinutes(props.endTime) - timeToMinutes(props.startTime);

  return (
    <div className={`${styles.entry} ${styles.vertical}`}>
      {props.timeslots.map((t) => {
        const size =
          ((timeToMinutes(t[0].end_time) - timeToMinutes(t[0].start_time)) /
            duration) *
          props.size;

        const positon =
          ((timeToMinutes(t[0].start_time) - timeToMinutes(props.startTime)) /
            duration) *
          props.size;

        const translation = getTranslation(t[1], router.locale);

        return (
          <TimeTableEvent
            name={translation.name || ""}
            key={key++}
            timeslot={t}
            vertical={props.vertical}
            size={size}
            position={positon}
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
  size: number;
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
              <Hours
                startTime={props.startTime}
                endTime={props.endTime}
                height={props.size}
              />
            </td>
            {Object.keys(rooms).map((room) => (
              <td key={"entry|" + room}>
                <TimetableEntry
                  timeslots={rooms[room]}
                  vertical={true}
                  size={props.size}
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

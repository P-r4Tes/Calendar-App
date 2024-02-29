import { postFirebase } from "./firebase";

export const postSchedule = (body: schedule) => {
  postFirebase<"schedules">("schedules", body);
};

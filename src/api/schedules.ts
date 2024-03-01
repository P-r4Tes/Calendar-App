import { popFirebaseArray, postFirebase, pushFirebaseArray } from "./firebase";

export const postSchedule = (body: schedule) => {
  postFirebase<"schedules">("schedules", body);
};

export const pushScheduleTag = (id: string, value: string) => {
  pushFirebaseArray<"schedules">("schedules", id, "tags", value);
};

export const popScheduleTag = (id: string, value: string) => {
  popFirebaseArray<"schedules">("schedules", id, "tags", value);
};

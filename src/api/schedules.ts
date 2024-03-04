import { isEmpty, isStringArgumentsValid } from "@/lib/functions/stringValidation";
import { deleteFirebase, getFirebase, popFirebaseArray, postFirebase, pushFirebaseArray } from "./firebase";

export const postSchedule = (body: schedule) => {
  const { description, endTime, startTime, title } = body;
  if (!isStringArgumentsValid(title, endTime, startTime, description)) throw new Error("Invalid string arguments");
  postFirebase<"schedules">("schedules", body);
};

export const getSchedule = (id: string) => {
  if (isEmpty(id)) throw new Error("Invalid id");
  return getFirebase<"schedules">("schedules", id);
};

export const deleteSchedule = (id: string) => {
  if (isEmpty(id)) throw new Error("Invalid id");
  return deleteFirebase<"schedules">("schedules", id);
};

export const pushScheduleTag = (id: string, value: string) => {
  if (!isStringArgumentsValid(id, value)) throw new Error("Invalid string arguments");
  pushFirebaseArray<"schedules">("schedules", id, "tags", value);
};

export const popScheduleTag = (id: string, value: string) => {
  if (!isStringArgumentsValid(id, value)) throw new Error("Invalid string arguments");
  popFirebaseArray<"schedules">("schedules", id, "tags", value);
};

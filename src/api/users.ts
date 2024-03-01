import { postFirebase, pushFirebaseArray } from "./firebase";

export const postUser = (body: user) => {
  postFirebase<"users">("users", body);
};

export const pushUserPersonalSchedule = (id: string, value: string) => {
  pushFirebaseArray<"users">("users", id, "personalSchedules", value);
};

export const pushUserGroup = (id: string, value: string) => {
  pushFirebaseArray<"users">("users", id, "groups", value);
};

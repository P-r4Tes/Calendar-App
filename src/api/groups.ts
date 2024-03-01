import { popFirebaseArray, postFirebase, pushFirebaseArray } from "./firebase";

export const postGroup = (body: group) => {
  postFirebase<"groups">("groups", body);
};

export const pushGroupSchedule = (id: string, value: string) => {
  pushFirebaseArray<"groups">("groups", id, "schedules", value);
};

export const pushGroupUser = (id: string, value: string) => {
  pushFirebaseArray<"groups">("groups", id, "users", value);
};

export const popGroupuser = (id: string, value: string) => {
  popFirebaseArray<"groups">("groups", id, "users", value);
};

export const popGroupSchedule = (id: string, value: string) => {
  popFirebaseArray<"groups">("groups", id, "schedules", value);
};

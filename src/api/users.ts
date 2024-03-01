import { popFirebaseArray, postFirebase, pushFirebaseArray, updateFirebaseField } from "./firebase";

export const postUser = (body: user) => {
  postFirebase<"users">("users", body);
};

export const pushUserPersonalSchedule = (id: string, value: string) => {
  pushFirebaseArray<"users">("users", id, "personalSchedules", value);
};

export const pushUserGroup = (id: string, value: string) => {
  pushFirebaseArray<"users">("users", id, "groups", value);
};

export const popUserPersonalSchedule = (id: string, value: string) => {
  popFirebaseArray<"users">("users", id, "personalSchedules", value);
};

export const popUserGroup = (id: string, value: string) => {
  popFirebaseArray<"users">("users", id, "groups", value);
};

export const updateUserName = (id: string, name: string) => {
  updateFirebaseField<"users">("users", id, "name", name);
};

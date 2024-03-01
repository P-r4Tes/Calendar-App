import { isEmpty, isStringArgumentsValid } from "@/lib/functions/stringValidation";
import { popFirebaseArray, postFirebase, pushFirebaseArray, updateFirebaseField } from "./firebase";

export const postUser = (body: user) => {
  if (isEmpty(body.name)) throw new Error("Invalid name");
  postFirebase<"users">("users", body);
};

export const pushUserPersonalSchedule = (id: string, value: string) => {
  if (!isStringArgumentsValid(id, value)) throw new Error("Invalid string arguments");
  pushFirebaseArray<"users">("users", id, "personalSchedules", value);
};

export const pushUserGroup = (id: string, value: string) => {
  if (!isStringArgumentsValid(id, value)) throw new Error("Invalid string arguments");
  pushFirebaseArray<"users">("users", id, "groups", value);
};

export const popUserPersonalSchedule = (id: string, value: string) => {
  if (!isStringArgumentsValid(id, value)) throw new Error("Invalid string arguments");
  popFirebaseArray<"users">("users", id, "personalSchedules", value);
};

export const popUserGroup = (id: string, value: string) => {
  if (!isStringArgumentsValid(id, value)) throw new Error("Invalid string arguments");
  popFirebaseArray<"users">("users", id, "groups", value);
};

export const updateUserName = (id: string, name: string) => {
  if (!isStringArgumentsValid(id, name)) throw new Error("Invalid string arguments");
  updateFirebaseField<"users">("users", id, "name", name);
};

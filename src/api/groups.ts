import { isEmpty, isStringArgumentsValid } from "@/lib/functions/stringValidation";
import { popFirebaseArray, postFirebase, pushFirebaseArray } from "./firebase";

export const postGroup = (body: group) => {
  if (isEmpty(body.name)) throw new Error("Invalid name");

  postFirebase<"groups">("groups", body);
};

export const pushGroupSchedule = (id: string, value: string) => {
  if (!isStringArgumentsValid(id, value)) throw new Error("Invalid string arguments");
  pushFirebaseArray<"groups">("groups", id, "schedules", value);
};

export const pushGroupUser = (id: string, value: string) => {
  if (!isStringArgumentsValid(id, value)) throw new Error("Invalid string arguments");
  pushFirebaseArray<"groups">("groups", id, "users", value);
};

export const popGroupuser = (id: string, value: string) => {
  if (!isStringArgumentsValid(id, value)) throw new Error("Invalid string arguments");
  popFirebaseArray<"groups">("groups", id, "users", value);
};

export const popGroupSchedule = (id: string, value: string) => {
  if (!isStringArgumentsValid(id, value)) throw new Error("Invalid string arguments");
  popFirebaseArray<"groups">("groups", id, "schedules", value);
};

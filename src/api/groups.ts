import { postFirebase, pushFirebaseArray, updateFirebase } from "./firebase";

export const postGroup = (body: group) => {
  postFirebase<"groups">("groups", body);
};

export const updateGroup = (id: string, body: group) => {
  updateFirebase<"groups">("groups", id, body);
};

export const pushGroupSchedule = (id: string, value: string) => {
  pushFirebaseArray<"groups">("groups", id, "schedules", value);
};

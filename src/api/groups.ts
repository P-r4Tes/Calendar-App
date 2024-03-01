import { postFirebase } from "./firebase";

export const postGroup = (body: group) => {
  postFirebase<"groups">("groups", body);
};

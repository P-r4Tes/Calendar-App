import { postFirebase } from "./firebase";

export const postUser = (body: user) => {
  postFirebase<"users">("users", body);
};

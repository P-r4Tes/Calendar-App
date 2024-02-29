import { postFirebase } from "./firebase";

export const postUser = (body: { name: string }) => {
  postFirebase<"users">("users", body);
};

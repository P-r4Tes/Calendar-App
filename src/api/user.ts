import { postFirebase } from "./firebase";

export const registUser = (body: { name: string }) => {
  postFirebase<"users">("users", body);
};

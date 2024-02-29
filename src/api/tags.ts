import { postFirebase } from "./firebase";

export const postTag = (body: { title: string; color: string }) => {
  postFirebase<"tags">("tags", body);
};

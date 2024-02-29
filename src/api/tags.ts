import { postFirebase } from "./firebase";

export const postTag = (body: tag) => {
  postFirebase<"tags">("tags", body);
};

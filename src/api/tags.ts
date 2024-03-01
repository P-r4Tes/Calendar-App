import { postFirebase, updateFirebaseField } from "./firebase";

export const postTag = (body: tag) => {
  postFirebase<"tags">("tags", body);
};

export const updateTagTitle = (id: string, title: string) => {
  updateFirebaseField<"tags">("tags", id, "title", title);
};

export const updateTagColor = (id: string, color: string) => {
  updateFirebaseField<"tags">("tags", id, "color", color);
};

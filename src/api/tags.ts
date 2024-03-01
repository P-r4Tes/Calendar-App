import { isEmpty } from "@/lib/functions/stringValidation";
import { getFirebase, postFirebase, updateFirebaseField } from "./firebase";

export const postTag = (body: tag) => {
  if (isEmpty(body.color)) throw new Error("Invalid color Data");
  if (isEmpty(body.title)) throw new Error("Invalid title Data");
  postFirebase<"tags">("tags", body);
};

export const getTag = (id: string) => {
  if (isEmpty(id)) throw new Error("Invalid id");
  return getFirebase<"tags">("tags", id);
};

export const updateTagTitle = (id: string, title: string) => {
  if (isEmpty(id)) throw new Error("Invalid id");
  if (isEmpty(title)) throw new Error("Invalid title");
  updateFirebaseField<"tags">("tags", id, "title", title);
};

export const updateTagColor = (id: string, color: string) => {
  if (isEmpty(id)) throw new Error("Invalid id");
  if (isEmpty(color)) throw new Error("Invalid color");
  updateFirebaseField<"tags">("tags", id, "color", color);
};

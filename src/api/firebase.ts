import { db } from "@/lib/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export const postFirebase = async <T extends TableTypes>(table: T, body: TalbeField<T>) => {
  try {
    const docRef = await addDoc(collection(db, table), body);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

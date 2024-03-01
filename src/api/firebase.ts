import { db } from "@/lib/firebaseConfig";
import { addDoc, arrayRemove, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";

export const postFirebase = async <T extends TableTypes>(table: T, body: TalbeField<T>) => {
  try {
    const docRef = await addDoc(collection(db, table), body);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateFirebase = async <T extends TableTypes>(table: T, id: string, body: TalbeField<T>) => {
  try {
    const firebaseRef = doc(db, table, id);
    await updateDoc(firebaseRef, body);
    console.log("Document written with ID: ", firebaseRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const pushFirebaseArray = async <T extends TableTypes>(
  table: T,
  id: string,
  field: keyof TalbeField<T>,
  value: string
) => {
  try {
    const firebaseRef = doc(db, table, id);
    console.log(field, value, { [field]: value });
    await updateDoc(firebaseRef, {
      [field]: arrayUnion(value),
    });
    console.log("Document written with ID: ", firebaseRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const popFirebaseArray = async <T extends TableTypes>(
  table: T,
  id: string,
  field: keyof TalbeField<T>,
  value: string
) => {
  try {
    const firebaseRef = doc(db, table, id);
    await updateDoc(firebaseRef, {
      [field]: arrayRemove(value),
    });
    console.log("Document written with ID: ", firebaseRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateFirebaseField = async <T extends TableTypes>(
  table: T,
  id: string,
  field: keyof TalbeField<T>,
  value: string
) => {
  try {
    const firebaseRef = doc(db, table, id);
    await updateDoc(firebaseRef, {
      [field]: value,
    });
    console.log("Document written with ID: ", firebaseRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

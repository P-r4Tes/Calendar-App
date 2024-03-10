import { db } from "@/lib/firebaseConfig";
import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";

// 조건부 파라미터를 추가하고 addDoc을 바꾸고 둘다 해야한다.
export const postFirebase = async <T extends TableTypes>(table: T, body: TalbeField<T>, id?: string) => {
  try {
    if (id === undefined) return await addDoc(collection(db, table), body);
    await addDoc(collection(db, table), { ...body, id });
  } catch (e) {
    console.error("Invalid Data");
  }
};

export const getFirebase = async <T extends TableTypes>(table: T, id: string) => {
  try {
    const firebaseRef = doc(db, table, id);
    const docSnap = await getDoc(firebaseRef);
    if (docSnap.exists()) {
      return docSnap.data() as TalbeField<T>;
    } else {
      console.error("No such document!");
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
};

export const deleteFirebase = async <T extends TableTypes>(table: T, id: string) => {
  try {
    await deleteDoc(doc(db, table, id));
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateFirebase = async <T extends TableTypes>(table: T, id: string, body: TalbeField<T>) => {
  try {
    const firebaseRef = doc(db, table, id);
    await updateDoc(firebaseRef, body);
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
    await updateDoc(firebaseRef, {
      [field]: arrayUnion(value),
    });
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
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

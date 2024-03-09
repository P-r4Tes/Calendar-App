import {
  apiKey,
  appId,
  authDomain,
  measurementId,
  messagingSenderId,
  projectId,
  storageBucket,
} from "@/constants/firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey,
  appId,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  measurementId,
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

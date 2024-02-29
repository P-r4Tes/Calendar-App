import { getAuth } from "firebase/auth";
import firebaseDB from "./firebasedb";

const fireAuth = getAuth(firebaseDB);
export default fireAuth;
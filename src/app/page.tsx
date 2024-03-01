"use client";

import { dummy } from "@/constants/dummy";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

export default function Home() {
  const store = db;
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(store, "user"));
      const docsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log(docsArray);
    };

    fetchData();
  }, []);
  const handleButton = () => {
    console.log(dummy);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Calendar App</h1>
      <button onClick={() => handleButton()}>안녕하세요?</button>
    </main>
  );
}

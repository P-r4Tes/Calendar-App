"use client";

import { getGroup } from "@/api/groups";
import { getSchedule } from "@/api/schedules";
import { getTag } from "@/api/tags";
import { getUser } from "@/api/users";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const Tag = await getTag("276QHNTcjeHbVQPihBFB");
      const Schedule = await getSchedule("1AUxRZyDLBKd4VPUmbKH");
      const Group = await getGroup("FZrYjYjNuWXRvtXU02mZ");
      const User = await getUser("6Rr06CqOUQjXuFG3dNyq");
      console.log("Tag", Tag);
      console.log("Schedule", Schedule);
      console.log("Group", Group);
      console.log("User", User);
    };

    fetchData();
  }, []);
  const handleButton = () => {
    console.log("안녕하세요?");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" data-testid="root-layout">
      <h1>Calendar App</h1>
      <button onClick={() => handleButton()}>안녕하세요?</button>
    </main>
  );
}

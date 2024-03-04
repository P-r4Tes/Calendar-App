'use client';
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Calendar App</h1>
      <LoginForm />
      <SignupForm />
    </main>
  );
}
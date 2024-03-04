'use client';
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Calendar App</h1>
      <LoginForm />
      <SignupForm />
    </main>
  );
}
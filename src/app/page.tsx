'use client';
import fireAuth from "../../firebase/fireAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Home() {

  const handleLogin = async () => {
    console.log("login");
    const provider = new GoogleAuthProvider();
    const data = await signInWithPopup(fireAuth, provider);
    console.log(data.user);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Calendar App</h1>
      <button onClick={handleLogin}>로그인</button>
    </main>
  );
}

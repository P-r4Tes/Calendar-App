"use client";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebaseAuth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("이메일 로그인에 성공했습니다!");
    } catch (error) {
      alert("이메일 로그인에 실패했습니다.");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await setDoc(
        doc(db, "users", user.uid),
        {
          email: user.email,
          groups: [],
          name: user.displayName,
          personalSchedules: [],
        },
        { merge: true }
      );
      alert("구글 로그인에 성공했습니다!");
    } catch (error) {
      alert("구글 로그인에 실패했습니다.");
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 shadow-md">
      <h2 className="text-lg font-bold mb-4">로그인</h2>
      <form onSubmit={handleEmailLogin} className="flex flex-col">
        <div className="mb-5">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="p-2.5 text-base rounded-md border border-gray-300"
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="p-2.5 text-base rounded-md border border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="p-2.5 text-base bg-blue-500 text-white rounded-md border-none cursor-pointer hover:bg-blue-700"
        >
          이메일로 로그인
        </button>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="p-2.5 text-base bg-blue-500 text-white rounded-md border-none cursor-pointer hover:bg-blue-700 mt-3"
        >
          구글로 로그인
        </button>
      </form>
    </div>
  );
}

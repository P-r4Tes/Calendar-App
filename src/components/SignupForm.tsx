import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseAuth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const userCredential = createUserWithEmailAndPassword(auth, email, password);
      const user = (await userCredential).user;
      await setDoc(doc(db, "users", user.uid), {
        email: email,
        groups: [],
        name: "",
        personalSchedules: [],
      });
      alert("회원가입에 성공했습니다!");
    } catch (error) {
      alert("회원가입에 실패했습니다.");
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 shadow-md">
      <h2 className="text-lg font-bold mb-4">회원가입</h2>
      <form onSubmit={handleSignUp} className="flex flex-col space-y-4">
        <div>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          회원가입
        </button>
      </form>
    </div>
  );
}

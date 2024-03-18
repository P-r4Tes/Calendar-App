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

  const handleKakaoLogin = () => {
    window.Kakao.Auth.login({
      success: () => {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: async res => {
            console.log(res);
            try {
              await setDoc(
                doc(db, "users", `kakao:${res.id}`),
                {
                  email: res.kakao_account.email,
                  // kakaoId: res.id,
                  groups: [],
                  name: res.properties.nickname,
                  personalSchedules: [],
                  // profileImage: res.properties.profile_image,
                  // 기타 필요한 정보 추가
                },
                { merge: true }
              );
              alert("카카오 로그인에 성공했습니다!");
            } catch (error) {
              alert("카카오 로그인에 실패했습니다.");
              console.log(error.message);
            }
          },
          fail: error => {
            console.log(error);
          },
        });
      },
      fail: err => {
        console.log(err);
      },
    });
  };

  const loadKakaoSDK = callback => {
    const existingScript = document.getElementById("kakao-js-sdk");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.js";
      script.id = "kakao-js-sdk";
      document.body.appendChild(script);

      script.onload = () => {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY); // JavaScript 키로 초기화
        if (callback) callback();
      };
    } else if (callback) {
      callback();
    }
  };

  useEffect(() => {
    loadKakaoSDK(() => {
      console.log("Kakao SDK loaded");
    });
  }, []);

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
        <button
          type="button"
          onClick={handleKakaoLogin}
          className="p-2.5 text-base bg-yellow-500 text-white rounded-md border-none cursor-pointer hover:bg-yellow-700 mt-3"
        >
          카카오로 로그인
        </button>
      </form>
    </div>
  );
}

import { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import fireAuth from '../../firebase/fireAuth';
import styles from './Form.module.css'; // CSS 모듈

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(fireAuth, email, password);
      alert("이메일 로그인에 성공했습니다!");
    } catch (error) {
      alert("이메일 로그인에 실패했습니다.");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(fireAuth, provider);
      alert("구글 로그인에 성공했습니다!");
    } catch (error) {
      alert("구글 로그인에 실패했습니다.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>로그인</h2>
      <form onSubmit={handleEmailLogin} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>이메일로 로그인</button>
        <button type="button" onClick={handleGoogleLogin} className={styles.button}>구글로 로그인</button>
      </form>
    </div>
  );
}

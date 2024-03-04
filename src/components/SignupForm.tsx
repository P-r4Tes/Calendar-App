import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import fireAuth from '../../firebase/fireAuth';
import styles from './Form.module.css'; // CSS 모듈

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(fireAuth, email, password);
      alert("회원가입에 성공했습니다!");
    } catch (error) {
      alert("회원가입에 실패했습니다.");
      console.log(error.message);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>회원가입</h2>
      <form onSubmit={handleSignUp} className={styles.form}>
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
        <button type="submit" className={styles.button}>회원가입</button>
      </form>
    </div>
  );
}

"use client";

import { useRef, useState } from "react";
import classes from "./auth-form.module.scss";

const AuthForm = () => {
  const [passwordlength, SetPasswordlength] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // useRef로 현재 입력값 가져오기
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredName = nameRef.current.value;

    if (enteredPassword.length < 7) {
      SetPasswordlength("비밀번호는 7자리 이상으로 해주세요");
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          name: enteredName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("회원가입 성공:", data);

        window.location.href = data.redirectUrl;
      } else {
        console.error("회원가입 실패:", data.message);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  const checkedEmail = () => {};

  return (
    <div>
      <h2>회원가입 페이지</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" id="password" ref={passwordRef} required />
          <span>{passwordlength}</span>
        </div>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" id="name" ref={nameRef} required />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default AuthForm;

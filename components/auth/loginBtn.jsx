"use client";

import { useRef } from "react";
import classes from "./loginBtn.module.scss";

const LoginBtn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginHandleSubmit = async (e) => {
    e.preventDefault();
    const enteredemail = emailRef.current.value;
    const enteredpassword = passwordRef.current.value;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: enteredemail,
          password: enteredpassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message);
        return;
      }

      localStorage.setItem("token", data.token); // 토큰 저장
      alert("로그인 성공!");
      window.location.href = "/";
    } catch (e) {
      console.error("로그인 요청 중 에러 발생:", e);
    }
  };
  return (
    <>
      <h2>로그인페이지</h2>
      <form onSubmit={loginHandleSubmit}>
        <div>
          <label htmlFor="">email</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <button type="submit">로그인</button>
      </form>
    </>
  );
};

export default LoginBtn;

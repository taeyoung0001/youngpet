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
    <div className={classes.loginWrap}>
      <h2 className={classes.loginTitle}>LOGIN</h2>
      <form className={classes.loginForm} onSubmit={loginHandleSubmit}>
        <div className={classes.emailWrap}>
          <input placeholder="email" type="email" id="email" ref={emailRef} />
        </div>
        <div className={classes.emailWrap}>
          <input
            placeholder="password"
            type="password"
            id="password"
            ref={passwordRef}
          />
        </div>
        <button className={classes.submitBtn} type="submit">
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginBtn;

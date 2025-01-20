"use client";

import useAuth from "@/hooks/useAuth";
import classes from "./page.module.scss";
import LogOutBtn from "@/components/auth/logOutBtn";

const AboutPage = () => {
  const user = useAuth();
  return (
    <div className={classes.aboutPage}>
      <h2>정보창</h2>
      {user ? (
        <div className={classes.userInfo}>
          <p>이메일: {user.email}</p>
          <p>이름: {user.name}</p>
        </div>
      ) : null}

      <div>
        <h2>예약내역보열줄 공간</h2>
      </div>
      <LogOutBtn />
    </div>
  );
};

export default AboutPage;

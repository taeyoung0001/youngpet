"use client";

import LogOutBtn from "@/components/auth/logOutBtn";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AboutPage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
        console.log(decodedToken);
      } catch (e) {
        console.log(e);
      }
    }
  }, []);
  return (
    <div>
      <h2>정보창</h2>
      {user ? (
        <div>
          <p>이메일 :{user.email}</p>
          <p>이름: {user.name} </p>
        </div>
      ) : null}

      <LogOutBtn />
    </div>
  );
};

export default AboutPage;

// 나중에 정보창에 예약내역도 보여주고싶음

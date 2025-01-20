"use client";

import LogOutBtn from "@/components/auth/logOutBtn";

const AboutPage = () => {
  const user = useAuth();
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

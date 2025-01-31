"use client";

import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import classes from "./page.module.scss";

const AboutPage = () => {
  const [loading, setLoading] = useState(true);
  const [cartData, setCartData] = useState(null);
  const user = useAuth();

  useEffect(() => {
    const fetchCartData = async () => {
      if (user) {
        try {
          const response = await fetch(`/api/cart?user=${user.email}`);
          const data = await response.json();
          setCartData(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching cart data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (user) {
      fetchCartData();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div className={classes.userInfoContainer}>
      <h2>내 정보</h2>
      {user ? (
        <div className={classes.userInfo}>
          <p>
            <strong>이메일:</strong> {user.email}
          </p>
          <p>
            <strong>이름:</strong> {user.name}
          </p>

          {cartData && cartData.length > 0 ? (
            <>
              <div className={classes.cart}>
                <h2>장바구니 목록</h2>
                {cartData.map((item, index) => (
                  <div className={classes.cartList} key={index}>
                    <h4>목욕 :{item.bathTitle}</h4>
                    <h4>시간 :{item.timeTitle}</h4>
                    <h4>주말/명절 :{item.weekTitle}</h4>
                    <h4>예약 날짜 :{item.reserveDate}</h4>
                  </div>
                ))}
              </div>

              <div className={classes.price}>
                <h2>예약 목록</h2>
              </div>
            </>
          ) : (
            <p>구매목록이 없습니다.</p>
          )}
        </div>
      ) : (
        <p>로그인하세요</p>
      )}
    </div>
  );
};

export default AboutPage;

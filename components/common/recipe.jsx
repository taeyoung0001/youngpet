"use client";
import { useEffect, useState } from "react";

const Recipe = ({ data }) => {
  console.log("data 넘어온 값:", data);

  const [time, setTime] = useState("0");
  const [bath, setBath] = useState("0");
  const [week, setWeek] = useState("0");
  const [add, setAdd] = useState("0원");

  useEffect(() => {
    if (data) {
      // 데이터 상태 업데이트
      const updatedTime = data.time || "0";
      const updatedBath = data.bath || "0";
      const updatedWeek = data.week || "0";

      setTime(updatedTime);
      setBath(updatedBath);
      setWeek(updatedWeek);

      // 추가 금액 계산
      const total =
        parseInt(updatedTime, 10) +
        parseInt(updatedBath, 10) +
        parseInt(updatedWeek, 10);

      setAdd(`${total.toLocaleString()}원`);
    }
  }, [data]);

  return (
    <div>
      <h2>가격정보</h2>
      <p>
        시간(분 단위) : <span>{time}원</span>
      </p>

      <p>
        주말/명절(0:평일, 1:주말, 2:명절) : <span>{week}원</span>
      </p>
      <p>
        목욕여보(나이) : <span>{bath}원</span>
      </p>
      <p>총합 : {add}</p>
    </div>
  );
};

export default Recipe;

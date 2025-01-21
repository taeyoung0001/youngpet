"use client";
import { useState } from "react";
import Recipe from "@/components/common/recipe";
import SelectBar from "./selectBar";
import classes from "./getReserve.module.scss";
import DateSelectBar from "./dateSelectBar";
import useAuth from "@/hooks/useAuth";

export default function ReserveForm({ timeSelect, bathSelect, weekSelect }) {
  const user = useAuth();
  console.log("예약", user);

  const [selectedValues, setSelectedValues] = useState({
    time: "",
    bath: "",
    week: "",
    timeTitle: "",
    bathTitle: "",
    weekTitle: "",
    reserveDate: "",
  });

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    const title =
      e.target.options[e.target.selectedIndex].getAttribute("data-title");

    setSelectedValues((prev) => ({
      ...prev,
      [name]: value,
      [`${name}Title`]: title,
    }));
  };

  const handleDateChange = (e) => {
    // 날짜 선택 시 reserveDate 업데이트
    setSelectedValues((prev) => ({
      ...prev,
      reserveDate: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedValues.time === "") {
      return alert("시간은 필수 입니다.");
    }
    if (selectedValues.reserveDate === "") {
      return alert("날짜는 필수 입니다.");
    }
    console.log("넘어온값", selectedValues);

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bath: selectedValues.bath,
          bathTitle: selectedValues.bathTitle,
          time: selectedValues.time,
          timeTitle: selectedValues.timeTitle,
          week: selectedValues.week,
          weekTitle: selectedValues.weekTitle,
          reserveDate: selectedValues.reserveDate, // 날짜 값 전송
          user: user.email,
        }),
      });

      if (response.ok) {
        // 성공적인 처리 후 로직
        console.log("장바구니에 추가되었습니다!");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };

  return (
    <div className={classes.priceWrap}>
      <h2>구매정보</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <SelectBar
          name="time"
          data={timeSelect}
          onChange={handleSelectChange}
        />
        <SelectBar
          name="bath"
          data={bathSelect}
          onChange={handleSelectChange}
        />
        <SelectBar
          name="week"
          data={weekSelect}
          onChange={handleSelectChange}
        />
      </form>
      <DateSelectBar
        name="reserveDate"
        onChange={handleDateChange} // 날짜 변경 시 처리 함수 추가
      />
      <Recipe data={selectedValues} />
      <button className={classes.subBtn} onClick={handleSubmit} type="submit">
        장바구니에 담기
      </button>
    </div>
  );
}

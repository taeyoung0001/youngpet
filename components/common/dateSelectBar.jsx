import React from "react";

const DateSelectBar = ({ name, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>예약 날짜</label>
      <input
        type="date"
        id={name}
        name={name}
        onChange={onChange} // onChange를 통해 날짜를 처리
      />
    </div>
  );
};

export default DateSelectBar;

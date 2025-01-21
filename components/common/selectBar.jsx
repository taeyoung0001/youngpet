import React from "react";
import classes from "./selectBar.module.scss";
import DateSelectBar from "./dateSelectBar";

const SelectBar = ({ data, onChange, name }) => {
  return (
    <>
      {" "}
      <div className={classes.selectBarContainer}>
        <select className={classes.selectBar} name={name} onChange={onChange}>
          <option value="">{data[0]?.name}</option>
          {data.map((item) => (
            <option key={item.value} value={item.price} data-title={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectBar;

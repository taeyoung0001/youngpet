import classes from "./reserveBtn.module.scss";

const ReserveBtn = ({ title }) => {
  return <button className={classes.btn}>{title}</button>;
};

export default ReserveBtn;

import classes from "./bedge.module.scss";

const Bedge = ({ title, shape, bgColor, color }) => {
  return (
    <div
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      className={`${classes.bedge} ${classes[shape]}`}
    >
      {title}
    </div>
  );
};

export default Bedge;

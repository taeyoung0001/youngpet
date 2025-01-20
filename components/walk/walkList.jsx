import classes from "./walkList.module.scss";

const WalkList = ({ walkResult }) => {
  console.log(walkResult);
  return (
    <div className={classes.walkWrap}>
      {walkResult.map((walkItems) => {
        return (
          <div key={walkItems._id} className={classes.walkcard}>
            <img src="/logo.png" alt="" />
            <h4>{walkItems.title}</h4>
            <h4>{walkItems.price}</h4>
            {walkItems.new ? <h4>신상</h4> : null}
            {walkItems.sale ? <h4>세일중</h4> : null}
          </div>
        );
      })}
    </div>
  );
};

export default WalkList;

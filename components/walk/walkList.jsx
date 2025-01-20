import Link from "next/link";
import Bedge from "./bedge";
import ReserveBtn from "./reserveBtn";
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
            {walkItems.new ? (
              <Bedge title="신상" bgColor="green" color="white" />
            ) : null}
            {walkItems.sale ? (
              <Bedge title="세일중" bgColor="red" color="white" />
            ) : null}
            <Link href={`/reserve/${walkItems._id}`}>
              <ReserveBtn title="예약하기" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default WalkList;

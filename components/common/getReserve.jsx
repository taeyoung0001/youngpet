import { connectDB } from "@/lib/db";
import { ObjectId } from "mongodb";
import classes from "./getReserve.module.scss";
import SelectBar from "./selectBar";

const GetReserve = async ({ params, collection }) => {
  const smallTimeSelct = [
    {
      title: "시간(필수선택)",
      value: "",
    },
    {
      title: "60분(기본) +18000",
      value: "60",
    },
    {
      title: "100분 + 29000",
      value: "100",
    },
    {
      title: "120분 + 34000",
      value: "120",
    },
  ];
  const smallWeekSelect = [
    {
      title: "주말/명절(선택)",
      value: "",
    },
    {
      title: "주말/공휴일 + 8000",
      value: "1",
    },
    {
      title: "명절 +5000",
      value: "2",
    },
  ];
  const smallBathSelect = [
    {
      title: "시간(필수선택)",
      value: "",
    },
    {
      title: "9살 이하 +25000",
      value: "9",
    },
    {
      title: "10살 이상  +30000",
      value: "10",
    },
    {
      title: "14살 이상 +35000",
      value: "14",
    },
  ];
  const id = params.category;
  console.log(collection);

  // 데이터베이스 연결 및 데이터 가져오기
  const db = (await connectDB).db("pet");
  const result = await db
    .collection(`${collection}`)
    .findOne({ _id: new ObjectId(id) });

  return (
    <div className={classes.container}>
      <div className={classes.imgWarp}>
        <img src="/logo.png" alt="" />
      </div>
      <div className={classes.about}>
        <h2>{result.title}</h2>
        <h3>{result.contents}</h3>
        <div className={classes.priceContainer}>
          <h3>가격정보</h3>
          <SelectBar data={smallTimeSelct} />
          <SelectBar data={smallBathSelect} />
          <SelectBar data={smallWeekSelect} />
        </div>
      </div>
    </div>
  );
};

export default GetReserve;

//이부분 다시 확인하기!

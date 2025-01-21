// /reserve/[category]/page.jsx
import { connectDB } from "@/lib/db";
import { ObjectId } from "mongodb";
import classes from "./page.module.scss";
import {
  smallTimeSelct,
  smallBathSelect,
  smallWeekSelect,
} from "@/dummy/wlak/small";
import ReserveForm from "@/components/common/reserveForm";

export default async function Page({ params }) {
  const id = params.category;

  const db = (await connectDB).db("pet");
  const result = await db.collection("walk").findOne({ _id: new ObjectId(id) });
  console.log(result);

  return (
    <div className={classes.container}>
      <div className={classes.imgWarp}>
        <img src="/logo.png" alt="" />
      </div>
      <div className={classes.about}>
        <h2>{result.title}</h2>
        <h3>{result.contents}</h3>{" "}
        {/* 1.몽고디비에 이 아이디를 가져오면 
        2.price폴더에 데이터를 가져온다? */}
        <ReserveForm
          timeSelect={result.smallselect}
          bathSelect={result.smallWeekSelect}
          weekSelect={result.smallBathSelect}
        />
      </div>
    </div>
  );
}

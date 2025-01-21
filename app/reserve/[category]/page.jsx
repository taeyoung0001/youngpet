// /reserve/[category]/page.jsx
import { connectDB } from "@/lib/db";
import { ObjectId } from "mongodb";
import classes from "./page.module.scss";

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
        <ReserveForm
          timeSelect={result.smallselect}
          bathSelect={result.smallWeekSelect}
          weekSelect={result.smallBathSelect}
        />
      </div>
    </div>
  );
}

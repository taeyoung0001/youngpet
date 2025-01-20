import WalkList from "@/components/walk/walkList";
import { connectDB } from "@/lib/db";

const WalkPage = async () => {
  const client = await connectDB;
  const db = client.db("pet");
  const walkResult = await db.collection("walk").find().toArray();

  return (
    <div
      className="walkWrap"
      style={{
        borderBottom: "1px solid black",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>산책페이지</h2>
      <WalkList walkResult={walkResult} />
    </div>
  );
};

export default WalkPage;

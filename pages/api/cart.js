import { connectDB } from "@/lib/db";

const cartHandler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const db = (await connectDB).db("pet");
      const result = await db
        .collection("cart")
        .find({ user: req.query.user })
        .toArray(); // 여러 문서 반환
      console.log(req.query.user);
      res.status(200).json(result);
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ message: "cart에러" });
    }

    // 포스트
  } else if (req.method === "POST") {
    const {
      bath,
      bathTitle,
      time,
      timeTitle,
      week,
      weekTitle,
      reserveDate,
      user,
    } = req.body;
    console.log("전송된 데이터:", req.body);
    try {
      const db = (await connectDB).db("pet");
      const result = await db.collection("cart").insertOne({
        bath,
        bathTitle,
        time,
        timeTitle,
        week,
        weekTitle,
        reserveDate, // 날짜 추가
        user,
      });

      res.status(200).json({ message: "잘 전송됨" });
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ message: "cart에러" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default cartHandler;

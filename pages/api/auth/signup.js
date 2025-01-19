import { connectDB } from "@/lib/db";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log("잘 전송됨", req.body);
    const db = (await connectDB).db("pet");
    const { name, email, password } = req.body;

    const existingUser = await db
      .collection("user_card")
      .findOne({ email: email });

    if (existingUser) {
      return res.status(403).json({ message: "이미 있는 유저입니다" });
    }

    const hash = await bcrypt.hash(password, 12);

    await db.collection("user_card").insertOne({
      name: name,
      email: email,
      password: hash,
    });

    return res
      .status(200)
      .json({ message: "회원가입완료", redirectUrl: "/login" });
  }
};

export default handler;

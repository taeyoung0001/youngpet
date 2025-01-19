import { connectDB } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginHandler = async (req, res) => {
  if (req.method === "POST") {
    const db = (await connectDB).db("pet");
    const { email, password } = req.body;

    // 이메일 또는 비밀번호가 입력되지 않은 경우
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "이메일과 비밀번호를 입력해 주세요." });
    }

    try {
      //유저찾아오기~
      const user = await db.collection("user_card").findOne({ email });

      if (!user) {
        return res.status(401).json({ message: "사용자가 없습니다." });
      }

      // 비밀번호 검증
      const validPW = await bcrypt.compare(password, user.password);
      if (!validPW) {
        return res.status(401).json({ message: "잘못된 비밀번호입니다." });
      }

      // JWT 생성!! 이메일, 이름을 가져와야한다! 나중에 폰번호도 가져오면 될듯?
      const token = jwt.sign(
        { email: user.email, id: user._id, name: user.name }, // payload
        "admin1234", // secret key
        { expiresIn: "1d" } // options
      );

      return res
        .status(200)
        .json({ message: "로그인 성공", token, redirectUrl: "/" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
  } else {
    return res.status(405).json({ message: "허용되지 않은 메서드입니다." });
  }
};

export default loginHandler;

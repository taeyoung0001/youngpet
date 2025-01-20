import { connectDB } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const db = (await connectDB).db("pet");
      const walks = await db.collection("walk").find({}).toArray();

      res.status(200).json(walks);
    } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ error: "Failed to fetch walks" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

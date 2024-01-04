import mongoose from "mongoose";
import User from "./models/User.model.js";

export async function POST(req) {
    const body = await req.body();
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await User.create();
  return Response.json("ok");
}
 
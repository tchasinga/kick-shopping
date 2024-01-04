import mongoose from "mongoose";
import User from "../models/user.model.js";

export async function POST(req) {
  const body = await req.json();

  mongoose.connect(process.env.MONGO_URL);
  const newUser = await User.create(body); // Ensure 'User' is defined correctly
  return Response.json(newUser);
}

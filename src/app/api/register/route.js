import mongoose from "mongoose";
import User from "../models/user.model.js";

export async function POST(req) {
  const body = await req.json();
  const myLinks = "mongodb+srv://tchasingajacques:jack202050081@kick-shopping.qgo3vzq.mongodb.net/kick-shopping?retryWrites=true&w=majority"

  mongoose.connect(process.env.MONGO_URL || myLinks);
  const newUser = await User.create(body); // Ensure 'User' is defined correctly
  return Response.json(newUser);
}

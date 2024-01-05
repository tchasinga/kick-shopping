import React from 'react'
import mongoose from "mongoose";
// import User from "../models/user.model.js";
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route.js';

export default async function  PUT(req) {
  const data = await req.json();
  const myLinks = "mongodb+srv://tchasingajacques:jack202050081@kick-shopping.qgo3vzq.mongodb.net/kick-shopping?retryWrites=true&w=majority"
  mongoose.connect(process.env.MONGO_URL || myLinks);
  const session = await getServerSession(authOptions);
  const email = session.user.email;
  
  if('name' in data){
   await User.updateOne({email}, {$set: {name: data.name}})
  } 
  return Response.json(true);
}

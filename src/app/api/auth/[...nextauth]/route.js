// Assuming these are your environment variables
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as mongoose from "mongoose";
import User from "../../models/user.model.js";
import bcrypt from 'bcrypt';
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../libs/mongoConnect.js"; // This is the module from the previous snippet

const LocaGet = "balolebwamitchasingathebest"
const myOneId = "294861944305-kdef5bgfvd4grq65jiur0c7m18tcekf3.apps.googleusercontent.com"
const myTwoId = "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"

// Removed the export keyword from here
const authOptions = {
  secret: process.env.SECRET || LocaGet,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || myOneId,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || myTwoId,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: { label: "Enter your email here", type: "email", placeholder: "tchasingajacque@gmail.com" },
        password: { label: "Enter your password here", type: "password" }
      },
      async authorize(credentials, req) {
        const {email , password} = credentials
        const myLinks = "mongodb+srv://tchasingajacques:jack202050081@kick-shopping.qgo3vzq.mongodb.net/kick-shopping?retryWrites=true&w=majority"
        try {
          await mongoose.connect(myLinks, { useNewUrlParser: true, useUnifiedTopology: true });
          const user  = await User.findOne({email})
        
          // Check if user exists
          if (!user) {
            console.log('No user found with this email');
            return null;
          }
          const passwordOk = await bcrypt.compare(password, user.password)
  
          if (passwordOk) {
            return { email: user.email }; // return user email
          }
          return null;
        } catch (error) {
          console.error(error);
          return null;
        }
      }
    })
  ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
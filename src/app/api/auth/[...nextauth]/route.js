// Assuming these are your environment variables
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as mongoose from "mongoose";
import User from "../../models/user.model.js";
import bcrypt from 'bcrypt';

const LocaGet = "balolebwamitchasingathebest"

const handler = NextAuth({
  secret: process.env.SECRET || LocaGet,
  providers: [
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
});

export { handler as GET, handler as POST };

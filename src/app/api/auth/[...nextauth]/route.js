// Assuming these are your environment variables
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import * as mongoose from "mongoose";
// import User from "../../models/user.model.js";
// import bcrypt from 'bcrypt';

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
        console.log({ credentials });
        // You need to provide your own logic here that takes the credentials
        return null;
      }
    })
  ]
});

export { handler as GET, handler as POST };

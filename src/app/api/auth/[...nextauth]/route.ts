import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler  = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
     credentials: {
          username: { label: "enter your email here", type: "email", placeholder: "tchasingajacque@gmail.com" },
          password: { label: "enter your password here", type: "password" }
        },
      async authorize(credentials , req){
        console.log({credentials})
        return null;
      }
    })
      
  ]
})

export { handler as GET , handler as POST}
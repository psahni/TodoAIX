import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from "./prisma/client";
const SESSION_DURATION = 24*60*60;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: { params: { prompt: "consent" } },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: SESSION_DURATION,
    updateAge: 24 * 60 * 60
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add user ID to the token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string; // Add user ID to the session object
      return session;
    },
    async signIn({ user, profile, account }) {
      const existinguser = await prisma.user.findUnique({where: { email: user.email as string },})
      console.log("Sign in callback");
      console.log(existinguser);
      console.log(user, profile, account);
      if (!existinguser) {
        await prisma.user.upsert({
          where: {
            email: user.email as string,
          },
          create: {
            email: user.email as string,
            name: user.name,
            image: user.image,
          },
          update: {
            name: user.name,
            image: user.image,
          },
        })
      }
      return true; // Allow sign-in
    }
  },
});



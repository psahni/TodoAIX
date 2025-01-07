import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from "./prisma/client";

const JWT_SECRET = process.env.JWT_SECRET;
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
    async signIn({ user }) {
      const existinguser = await prisma.user.findUnique({where: { email: user.email as string },})
      if (!existinguser) {
        await prisma.user.create({
          data: {
            email: user.email as string,
            name: user.name,
            image: user.image,
          }
        })
      }

      return true; // Allow sign-in
    }
  },
});



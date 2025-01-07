import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import Login  from "@/components/login";
export default async function Home() {
  const session = await auth();

  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  return (
    <SessionProvider session={session}>
      <Login />
    </SessionProvider>
  )
}

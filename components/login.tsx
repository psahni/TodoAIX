"use client";

import { signInAction } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col items-center sm:items-start">
            <h1>Logged in</h1>
            <p>Welcome {session.user?.email}</p>
        </main>
      </div>
    );
  }
  else {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col items-center sm:items-start">
            <h1>Login</h1>
            <form action={signInAction}>
              <Button type="submit">Sign in with Google</Button>
            </form>
        </main>
      </div>
    );
  }
}

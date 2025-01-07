"use client";
import { useSession } from "next-auth/react"
import Image from "next/image"
import React from "react"

export default function UserProfile() {
  const session = useSession();
  console.log(session);
  if (!session) {
    return null;
  }
  return (
    <div>
      <Image
        src={session?.data?.user?.image || "/default-profile.png"}
        width={24}
        height={24}
        alt="user profile"
        className="rounded-full"
      />
  </div>)
}

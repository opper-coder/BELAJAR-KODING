"use client";

import { useSession } from "next-auth/react";

export default function Properties() {
  const { data: session }: { data: any } = useSession();
  return (
    <>
      Properties
      <h2>{session?.user?.fullname}</h2>
    </>
  );
}

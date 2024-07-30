"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /Home when the component mounts
    router.push("/Home");
  }, [router]);

  return (
    <div className="flex justify-center h-screen w-full">
      <h1>.</h1>
      <img src="/assets/Darlayooo.png" />
    </div>
  );
}

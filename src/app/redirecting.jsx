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
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}

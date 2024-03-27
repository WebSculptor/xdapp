"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TweetPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/tweet") {
      router.back();
    }
  }, [pathname, router]);

  return router.back();
}

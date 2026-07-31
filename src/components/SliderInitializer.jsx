"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SliderInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    const triggerInit = () => {
      if (typeof window !== "undefined" && typeof window.initChittortechServices === "function") {
        window.initChittortechServices();
      }
    };

    // Delay by 200ms to allow React to finish page rendering
    const timer = setTimeout(triggerInit, 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

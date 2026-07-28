"use client";
import { useEffect } from "react";

export default function ErudaConsole() {
  useEffect(() => {
    // Hanya berjalan di mode Development/Staging agar tidak mengganggu user biasa
    if (process.env.NODE_ENV === "development") {
      import("eruda").then((eruda) => eruda.default.init());
    }
  }, []);

  return null;
}

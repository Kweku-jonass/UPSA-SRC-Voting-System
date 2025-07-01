import React from "react";
import { useRouter } from "next/router";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer
      className={`mt-20 ${
        router.pathname === "/admin" && "absolute bottom-0 w-full"
      }`}
    >
      <div className="bg-[#06033f] text-white p-4 text-center">
        UPSA E-Voting System - Designed for secure SRC elections
      </div>
    </footer>
  );
};

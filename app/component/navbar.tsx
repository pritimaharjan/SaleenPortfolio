"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function Navbar() {
  const [scrolling, isscrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      isscrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <nav
      className={cn(
        "fixed top-0  w-full z-50 transition-colors duration-300 ",
        scrolling
          ? "bg-white shadow-lg text-primary opacity-90"
          : "bg-transparent text-white",
        "flex items-center justify-between px-20 py-6  ",
      )}
    >
      <div className="text-lg font-semibold ">
        <Link href="/">Saleen Maharjan</Link>
      </div>

      <div className="flex gap-6 text-sm font-medium">
        <Link href="#about" className="hover:text-gray-300">
          About Me
        </Link>
        <Link href="#qualification" className="hover:text-gray-300">
          Qualification
        </Link>
        <Link href="#operational-expertise" className="hover:text-gray-300">
          Skills
        </Link>
        <Link href="#my-journey" className="hover:text-gray-300">
          Experience
        </Link>
        <Link href="#contact" className="hover:text-gray-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}

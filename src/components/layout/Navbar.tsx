"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Reel<span className="text-violet-500">.</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-zinc-400 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Button>Resume</Button>
      </div>
    </header>
  );
}
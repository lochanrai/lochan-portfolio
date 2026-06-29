"use client";

import Link from "next/link";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-cyan-400"
        >
          Lochan Rai
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white transition duration-300 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
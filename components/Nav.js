"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/20 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="./Mitthu-Kumar-Bhagat.pdf"
            download
            className="px-4 py-2 rounded-xl bg-brand-300 text-black font-semibold shadow-soft hover:bg-brand-400 transition"
          >
            Download Resume
          </a>
          <Link href="/" className="font-extrabold tracking-tight text-xl">
            Mitthu Kumar Bhagat - Protfolio
            <span className="text-brand-300">.</span>
          </Link>
        </div>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-xl text-sm transition ${
                pathname === l.href
                  ? "bg-white/10 text-white"
                  : "text-slate-200 hover:bg-white/10"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

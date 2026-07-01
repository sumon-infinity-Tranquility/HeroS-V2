"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Our Process" },
    { href: "/training", label: "Training" },
    { href: "/book", label: "Book Now" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "var(--hero-green)" }}>
              H
            </div>
            <div>
              <span className="font-bold text-lg" style={{ color: "var(--hero-green)" }}>HeroS</span>
              <span className="text-xs text-gray-400 block -mt-1">by Kampus Vertical</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.slice(0, -1).map((l) => (
              <Link key={l.href} href={l.href}
                className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/book"
              className="px-4 py-2 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "var(--hero-green)" }}>
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <div className="w-5 h-0.5 bg-gray-700 mb-1" />
            <div className="w-5 h-0.5 bg-gray-700 mb-1" />
            <div className="w-5 h-0.5 bg-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-green-700 py-1">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

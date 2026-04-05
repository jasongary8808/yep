"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Our Team" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFDE7C]/95 backdrop-blur-sm border-b-2 border-[#0f0f2d]/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="font-viga inline-flex items-center justify-center border-2 border-[#0f0f2d] bg-[#FFDE7C] px-4 py-1.5 text-xl font-black italic text-[#0f0f2d] shadow-[3px_3px_0px_#0f0f2d] transition hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0px_#0f0f2d] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#0f0f2d]"
        >
          YEP!
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-viga relative text-sm font-black uppercase tracking-wide text-[#0f0f2d] opacity-80 transition hover:opacity-100 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#0f0f2d] after:transition-all hover:after:w-full"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-viga rounded-xl border-2 border-[#0f0f2d] px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#0f0f2d] transition hover:bg-[#0f0f2d] hover:text-[#FFDE7C]"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 sm:hidden"
          onClick={() => setIsMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-0.5 w-6 bg-[#0f0f2d] transition-all ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#0f0f2d] transition-all ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#0f0f2d] transition-all ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="border-t-2 border-[#0f0f2d]/10 bg-[#FFDE7C] px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-viga block text-base font-black uppercase tracking-wide text-[#0f0f2d]"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="font-viga mt-2 block rounded-xl border-2 border-[#0f0f2d] px-4 py-2 text-center text-xs font-extrabold uppercase tracking-wide text-[#0f0f2d] transition hover:bg-[#0f0f2d] hover:text-[#FFDE7C]"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

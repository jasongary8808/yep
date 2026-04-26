"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setIsScrolled(window.scrollY > 64);
    const id = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome]);

  // On home: transparent over hero, solid after scroll. On other pages: solid sticky.
  const transparent = isHome && !isScrolled;

  const headerBase =
    "top-0 z-40 w-full transition-[background-color,box-shadow,border-color] duration-300";
  const headerScheme = isHome
    ? `fixed ${
        transparent
          ? "bg-transparent"
          : "bg-yep-black/95 backdrop-blur-md border-b border-yep-yellow/10 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]"
      }`
    : "sticky bg-yep-black border-b-2 border-yep-yellow/10";

  const logoScheme = transparent
    ? "border-white bg-transparent text-white shadow-[3px_3px_0px_white] hover:shadow-[4px_4px_0px_white] active:shadow-[1px_1px_0px_white]"
    : "border-yep-yellow bg-yep-black text-yep-yellow shadow-[3px_3px_0px_var(--color-yep-yellow)] hover:shadow-[4px_4px_0px_var(--color-yep-yellow)] active:shadow-[1px_1px_0px_var(--color-yep-yellow)]";

  const linkScheme = transparent
    ? "text-white after:bg-white"
    : "text-yep-yellow after:bg-yep-yellow";

  const applyScheme = transparent
    ? "border-white text-white hover:bg-white hover:text-yep-black"
    : "border-yep-yellow text-yep-yellow hover:bg-yep-yellow hover:text-yep-black";

  const hamburgerScheme = transparent ? "bg-white" : "bg-yep-yellow";

  const mobileMenuScheme = transparent
    ? "border-white/20 bg-black/70 backdrop-blur-md"
    : "border-yep-yellow/10 bg-yep-black";

  const mobileLinkScheme = transparent ? "text-white" : "text-yep-yellow";

  const mobileApplyScheme = transparent
    ? "border-white text-white hover:bg-white hover:text-yep-black"
    : "border-yep-yellow text-yep-yellow hover:bg-yep-yellow hover:text-yep-black";

  return (
    <header className={`${headerBase} ${headerScheme}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className={`font-viga inline-flex items-center justify-center border-2 px-4 py-1.5 text-xl font-black italic transition hover:-translate-x-px hover:-translate-y-px active:translate-x-0.5 active:translate-y-0.5 ${logoScheme}`}
        >
          YEP!
        </Link>

        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-viga relative text-sm font-black uppercase tracking-wide transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all hover:opacity-100 ${linkScheme} ${
                  active ? "opacity-100 after:w-full" : "opacity-80 after:w-0 hover:after:w-full"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/apply"
            className={`font-viga rounded-xl border-2 px-4 py-2 text-xs font-extrabold uppercase tracking-wide transition ${applyScheme}`}
          >
            Apply Now
          </Link>
        </nav>

        <button
          className="flex flex-col gap-1.5 sm:hidden"
          onClick={() => setIsMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span className={`block h-0.5 w-6 transition-all ${hamburgerScheme} ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all ${hamburgerScheme} ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all ${hamburgerScheme} ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {isMenuOpen && (
        <nav className={`border-t-2 px-6 py-4 sm:hidden ${mobileMenuScheme}`}>
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-viga block text-base font-black uppercase tracking-wide ${mobileLinkScheme}`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/apply"
                onClick={() => setIsMenuOpen(false)}
                className={`font-viga mt-2 block rounded-xl border-2 px-4 py-2 text-center text-xs font-extrabold uppercase tracking-wide transition ${mobileApplyScheme}`}
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

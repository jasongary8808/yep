import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/apply", label: "Apply" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-yep-black px-6 pb-10 pt-16 text-yep-yellow sm:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="font-viga inline-flex items-center justify-center border-2 border-yep-yellow bg-yep-black px-4 py-1.5 text-2xl font-black italic text-yep-yellow shadow-[3px_3px_0px_var(--color-yep-yellow)] transition hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0px_var(--color-yep-yellow)]"
          >
            YEP!
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-yep-yellow/75">
            Free entrepreneurship programs led by Brown University students for
            high schoolers across Providence.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/yep.providence/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-yep-yellow/40 transition hover:border-yep-yellow hover:bg-yep-yellow/10"
            >
              <Image src="/insta.svg" alt="" width={20} height={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-yep-yellow/40 transition hover:border-yep-yellow hover:bg-yep-yellow/10"
            >
              <Image src="/linkedin.png" alt="" width={20} height={20} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-viga text-xs font-black uppercase tracking-[0.25em] text-yep-yellow/60">
            Explore
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-yep-yellow/80 transition hover:text-yep-yellow"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-viga text-xs font-black uppercase tracking-[0.25em] text-yep-yellow/60">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-yep-yellow/80">
            <li>
              <a
                href="mailto:yep@brown.edu"
                className="transition hover:text-yep-yellow"
              >
                yep@brown.edu
              </a>
            </li>
            <li>
              <a href="tel:+14018631000" className="transition hover:text-yep-yellow">
                (401) 863-1000
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-viga text-xs font-black uppercase tracking-[0.25em] text-yep-yellow/60">
            Visit
          </p>
          <p className="mt-4 max-w-[230px] text-sm leading-relaxed text-yep-yellow/80">
            Nelson Center For Entrepreneurship
            <br />
            Euclid Avenue
            <br />
            Providence, RI
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-yep-yellow/15 pt-6 text-xs text-yep-yellow/50 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} YEP!@Brown. All rights reserved.</p>
        <p className="font-viga uppercase tracking-[0.25em]">
          Empowering Student Entrepreneurs
        </p>
      </div>
    </footer>
  );
}

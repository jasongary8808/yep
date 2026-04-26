import Link from "next/link";

interface FullWidthCardProps {
  title: string;
  body: string;
  eyebrow?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "light" | "dark";
}

export default function FullWidthCard({
  title,
  body,
  eyebrow,
  ctaText,
  ctaHref,
  variant = "light",
}: FullWidthCardProps) {
  const isDark = variant === "dark";

  const wrapperScheme = isDark
    ? "bg-yep-black text-yep-yellow"
    : "bg-white text-yep-black";

  const eyebrowScheme = isDark ? "text-yep-yellow/70" : "text-yep-black/60";

  const accentScheme = isDark ? "bg-yep-yellow" : "bg-yep-black";

  const bodyScheme = isDark ? "text-yep-yellow/85" : "text-yep-black/80";

  const ctaScheme = isDark
    ? "bg-yep-yellow text-yep-black hover:bg-yep-yellow-dark"
    : "bg-yep-black text-yep-yellow hover:bg-yep-blue";

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border-2 border-yep-black/10 px-8 py-14 sm:px-14 sm:py-20 ${wrapperScheme}`}
    >
      <div className={`absolute left-0 top-10 h-16 w-1.5 rounded-r ${accentScheme}`} />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
        <div>
          {eyebrow && (
            <p
              className={`font-viga text-xs font-black uppercase tracking-[0.3em] ${eyebrowScheme}`}
            >
              {eyebrow}
            </p>
          )}
          <h2 className="font-viga mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <p className={`text-base leading-relaxed sm:text-lg ${bodyScheme}`}>
            {body}
          </p>
          {ctaText && ctaHref && (
            <Link
              href={ctaHref}
              className={`font-viga w-fit rounded-full px-6 py-3 text-sm font-bold uppercase tracking-widest transition ${ctaScheme}`}
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

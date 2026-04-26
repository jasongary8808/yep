"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface MastheadProps {
  images: (string | StaticImageData)[];
  heading: string;
  eyebrow?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  interval?: number;
}

export default function Masthead({
  images,
  heading,
  eyebrow,
  subtitle,
  ctaText = "Join Now",
  ctaHref = "#",
  secondaryCtaText,
  secondaryCtaHref,
  interval = 5000,
}: MastheadProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, images.length]);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden rounded-b-3xl">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          quality={100}
          unoptimized
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

      <div className="absolute inset-x-0 bottom-0 px-6 pb-14 pt-10 sm:px-12 sm:pb-20 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col">
          {eyebrow && (
            <p className="font-viga mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-yep-yellow/60 bg-yep-yellow/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-yep-yellow backdrop-blur-sm sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-yep-yellow" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-viga text-5xl font-black leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-7xl md:text-[5.5rem]">
            {heading}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {subtitle}
            </p>
          )}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={ctaHref}
              className="font-viga inline-block rounded-full bg-yep-yellow px-6 py-3 text-sm font-bold uppercase tracking-widest text-yep-black shadow-[0_8px_0_-2px_rgba(255,222,124,0.35)] transition hover:-translate-y-0.5 hover:bg-yep-yellow-dark"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="font-viga inline-block rounded-full border-2 border-white/80 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-yep-black"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <>
          <div className="absolute bottom-6 right-10 flex gap-2 sm:right-16">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/60"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/60"
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
        <span className="font-viga text-xs uppercase tracking-[0.4em] text-white/70">
          Scroll
        </span>
      </div>
    </section>
  );
}

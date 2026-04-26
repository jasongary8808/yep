"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { MarketplaceBusiness } from "../data/MarketplaceBusinesses";

interface MarketplaceModalProps {
  business: MarketplaceBusiness | null;
  onClose: () => void;
}

export default function MarketplaceModal({
  business,
  onClose,
}: MarketplaceModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = business ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [business]);

  if (!business) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${business.name} details`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl border-2 border-yep-black bg-yep-yellow shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="font-viga absolute right-3 top-3 z-10 rounded-md border border-yep-black bg-yep-yellow px-3 py-1 text-sm font-black hover:bg-yep-black hover:text-yep-yellow"
        >
          Close
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[44%_56%]">
          <div className="relative aspect-[4/5] border-b-2 border-yep-black md:aspect-auto md:min-h-[560px] md:border-b-0 md:border-r-2">
            <Image
              src={business.imageUrl}
              alt={`${business.name} visual`}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          </div>

          <div className="p-6 pt-14 sm:p-8 sm:pt-16 md:p-10 md:pt-12">
            <p className="font-viga text-xs font-black uppercase tracking-[0.25em] text-yep-blue">
              {business.cohort}
            </p>
            <h2 className="font-viga mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              {business.name}
            </h2>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-yep-black/80">
              {business.blurb}
            </p>

            <dl className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-viga text-[0.62rem] font-black uppercase tracking-[0.18em] text-yep-black/65">
                  Founders
                </dt>
                <dd className="mt-1 font-semibold text-yep-black">
                  {business.founders.join(", ")}
                </dd>
              </div>
            </dl>

            <p className="mt-6 text-base leading-relaxed text-yep-black/90">
              {business.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-viga inline-flex items-center gap-2 rounded-full bg-yep-black px-5 py-2.5 text-xs font-black uppercase tracking-widest text-yep-yellow transition hover:bg-yep-blue"
              >
                Visit Website
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

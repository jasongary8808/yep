"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Artwork } from "../data/Programs";

interface ModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export default function Modal({ artwork, onClose }: ModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = artwork ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [artwork]);

  if (!artwork) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={artwork.title}
    >
      <div
        className="relative grid w-full max-w-4xl overflow-hidden rounded-2xl border-2 border-yep-yellow/15 bg-yep-black shadow-2xl sm:grid-cols-[300px_1fr]"
        style={{ maxHeight: "85vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-yep-yellow hover:text-yep-black"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="relative hidden sm:block">
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            sizes="300px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="flex flex-col justify-start gap-5 p-7 sm:p-9">
          {artwork.years && (
            <p className="font-viga inline-flex w-fit items-center rounded-full bg-yep-yellow px-3 py-1 text-[0.7rem] font-black uppercase tracking-widest text-yep-black">
              {artwork.years}
            </p>
          )}
          <h2 className="font-viga text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl">
            {artwork.title}
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
            {artwork.description}
          </p>
          <Link
            href="/apply"
            onClick={onClose}
            className="font-viga mt-2 inline-flex items-center gap-2 self-start rounded-full bg-yep-yellow px-5 py-2.5 text-xs font-black uppercase tracking-widest text-yep-black transition hover:bg-yep-yellow-dark"
          >
            Apply Now
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

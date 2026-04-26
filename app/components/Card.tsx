import Image from "next/image";
import { Artwork } from "../data/Programs";

interface CardProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

export default function Card({ artwork, onClick }: CardProps) {
  return (
    <button
      onClick={() => onClick(artwork)}
      className="group relative w-full cursor-pointer overflow-hidden rounded-[20px] border-2 border-yep-black/10 bg-yep-black/5 shadow-[0_8px_24px_-12px_rgba(15,15,45,0.3)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_-14px_rgba(15,15,45,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-yep-black"
      style={{ aspectRatio: "0.72" }}
      aria-label={artwork.title}
    >
      <Image
        src={artwork.imageUrl}
        alt={artwork.title}
        fill
        sizes="(max-width: 600px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        quality={100}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {artwork.years && (
        <span className="font-viga absolute left-4 top-4 inline-flex items-center rounded-full bg-yep-yellow px-3 py-1 text-[0.7rem] font-black uppercase tracking-widest text-yep-black shadow-md">
          {artwork.years}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-6">
        <h3 className="font-viga text-[2rem] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-[2.25rem]">
          {artwork.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-snug text-white/85">
          {artwork.description}
        </p>
        <span className="font-viga mt-4 inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.25em] text-yep-yellow opacity-0 transition group-hover:opacity-100">
          Learn More
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </button>
  );
}

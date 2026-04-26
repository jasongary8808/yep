import Image from "next/image";
import type { MarketplaceBusiness } from "../data/MarketplaceBusinesses";

interface MarketplaceCardProps {
  business: MarketplaceBusiness;
  onClick: (business: MarketplaceBusiness) => void;
}

function getSiteDomain(website: string): string {
  try {
    return new URL(website).hostname.replace(/^www\./, "");
  } catch {
    return website;
  }
}

export default function MarketplaceCard({
  business,
  onClick,
}: MarketplaceCardProps) {
  return (
    <article className="group flex flex-col">
      <button
        type="button"
        onClick={() => onClick(business)}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-yep-black"
        aria-label={`Open details for ${business.name}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border-2 border-yep-black bg-yep-blue shadow-[0_8px_24px_-12px_rgba(15,15,45,0.3)] transition group-hover:-translate-y-1 group-hover:shadow-[0_18px_36px_-14px_rgba(15,15,45,0.45)]">
          <Image
            src={business.imageUrl}
            alt={`${business.name} visual`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          <span className="font-viga absolute left-4 top-4 inline-flex items-center rounded-full bg-yep-yellow px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-yep-black shadow-md">
            {business.cohort}
          </span>

          <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white sm:p-6">
            <h3 className="font-viga text-3xl font-black uppercase leading-[0.95] sm:text-[2.15rem]">
              {business.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-snug text-white/85">
              {business.blurb}
            </p>
            <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-yep-yellow/90">
              {getSiteDomain(business.website)}
            </p>
          </div>
        </div>
      </button>
    </article>
  );
}

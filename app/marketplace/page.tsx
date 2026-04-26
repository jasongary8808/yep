"use client";

import { useEffect, useMemo, useState } from "react";
import MarketplaceCard from "../components/MarketplaceCard";
import MarketplaceModal from "../components/MarketplaceModal";
import {
  marketplaceBusinesses,
  type MarketplaceBusiness,
} from "../data/MarketplaceBusinesses";

export default function MarketplacePage() {
  const [query, setQuery] = useState("");
  const [selectedBusinessId, setSelectedBusinessId] = useState<number | null>(
    null
  );

  const selectedBusiness = useMemo<MarketplaceBusiness | null>(
    () =>
      selectedBusinessId === null
        ? null
        : marketplaceBusinesses.find((b) => b.id === selectedBusinessId) ??
          null,
    [selectedBusinessId]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return marketplaceBusinesses;
    return marketplaceBusinesses.filter((b) =>
      [b.name, b.blurb, b.description, b.cohort, b.founders.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  const totalFounders = useMemo(
    () => marketplaceBusinesses.reduce((c, b) => c + b.founders.length, 0),
    []
  );

  useEffect(() => {
    document.title = "Marketplace · YEP!@Brown";
  }, []);

  return (
    <main className="min-h-screen bg-yep-yellow font-vazirmatn text-yep-black">
      <section className="border-b-2 border-yep-black/10">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 sm:px-10 md:pb-16 md:pt-20">
          <p className="font-viga text-xs font-black uppercase tracking-[0.3em] text-yep-black/60">
            YEP Marketplace
          </p>
          <div className="mt-3 grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h1 className="font-viga text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl">
                Businesses Built Through YEP
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-yep-black/85 sm:text-base">
                Explore youth-founded ventures from the YEP program and meet
                the student teams behind each one.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border-2 border-yep-black bg-yep-yellow/70 p-4 backdrop-blur">
                <dt className="font-viga text-[0.65rem] font-black uppercase tracking-[0.18em] text-yep-black/65">
                  Businesses
                </dt>
                <dd className="font-viga mt-2 text-4xl font-black leading-none">
                  {marketplaceBusinesses.length}
                </dd>
              </div>
              <div className="rounded-2xl border-2 border-yep-black bg-yep-yellow/70 p-4 backdrop-blur">
                <dt className="font-viga text-[0.65rem] font-black uppercase tracking-[0.18em] text-yep-black/65">
                  Student Founders
                </dt>
                <dd className="font-viga mt-2 text-4xl font-black leading-none">
                  {totalFounders}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-10 md:pb-24 md:pt-12">
        <label className="block">
          <span className="font-viga block text-xs font-black uppercase tracking-[0.18em] text-yep-black/65">
            Search
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Business name, founder, or cohort"
            className="mt-2 w-full rounded-xl border-2 border-yep-black bg-white/80 px-4 py-3 text-sm outline-none transition focus:bg-white"
          />
        </label>

        <div className="mt-8">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((business) => (
                <MarketplaceCard
                  key={business.id}
                  business={business}
                  onClick={(b) => setSelectedBusinessId(b.id)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-yep-black bg-white/60 p-10 text-center">
              <p className="font-viga text-2xl font-black uppercase tracking-wide">
                No Businesses Found
              </p>
              <p className="mx-auto mt-2 max-w-xl text-sm text-yep-black/80">
                Try adjusting your search to see more YEP ventures.
              </p>
            </div>
          )}
        </div>
      </section>

      <MarketplaceModal
        business={selectedBusiness}
        onClose={() => setSelectedBusinessId(null)}
      />
    </main>
  );
}

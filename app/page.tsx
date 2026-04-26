import Link from "next/link";
import CardGrid from "./components/CardGrid";
import FullWidthCard from "./components/FullWidthCard";
import Masthead from "./components/Masthead";
import StatStrip from "./components/StatStrip";
import { mockArtworks } from "./data/Programs";

const heroImages = ["/heroImage1.png"];

const stats = [
  { value: "2019", label: "Founded" },
  { value: "100%", label: "Free for Students" },
  { value: "300+", label: "Students Served" },
  { value: "3", label: "Core Programs" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-yep-yellow font-vazirmatn">
      <Masthead
        images={heroImages}
        eyebrow="Youth Entrepreneurship Program"
        heading="YEP@Brown"
        subtitle="A free entrepreneurship program for Providence high schoolers, led by Brown University students. Build, pitch, and launch ideas that matter to your community."
        ctaText="Apply Now"
        ctaHref="/apply"
        secondaryCtaText="Meet The Team"
        secondaryCtaHref="/team"
      />

      <section
        id="programs"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-24"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-viga text-xs font-black uppercase tracking-[0.3em] text-yep-black/60">
              What We Offer
            </p>
            <h2 className="font-viga mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight text-yep-black sm:text-5xl md:text-6xl">
              Our Programs
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-yep-black/80 md:text-base">
              Three tracks designed to meet students wherever they are — from
              first-time founders to summer-camp explorers.
            </p>
          </div>
          <Link
            href="/apply"
            className="font-viga w-fit rounded-xl border-2 border-yep-black px-5 py-3 text-xs font-extrabold uppercase tracking-widest text-yep-black transition hover:bg-yep-black hover:text-yep-yellow"
          >
            Apply Here
          </Link>
        </div>

        <div className="mt-12">
          <CardGrid artworks={mockArtworks} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-10">
        <StatStrip
          eyebrow="By The Numbers"
          heading="Real Programs. Real Impact."
          stats={stats}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-24">
        <FullWidthCard
          eyebrow="Our Story"
          title="Our History"
          body="YEP! was founded in 2019 by three Brown University students — Audrey Shapiro, Lucia Winton, and Leah Lam — to address strained town-gown relations and the lack of entrepreneurship opportunities in under-resourced communities. Today YEP serves hundreds of Providence students across multiple program tracks, every one of them free."
          ctaText="Get Involved"
          ctaHref="/apply"
        />
      </section>
    </main>
  );
}

import Link from "next/link";
import FullWidthCard from "../components/FullWidthCard";

const missions = [
  {
    n: "01",
    title: "Develop Capable Entrepreneurs",
    body: "Equip young founders with the tools, mindset, and mentorship they need to grow the resources and wealth of their communities.",
  },
  {
    n: "02",
    title: "Grow Confidence",
    body: "Create space for participants to test ideas, fail safely, and build the conviction to keep going.",
  },
  {
    n: "03",
    title: "Strengthen Town–Gown Ties",
    body: "Improve the relationship between Brown University and the local Providence community through shared learning.",
  },
];

const chapters = [
  "Providence",
  "New Haven",
  "Berkeley",
  "Los Angeles",
  "Santa Barbara",
  "New York City",
  "Australia",
];

export const metadata = {
  title: "About · YEP!@Brown",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-yep-yellow font-vazirmatn text-yep-black">
      <section className="border-b-2 border-yep-black/10">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 sm:px-10 md:pb-16 md:pt-20">
          <p className="font-viga text-xs font-black uppercase tracking-[0.3em] text-yep-black/60">
            About YEP
          </p>
          <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="font-viga max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl">
              Bridging Campus &amp; Community Through Entrepreneurship
            </h1>
            <Link
              href="/contact"
              className="font-viga w-fit rounded-xl border-2 border-yep-black px-5 py-3 text-xs font-extrabold uppercase tracking-widest transition hover:bg-yep-black hover:text-yep-yellow"
            >
              Apply Here
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-yep-black/85 md:text-base">
            YEP!@Brown is a free, student-led entrepreneurship program for
            Providence high schoolers — built on the belief that opening
            Brown&rsquo;s doors to its neighbors is how the next generation of
            change-makers gets started.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-24">
        <div className="max-w-2xl">
          <p className="font-viga text-xs font-black uppercase tracking-[0.3em] text-yep-black/60">
            Our Three Missions
          </p>
          <h2 className="font-viga mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Why We Show Up
          </h2>
        </div>
        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {missions.map(({ n, title, body }) => (
            <li
              key={n}
              className="relative rounded-3xl border-2 border-yep-black bg-white p-7 shadow-[0_8px_24px_-12px_rgba(15,15,45,0.25)] transition hover:-translate-y-1"
            >
              <span className="font-viga text-5xl font-black text-yep-black/15">
                {n}
              </span>
              <h3 className="font-viga mt-3 text-2xl font-black uppercase leading-tight tracking-tight">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-yep-black/80">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 md:pb-24">
        <FullWidthCard
          eyebrow="Our Story"
          title="Our History"
          body="YEP! was founded in 2019 by three Brown University students — Audrey Shapiro, Lucia Winton, and Leah Lam — to address strained town–gown relations and the lack of entrepreneurship opportunities in under-resourced communities. Today YEP serves hundreds of Providence students every year, every program completely free."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <div className="rounded-3xl bg-yep-blue px-8 py-14 text-yep-yellow sm:px-12 sm:py-16">
          <p className="font-viga text-xs font-black uppercase tracking-[0.3em] text-yep-yellow/70">
            YEP Nationally
          </p>
          <h2 className="font-viga mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Seven Chapters. One Mission.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-yep-yellow/85 sm:text-base">
            YEP!@Brown is one of seven YEP National chapters around the world
            — a network of student-led programs sharing curriculum, mentorship,
            and the conviction that young entrepreneurs deserve real seats at
            the table.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {chapters.map((city) => (
              <li
                key={city}
                className="font-viga rounded-full border border-yep-yellow/40 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yep-yellow/90"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

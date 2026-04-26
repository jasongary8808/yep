interface Stat {
  value: string;
  label: string;
}

interface StatStripProps {
  stats: Stat[];
  eyebrow?: string;
  heading?: string;
}

export default function StatStrip({ stats, eyebrow, heading }: StatStripProps) {
  return (
    <section className="rounded-3xl bg-yep-blue px-8 py-12 text-yep-yellow sm:px-12 sm:py-16">
      {(eyebrow || heading) && (
        <div className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="font-viga text-xs font-black uppercase tracking-[0.3em] text-yep-yellow/70">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 className="font-viga mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
              {heading}
            </h2>
          )}
        </div>
      )}

      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="border-l-2 border-yep-yellow/40 pl-4 sm:pl-5"
          >
            <dt className="font-viga text-4xl font-black leading-none sm:text-5xl md:text-6xl">
              {value}
            </dt>
            <dd className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-yep-yellow/85 sm:text-sm">
              {label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

import Link from "next/link";

interface ApplyForm {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  link: string;
}

const forms: ApplyForm[] = [
  {
    key: "general",
    title: "General Interest",
    subtitle: "Curious about YEP?",
    description:
      "Our spring incubator is currently closed. The student showcase runs April 15th, 5–7pm. For details on upcoming summer and fall incubators, fill out the general interest form and we will be in touch.",
    buttonText: "General Interest Form",
    link: "https://forms.google.com/placeholder-general",
  },
  {
    key: "student",
    title: "Student Application",
    subtitle: "Ready to build your business idea?",
    description:
      "Apply to join YEP!@Brown's incubator program as a student entrepreneur. The program is free and open to high school students in the Providence area. Spots are limited — apply early.",
    buttonText: "Student Application Form",
    link: "https://forms.google.com/placeholder-student",
  },
  {
    key: "parent",
    title: "Parent / Guardian",
    subtitle: "Want to learn more about the program?",
    description:
      "Parents and guardians can fill out this short form to stay informed about YEP!@Brown, upcoming events, and how a student can get involved.",
    buttonText: "Parent / Guardian Form",
    link: "https://forms.google.com/placeholder-parent",
  },
];

export const metadata = {
  title: "Apply · YEP!@Brown",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-yep-yellow font-vazirmatn text-yep-black">
      <section className="border-b-2 border-yep-black/10">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 sm:px-10 md:pb-16 md:pt-20">
          <p className="font-viga text-xs font-black uppercase tracking-[0.3em] text-yep-black/60">
            Get Started
          </p>
          <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="font-viga max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl">
              Apply
            </h1>
            <Link
              href="/contact"
              className="font-viga w-fit rounded-xl border-2 border-yep-black px-5 py-3 text-xs font-extrabold uppercase tracking-widest transition hover:bg-yep-black hover:text-yep-yellow"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-yep-black/85 md:text-base">
            Three ways in: drop your name on the general interest list, apply
            as a student entrepreneur, or fill out the parent / guardian form
            to stay in the loop.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 md:py-20">
        <ol className="flex flex-col gap-8">
          {forms.map((form, i) => (
            <li
              key={form.key}
              className="group relative overflow-hidden rounded-3xl border-2 border-yep-black bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_36px_-14px_rgba(15,15,45,0.35)] sm:p-10"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10">
                <span className="font-viga text-5xl font-black text-yep-black/15 md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-viga text-[0.65rem] font-black uppercase tracking-[0.25em] text-yep-black/55">
                    {form.subtitle}
                  </p>
                  <h2 className="font-viga mt-2 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
                    {form.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-yep-black/80">
                    {form.description}
                  </p>
                </div>
                <a
                  href={form.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-viga inline-flex items-center gap-2 self-start rounded-xl bg-yep-black px-5 py-3 text-xs font-black uppercase tracking-widest text-yep-yellow transition hover:bg-yep-blue md:self-center"
                >
                  {form.buttonText}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

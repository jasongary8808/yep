"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setIsSuccess(false);

    const formElement = e.currentTarget;
    const data = Object.fromEntries(new FormData(formElement));

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Failed to send message.");
      }

      setStatus("Message sent! We'll be in touch soon.");
      setIsSuccess(true);
      formElement.reset();
    } catch (error) {
      const msg = error instanceof Error ? error.message : "Failed to send message.";
      setStatus(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border-2 border-yep-black bg-white/70 px-4 py-3 text-sm text-yep-black placeholder-yep-black/40 outline-none transition focus:border-yep-black focus:bg-white";

  return (
    <main className="min-h-screen bg-yep-yellow font-vazirmatn">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <p className="font-viga text-xs font-black uppercase tracking-[0.3em] text-yep-black/60">
              Get In Touch
            </p>
            <h1 className="font-viga mt-3 text-5xl font-black uppercase leading-[0.95] tracking-tight text-yep-black sm:text-6xl md:text-7xl">
              Contact Us
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-yep-black/80 md:text-base">
              Have a question or want to get involved? Send us a message and we&rsquo;ll get back to you.
            </p>

            <div className="mt-10 flex flex-col gap-4 text-sm text-yep-black">
              <div>
                <p className="font-viga font-black uppercase tracking-widest text-xs text-yep-black/60">
                  Email
                </p>
                <a href="mailto:yep@brown.edu" className="mt-1 block font-semibold hover:underline">
                  yep@brown.edu
                </a>
              </div>
              <div>
                <p className="font-viga font-black uppercase tracking-widest text-xs text-yep-black/60">
                  Phone
                </p>
                <p className="mt-1 font-semibold">(401) 863-1000</p>
              </div>
              <div>
                <p className="font-viga font-black uppercase tracking-widest text-xs text-yep-black/60">
                  Address
                </p>
                <p className="mt-1 font-semibold">
                  Nelson Center For Entrepreneurship
                  <br />
                  Euclid Avenue, Providence, RI
                </p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="rounded-3xl border-2 border-yep-black bg-white/40 p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="first"
                  placeholder="First name"
                  required
                  className={inputClass}
                />
                <input
                  name="last"
                  placeholder="Last name"
                  required
                  className={inputClass}
                />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email address"
                required
                className={inputClass}
              />
              <textarea
                name="message"
                placeholder="Your message"
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-viga mt-2 rounded-xl bg-yep-black px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-yep-yellow transition hover:bg-yep-blue disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p
                  className={`text-sm font-semibold ${
                    isSuccess ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

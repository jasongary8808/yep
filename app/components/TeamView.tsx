"use client";

import { useEffect, useMemo, useState } from "react";
import Avatar from "./Avatar";
import type { TeamMember, TeamSection } from "../data/Team";

interface TeamViewProps {
  sections: TeamSection[];
}

export default function TeamView({ sections }: TeamViewProps) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeSectionId) ?? null,
    [activeSectionId, sections]
  );

  const selectedMember = useMemo((): TeamMember | null => {
    if (selectedMemberId === null) return null;
    for (const section of sections) {
      const member = section.members.find((m) => m.id === selectedMemberId);
      if (member) return member;
    }
    return null;
  }, [selectedMemberId, sections]);

  const visibleSections = useMemo(
    () => (activeSection ? [activeSection] : sections),
    [activeSection, sections]
  );

  useEffect(() => {
    if (!selectedMember) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMemberId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMember]);

  return (
    <main className="min-h-screen bg-yep-yellow px-6 py-10 text-yep-black font-vazirmatn sm:px-10 md:px-14 md:py-12">
      <div className="mx-auto max-w-7xl">
        <header>
          <p className="font-viga text-xs font-black uppercase tracking-[0.3em] text-yep-black/60">
            The People Behind YEP
          </p>
          <h1 className="font-viga mt-3 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Our Team
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-yep-black/80 md:text-base">
            Brown University students across disciplines who lead, mentor, and
            run YEP each semester. Tap a section below to filter, and click a
            card to learn more about each person.
          </p>
          <nav className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => {
              const isActive = section.id === activeSectionId;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => {
                    setActiveSectionId((id) =>
                      id === section.id ? null : section.id
                    );
                    setSelectedMemberId(null);
                  }}
                  className={`font-viga rounded-xl border-2 border-yep-blue-border px-4 py-3 text-center text-lg font-black leading-none transition sm:text-xl ${
                    isActive
                      ? "bg-yep-blue text-yep-yellow"
                      : "bg-transparent text-yep-black hover:bg-yep-blue hover:text-yep-yellow"
                  }`}
                >
                  {section.title}
                </button>
              );
            })}
          </nav>
        </header>

        <div className="mt-16 space-y-20">
          {visibleSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-10">
              <h2 className="font-viga text-center text-5xl font-black uppercase tracking-[0.04em] sm:text-6xl">
                {section.title}
              </h2>
              <p className="mx-auto mt-4 max-w-5xl text-center text-sm font-semibold text-yep-black/85 sm:text-base">
                {section.intro}
              </p>

              <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
                {section.members.map((member) => (
                  <article
                    key={member.id}
                    className="mx-auto flex w-full max-w-[285px] flex-col"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedMemberId(member.id)}
                      className="group relative w-full cursor-pointer rounded-[14px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-yep-blue"
                      aria-label={`Open details for ${member.name}`}
                    >
                      <Avatar
                        src={member.imageUrl}
                        alt={member.name}
                        className="aspect-[3/4] w-full transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute -bottom-8 left-1/2 w-[86%] -translate-x-1/2 rounded-[14px] border-2 border-yep-blue bg-yep-blue px-3 py-3 text-center text-yep-yellow shadow-[0_8px_18px_-10px_rgba(18,27,79,0.7)] transition group-hover:-translate-y-0.5">
                        <p className="font-viga text-[1.75rem] font-black leading-none sm:text-[2rem]">
                          {member.name}
                        </p>
                        <p className="font-viga mt-1 text-[0.7rem] font-bold uppercase tracking-[0.18em]">
                          {member.role}
                        </p>
                      </div>
                    </button>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="/apply"
                  className="font-viga mt-[30px] w-full max-w-sm rounded-xl border-2 border-yep-blue-border px-5 py-3 text-center text-sm font-black uppercase tracking-widest transition hover:bg-yep-blue hover:text-yep-yellow"
                >
                  Apply Here
                </a>
              </div>
            </section>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedMember.name} details`}
          onClick={() => setSelectedMemberId(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border-2 border-yep-blue-border bg-yep-yellow"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMemberId(null)}
              className="font-viga absolute right-3 top-3 z-10 rounded-md border border-yep-blue-border bg-yep-yellow px-3 py-1 text-sm font-black text-yep-black hover:bg-yep-blue hover:text-yep-yellow"
            >
              Close
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[45%_55%]">
              <Avatar
                src={selectedMember.imageUrl}
                alt={selectedMember.name}
                rounded="rounded-none"
                className="aspect-[4/5] border-b-2 border-yep-blue-border md:aspect-auto md:min-h-[520px] md:border-b-0 md:border-r-2"
              />

              <div className="p-6 pt-14 sm:p-8 sm:pt-16 md:p-10 md:pt-12">
                <p className="font-viga text-xs font-black uppercase tracking-[0.25em] text-yep-blue">
                  {selectedMember.role}
                </p>
                <h3 className="font-viga mt-3 text-4xl font-black leading-[0.95] tracking-tight text-yep-black sm:text-5xl">
                  {selectedMember.name}
                </h3>
                {(selectedMember.classYear || selectedMember.major) && (
                  <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                    {selectedMember.classYear && (
                      <div>
                        <dt className="font-viga text-[0.65rem] font-black uppercase tracking-[0.2em] text-yep-black/55">
                          Class
                        </dt>
                        <dd className="font-semibold text-yep-black">
                          {selectedMember.classYear}
                        </dd>
                      </div>
                    )}
                    {selectedMember.major && (
                      <div>
                        <dt className="font-viga text-[0.65rem] font-black uppercase tracking-[0.2em] text-yep-black/55">
                          Concentration
                        </dt>
                        <dd className="font-semibold text-yep-black">
                          {selectedMember.major}
                        </dd>
                      </div>
                    )}
                  </dl>
                )}
                <p className="mt-5 text-base font-medium leading-relaxed text-yep-black sm:text-lg">
                  {selectedMember.blurb}
                </p>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-yep-black underline-offset-4 hover:underline"
                  href={`mailto:${selectedMember.email}`}
                >
                  ✉ {selectedMember.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

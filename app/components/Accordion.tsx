"use client";

import { useState, useRef } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-[#0f0f2d]">
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="font-viga flex w-full items-center justify-between bg-[#0f0f2d] px-6 py-5 text-left text-xl font-black uppercase tracking-wide text-[#FFDE7C] transition hover:bg-[#1a2054]"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span
          className={`ml-4 shrink-0 text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 500}px` : "0px",
        }}
      >
        <div ref={contentRef} className="bg-[#0f0f2d]/5 px-6 py-5 text-sm leading-relaxed text-[#0f0f2d]">
          {content}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: AccordionItemProps[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <AccordionItem key={item.title} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-yep-black">
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="font-viga flex w-full items-center justify-between bg-yep-black px-6 py-5 text-left text-xl font-black uppercase tracking-wide text-yep-yellow transition hover:bg-yep-blue"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span
          aria-hidden="true"
          className={`ml-4 shrink-0 text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-yep-black/5 px-6 py-5 text-sm leading-relaxed text-yep-black">
            {content}
          </div>
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

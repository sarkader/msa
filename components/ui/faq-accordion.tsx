"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((faq, i) => (
        <div
          key={i}
          className="bg-white border border-[#E6EAF0] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#0B1220] hover:bg-[#F8FAFC] transition-colors"
          >
            <span>{faq.q}</span>
            <svg
              className={`w-5 h-5 text-[#5B6473] transition-transform flex-shrink-0 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-6 text-[#5B6473] leading-relaxed">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}



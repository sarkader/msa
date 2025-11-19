type FAQItem = {
  q: string;
  a: string;
};

export function FAQOpen({ items }: { items: FAQItem[] }) {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {items.map((faq, i) => (
        <div
          key={i}
          className="bg-white border border-[#E6EAF0] rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-[#0B1220] mb-4">
            {faq.q}
          </h3>
          <p className="text-[#5B6473] leading-relaxed">{faq.a}</p>
        </div>
      ))}
    </div>
  );
}


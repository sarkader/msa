import Link from "next/link";
import SectionHeader from "@/components/ui/section-header";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="section-gap-xl">
        <div className="container-section px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Results"
            title="Case Studies"
            description="Real results from Muslim founders we've partnered with to scale their businesses."
            className="mb-16 text-center"
            align="center"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="group w-full max-w-[400px] mx-auto md:mx-0 p-6 bg-white border border-[rgba(17,17,17,0.08)] rounded-lg transition-safe hover:-translate-y-2 hover:shadow-lg hover:border-[#0F766E]"
              >
                {/* Placeholder for image */}
                <div className="w-full h-48 bg-[#e5e5e5] rounded-lg mb-4" aria-hidden="true" />

                <h3 className="text-xl font-semibold text-[#111111] mb-2">{study.name}</h3>
                <p className="text-lg font-medium text-[#111111] mb-3">{study.headline}</p>
                <p className="text-base leading-relaxed text-[#525252] mb-6">{study.summary}</p>

                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center text-sm font-medium text-[#0F766E] hover:text-[#0d6361] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:ring-offset-white rounded transition-safe"
                >
                  View case study →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import SectionHeader from "@/components/ui/section-header";
import { caseStudies } from "@/data/case-studies";

const caseStudyImages = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <section className="section-gap-xxl">
        <div className="container-section px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal mb-16 text-center">
            <SectionHeader
              eyebrow="Results"
              title="Case Studies"
              description="Real results from Muslim founders we've partnered with to scale their businesses."
              align="center"
            />
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => {
              const imageUrl =
                caseStudyImages[index < caseStudyImages.length ? index : 0] ??
                caseStudyImages[0] ??
                "";
              return (
                <Reveal key={study.slug} className="reveal">
                  <article className="group w-full max-w-[400px] mx-auto md:mx-0 bg-white border border-[#EDEDED] rounded-lg transition-safe hover:-translate-y-[6px] hover:shadow-lg hover:border-[#0A0A0A] overflow-hidden">
                    <div className="relative w-full h-48 bg-[#e5e5e5]">
                      <Image
                        src={imageUrl}
                        alt={`${study.name} case study`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">{study.name}</h3>
                      <p className="text-lg font-medium text-[#0A0A0A] mb-3">{study.headline}</p>
                      <p className="text-base leading-relaxed text-[#6B6B6B] mb-6">
                        {study.summary}
                      </p>

                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center text-sm font-medium text-[#0F766E] hover:text-[#0d6361] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:ring-offset-white rounded transition-safe"
                      >
                        View case study →
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

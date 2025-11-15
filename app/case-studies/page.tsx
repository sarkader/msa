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
    <div className="min-h-screen bg-[#F7F5F2]">
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

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => {
              const imageUrl =
                caseStudyImages[index < caseStudyImages.length ? index : 0] ??
                caseStudyImages[0] ??
                "";
              return (
                <Reveal key={study.slug} className="reveal">
                  <article className="group w-full bg-white border border-[#E8E6E3] rounded-xl transition-safe hover:-translate-y-[6px] hover:shadow-lg hover:border-[#111111] overflow-hidden">
                    <div className="relative w-full aspect-[4/3] bg-[#e5e5e5] overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={`${study.name} case study`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-[#111111] mb-2">{study.name}</h3>
                      <p className="text-xl font-medium text-[#111111] mb-3">{study.headline}</p>
                      <p className="text-base leading-relaxed text-[#5F5F5F] mb-6">
                        {study.summary}
                      </p>

                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center text-sm font-medium text-[#111111] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white rounded transition-colors"
                      >
                        View playbook →
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

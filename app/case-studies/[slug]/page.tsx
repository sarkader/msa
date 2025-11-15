import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";

type Props = {
  params: Promise<{ slug: string }>;
};

const caseStudyImages = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
];

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const imageIndex = caseStudies.findIndex((s) => s.slug === slug);
  const headerImage =
    caseStudyImages[imageIndex >= 0 && imageIndex < caseStudyImages.length ? imageIndex : 0] ??
    caseStudyImages[0] ??
    "";

  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      {/* Hero with header image */}
      <section className="relative section-gap-xxl border-b border-[#E8E6E3] overflow-hidden">
        {/* Wide header image with mask and capped height */}
        <div
          className="absolute inset-0 -z-10 opacity-30 h-[400px] md:h-[500px] overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src={headerImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 80%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 80%)",
            }}
            priority
            aria-hidden="true"
          />
        </div>

        <div className="container-tight relative z-10 px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-medium text-[#5F5F5F] hover:text-[#111111] mb-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white rounded transition-safe"
          >
            ← Back to case studies
          </Link>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Reveal className="reveal max-w-3xl">
              <p className="eyebrow mb-4 text-[#5F5F5F]">{study.offerType}</p>
              <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-6">
                {study.headline}
              </h1>
              <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#5F5F5F] mb-4">
                {study.summary}
              </p>
              <p className="text-base leading-relaxed text-[#5F5F5F]">
                Here&apos;s how we worked together to achieve these results—the systems, strategies,
                and shifts that moved the needle.
              </p>
            </Reveal>
            {/* Avatar placeholder - right aligned on desktop */}
            <div className="hidden md:block order-last md:order-first">
              <Reveal className="reveal">
                <div className="relative w-24 h-24 mx-auto md:mx-0 rounded-full border-4 border-white shadow-md overflow-hidden bg-[#e5e5e5]">
                  <Image
                    src={headerImage}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="section-gap-xxl border-b border-[#E8E6E3] bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal mb-12">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111]">
              Snapshot
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal className="reveal">
              <div>
                <p className="text-sm font-medium text-[#5F5F5F] mb-2 uppercase tracking-wide">
                  Before
                </p>
                <p className="text-3xl font-semibold text-[#111111]">{study.metrics.before}</p>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div>
                <p className="text-sm font-medium text-[#5F5F5F] mb-2 uppercase tracking-wide">
                  After
                </p>
                <p className="text-3xl font-semibold text-[#111111]">{study.metrics.after}</p>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div>
                <p className="text-sm font-medium text-[#5F5F5F] mb-2 uppercase tracking-wide">
                  Timeline
                </p>
                <p className="text-3xl font-semibold text-[#111111]">{study.metrics.timeline}</p>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div>
                <p className="text-sm font-medium text-[#5F5F5F] mb-2 uppercase tracking-wide">
                  ROI
                </p>
                <p className="text-3xl font-semibold text-[#111111]">{study.metrics.roi}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Levers */}
      <section className="section-gap-xxl border-b border-[#E8E6E3] bg-[#F7F5F2]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal mb-12">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111]">
              Key Levers
            </h2>
          </Reveal>

          <ul className="space-y-4 max-w-3xl">
            {study.levers.map((lever) => (
              <Reveal key={lever} className="reveal">
                <li className="flex items-start gap-4">
                  <span className="text-[#111111] mt-2 flex-shrink-0" aria-hidden="true">
                    •
                  </span>
                  <span className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#111111]">
                    {lever}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-gap-xxl border-b border-[#E8E6E3] bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal max-w-3xl mx-auto">
            <blockquote>
              <p className="text-[clamp(1.5rem,3vw,2rem)] leading-relaxed text-[#111111] mb-6 font-medium">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <footer className="text-lg text-[#5F5F5F]">
                —{" "}
                <cite className="not-italic font-semibold text-[#111111]">
                  {study.testimonial.author}
                </cite>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gap-xxl bg-[#F7F5F2]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal max-w-2xl mx-auto text-center bg-white rounded-2xl p-12 border border-[#E8E6E3] shadow-lg">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-6">
              Ready to scale your business?
            </h2>
            <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#5F5F5F] mb-10">
              Apply now and let&apos;s double your revenue together.
            </p>
            <Button href="/book" variant="primary">
              Book Call
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

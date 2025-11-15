import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import Sparkline from "@/components/ui/sparkline";
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

  const gallery = study.gallery ?? [];
  const avatarImage = headerImage; // Use header image as avatar placeholder
  const timelineData = study.timeline.map((item) => item.revenue);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero with full-bleed image */}
      <section className="relative section-gap-xxl border-b border-[#E6EAF0] overflow-hidden">
        {/* Full-bleed header image with capped height and masked gradient */}
        <div
          className="absolute inset-0 -z-10 h-[240px] md:h-[500px] overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src={headerImage}
            alt=""
            width={1200}
            height={500}
            sizes="100vw"
            className="w-full h-full object-cover"
            style={{
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 70%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 70%)",
            }}
            priority
            aria-hidden="true"
          />
        </div>

        <div className="container-tight relative z-10 px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-medium text-[#5B6473] hover:text-[#0B1220] hover:underline hover:decoration-[#1E3A8A] mb-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A8B4E6] focus:ring-offset-white rounded transition-safe"
          >
            ← Back to case studies
          </Link>

          <Reveal className="reveal max-w-3xl">
            <p className="eyebrow mb-4">{study.offerType}</p>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-tight tracking-tight text-[#0B1220] mb-6">
              {study.headline}
            </h1>
            <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#5B6473]">
              {study.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main content with sticky CTA aside */}
      <div className="container-tight px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 py-12">
          {/* Main content (3 columns) */}
          <div className="lg:col-span-3 space-y-16">
            {/* Snapshot */}
            <section className="border-b border-[#E6EAF0] pb-16">
              <Reveal className="reveal mb-12">
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#0B1220]">
                  Snapshot
                </h2>
              </Reveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Reveal className="reveal">
                  <div>
                    <p className="text-sm font-medium text-[#5B6473] mb-2 uppercase tracking-wide">
                      Before
                    </p>
                    <p className="text-3xl font-semibold text-[#0B1220]">{study.metrics.before}</p>
                  </div>
                </Reveal>
                <Reveal className="reveal">
                  <div>
                    <p className="text-sm font-medium text-[#5B6473] mb-2 uppercase tracking-wide">
                      After
                    </p>
                    <p className="text-3xl font-semibold text-[#0B1220]">{study.metrics.after}</p>
                  </div>
                </Reveal>
                <Reveal className="reveal">
                  <div>
                    <p className="text-sm font-medium text-[#5B6473] mb-2 uppercase tracking-wide">
                      Timeline
                    </p>
                    <p className="text-3xl font-semibold text-[#0B1220]">
                      {study.metrics.timeline}
                    </p>
                  </div>
                </Reveal>
                <Reveal className="reveal">
                  <div>
                    <p className="text-sm font-medium text-[#5B6473] mb-2 uppercase tracking-wide">
                      ROI
                    </p>
                    <p className="text-3xl font-semibold text-[#1E3A8A]">{study.metrics.roi}</p>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* Growth timeline */}
            <section className="border-b border-[#E6EAF0] pb-16">
              <Reveal className="reveal mb-12">
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#0B1220]">
                  Growth Timeline
                </h2>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {/* Left: Vertical timeline */}
                <div className="relative">
                  {/* Vertical line */}
                  <div
                    className="absolute left-3 top-0 bottom-0 w-px bg-[#E6EAF0]"
                    aria-hidden="true"
                  />
                  <div className="space-y-6 relative">
                    {study.timeline.map((item) => (
                      <Reveal key={`${item.date}-${item.revenue}`} className="reveal">
                        <div className="flex gap-4 min-h-[44px]">
                          {/* Timeline dot */}
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1E3A8A] border-2 border-white shadow-sm mt-1 z-10 relative" />
                          {/* Content */}
                          <div className="flex-1 pt-0">
                            <div className="flex items-baseline gap-3 mb-1">
                              <p className="text-[clamp(0.938rem,1.5vw,1.0625rem)] font-semibold text-[#0B1220]">
                                {item.date}
                              </p>
                              <p className="text-lg font-semibold text-[#1E3A8A]">
                                ${item.revenue.toLocaleString()}
                              </p>
                            </div>
                            <p className="text-[clamp(0.938rem,1.5vw,1.0625rem)] text-[#5B6473]">
                              {item.note}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>

                {/* Right: Sparkline */}
                <div className="flex items-center justify-center">
                  <Reveal className="reveal w-full max-w-md">
                    <div className="bg-white border border-[#E8E6E3] rounded-xl p-6">
                      <Sparkline
                        data={timelineData}
                        width={400}
                        height={120}
                        strokeColor="#1E3A8A"
                        strokeWidth={2}
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* What we changed */}
            <section className="border-b border-[#E6EAF0] pb-16">
              <Reveal className="reveal mb-12">
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#0B1220]">
                  What We Changed
                </h2>
              </Reveal>

              <ul className="space-y-4 max-w-3xl">
                {study.levers.map((lever) => (
                  <Reveal key={lever} className="reveal">
                    <li className="flex items-start gap-4">
                      <span className="text-[#1E3A8A] mt-2 flex-shrink-0" aria-hidden="true">
                        •
                      </span>
                      <span className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#0B1220]">
                        {lever}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </section>

            {/* Visual gallery */}
            {gallery.length > 0 && (
              <section className="border-b border-[#E6EAF0] pb-16">
                <Reveal className="reveal mb-12">
                  <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#0B1220]">
                    Visual Gallery
                  </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {gallery.map((imageUrl) => (
                    <Reveal key={imageUrl} className="reveal">
                      <div className="relative w-full aspect-[4/3] rounded-xl border border-[#E6EAF0] overflow-hidden bg-[#e5e5e5]">
                        <Image
                          src={imageUrl}
                          alt={`${study.name} gallery image`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            {/* Testimonial */}
            <section className="border-b border-[#E6EAF0] pb-16">
              <Reveal className="reveal max-w-3xl">
                <blockquote className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Avatar placeholder */}
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden bg-[#e5e5e5]">
                      <Image
                        src={avatarImage}
                        alt={study.testimonial.author}
                        fill
                        sizes="64px"
                        className="object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[clamp(1.5rem,3vw,2rem)] leading-relaxed text-[#0B1220] mb-6 font-medium">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </p>
                    <footer className="text-lg text-[#5B6473]">
                      —{" "}
                      <cite className="not-italic font-semibold text-[#0B1220]">
                        {study.testimonial.author}
                      </cite>
                    </footer>
                  </div>
                </blockquote>
              </Reveal>
            </section>
          </div>

          {/* Sticky CTA aside (1 column on desktop, hidden on mobile) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky" style={{ top: "96px" }}>
              <Reveal className="reveal">
                <div className="bg-white border border-[#E6EAF0] rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-[#0B1220] mb-4">
                    Book a call about a similar outcome
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5B6473] mb-6">
                    Let&apos;s discuss how we can help you achieve similar results.
                  </p>
                  <Button href="/book" variant="primary" className="w-full">
                    Book Call
                  </Button>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA panel (mobile and fallback) */}
      <section className="section-gap-xxl bg-white border-t border-[#E6EAF0] lg:hidden">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal max-w-2xl mx-auto text-center bg-[#F8FAFC] rounded-2xl p-12 border border-[#E6EAF0] shadow-lg">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#0B1220] mb-6">
              Book a call about a similar outcome
            </h2>
            <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#5B6473] mb-10">
              Let&apos;s discuss how we can help you achieve similar results.
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

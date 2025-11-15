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

// Gallery images (3 per case study)
const galleryImages = [
  [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  ],
  [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  ],
  [
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  ],
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

  const gallery =
    galleryImages[imageIndex >= 0 && imageIndex < galleryImages.length ? imageIndex : 0] ??
    galleryImages[0] ??
    [];
  const avatarImage = headerImage; // Use header image as avatar placeholder

  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      {/* Hero with full-bleed image */}
      <section className="relative section-gap-xxl border-b border-[#E8E6E3] overflow-hidden">
        {/* Full-bleed header image with capped height and masked gradient */}
        <div
          className="absolute inset-0 -z-10 h-[400px] md:h-[500px] overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src={headerImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
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
            className="inline-flex items-center text-sm font-medium text-[#5F5F5F] hover:text-[#111111] mb-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white rounded transition-safe"
          >
            ← Back to case studies
          </Link>

          <Reveal className="reveal max-w-3xl">
            <p className="eyebrow mb-4 text-[#5F5F5F]">{study.offerType}</p>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-6">
              {study.headline}
            </h1>
            <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#5F5F5F]">
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
            <section className="border-b border-[#E8E6E3] pb-16">
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
                    <p className="text-3xl font-semibold text-[#111111]">
                      {study.metrics.timeline}
                    </p>
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
            </section>

            {/* What we changed */}
            <section className="border-b border-[#E8E6E3] pb-16">
              <Reveal className="reveal mb-12">
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111]">
                  What We Changed
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
            </section>

            {/* Visual gallery */}
            <section className="border-b border-[#E8E6E3] pb-16">
              <Reveal className="reveal mb-12">
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111]">
                  Visual Gallery
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {gallery.map((imageUrl) => (
                  <Reveal key={imageUrl} className="reveal">
                    <div className="relative w-full aspect-[4/3] rounded-xl border border-[#E8E6E3] overflow-hidden bg-[#e5e5e5]">
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

            {/* Testimonial */}
            <section className="border-b border-[#E8E6E3] pb-16">
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
                    <p className="text-[clamp(1.5rem,3vw,2rem)] leading-relaxed text-[#111111] mb-6 font-medium">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </p>
                    <footer className="text-lg text-[#5F5F5F]">
                      —{" "}
                      <cite className="not-italic font-semibold text-[#111111]">
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
                <div className="bg-white border border-[#E8E6E3] rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-[#111111] mb-4">
                    Book a call about a similar outcome
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5F5F5F] mb-6">
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
      <section className="section-gap-xxl bg-white border-t border-[#E8E6E3] lg:hidden">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal max-w-2xl mx-auto text-center bg-[#F7F5F2] rounded-2xl p-12 border border-[#E8E6E3] shadow-lg">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-6">
              Book a call about a similar outcome
            </h2>
            <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#5F5F5F] mb-10">
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

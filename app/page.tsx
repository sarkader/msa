import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import SectionHeader from "@/components/ui/section-header";
import { caseStudies } from "@/data/case-studies";

const caseStudyImages = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
];

export default function Home() {
  // Featured case study (first one)
  const featuredStudy = caseStudies[0];
  if (!featuredStudy) {
    return null;
  }
  const featuredImage = caseStudyImages[0] ?? "";

  // More wins (remaining 2)
  const moreWins = caseStudies.slice(1);
  const moreWinsImages = caseStudyImages.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative section-gap-xxl overflow-hidden bg-[#F7F5F2]">
        {/* Premium layered gradients and geometric shapes */}
        <div className="hero-backdrop" aria-hidden="true" />

        <div className="container-tight relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <Reveal className="reveal w-full">
            <p className="eyebrow mb-4 text-[#5F5F5F] tracking-wider">Muslim Scale Accelerator</p>
            <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-semibold leading-[1.05] tracking-tight text-[#111111] mb-6 max-w-[680px] mx-auto">
              Double your revenue or your fee back.
            </h1>
            <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#5F5F5F] mb-10 max-w-[680px] mx-auto">
              We help Muslim founders grow courses, consulting, and productized services without
              noise — just systems that move revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center items-center">
              <Button href="/book" variant="primary">
                Book Call
              </Button>
              <Button href="#case-studies" variant="secondary">
                See case studies
              </Button>
            </div>
          </Reveal>

          {/* Stats row */}
          <Reveal className="reveal w-full max-w-3xl mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-[#E8E6E3]">
              <div>
                <p className="text-3xl font-semibold text-[#111111] mb-2">12+</p>
                <p className="text-sm text-[#5F5F5F]">Active Partners</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-[#a3a3a3]">•</span>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[#111111] mb-2">$50K→$110K</p>
                <p className="text-sm text-[#5F5F5F]">Largest monthly jump</p>
              </div>
              <div className="flex items-center justify-center sm:hidden">
                <span className="text-[#a3a3a3]">•</span>
              </div>
              <div className="flex items-center justify-center hidden sm:flex">
                <span className="text-[#a3a3a3]">•</span>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[#111111] mb-2">2.7×</p>
                <p className="text-sm text-[#5F5F5F]">Average ROI</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="relative py-6 md:py-8 bg-[#F7F5F2] border-t border-b border-[#E8E6E3]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
              <span className="eyebrow text-[#5F5F5F] text-sm">Proof</span>
              <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center sm:justify-end">
                <span className="text-sm md:text-base text-[#111111]">Muslim Settify 50k/mo</span>
                <span className="text-[#a3a3a3]">•</span>
                <span className="text-sm md:text-base text-[#111111]">Aqib 15k+</span>
                <span className="text-[#a3a3a3]">•</span>
                <span className="text-sm md:text-base text-[#111111]">Ustadh A. Haqqan 40k+</span>
                <span className="hidden md:inline text-[#a3a3a3]">•</span>
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-[#111111] border border-[#E8E6E3] rounded-full bg-white">
                  90‑Day Guarantee
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Case Study (Spotlight) */}
      <section id="case-studies" className="section-gap-xxl bg-white border-y border-[#E8E6E3]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Large image - left column on desktop, first on mobile */}
            <div className="order-2 md:order-1">
              <Reveal className="reveal">
                <div className="relative w-full aspect-[4/3] rounded-2xl border border-[#E8E6E3] overflow-hidden bg-[#e5e5e5]">
                  <Image
                    src={featuredImage}
                    alt={`${featuredStudy.name} case study`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                    decoding="async"
                  />
                </div>
              </Reveal>
            </div>

            {/* Content block - right column on desktop, second on mobile */}
            <div className="order-1 md:order-2">
              <Reveal className="reveal">
                <p className="eyebrow mb-4 text-[#5F5F5F]">{featuredStudy.offerType}</p>
                <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-6">
                  {featuredStudy.headline}
                </h2>

                {/* 3 KPIs in a row */}
                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-[#E8E6E3]">
                  <div>
                    <p className="text-xs font-medium text-[#5F5F5F] mb-1 uppercase tracking-wide">
                      Before
                    </p>
                    <p className="text-2xl font-semibold text-[#111111]">
                      {featuredStudy.metrics.before}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#5F5F5F] mb-1 uppercase tracking-wide">
                      After
                    </p>
                    <p className="text-2xl font-semibold text-[#111111]">
                      {featuredStudy.metrics.after}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#5F5F5F] mb-1 uppercase tracking-wide">
                      ROI
                    </p>
                    <p className="text-2xl font-semibold text-[#111111]">
                      {featuredStudy.metrics.roi}
                    </p>
                  </div>
                </div>

                {/* What changed paragraph */}
                <p className="text-lg leading-relaxed text-[#5F5F5F] mb-8">
                  {featuredStudy.summary}
                </p>

                {/* Two CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/book" variant="primary">
                    Book Call
                  </Button>
                  <Button href={`/case-studies/${featuredStudy.slug}`} variant="secondary">
                    Read Playbook
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* More Wins (2 large cards) */}
      <section className="section-gap-xxl bg-[#F7F5F2]">
        <div className="container-section px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal mb-16">
            <SectionHeader eyebrow="More Results" title="More Wins" />
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {moreWins.map((study, index) => {
              const imageUrl = moreWinsImages[index] ?? caseStudyImages[0] ?? "";
              return (
                <Reveal key={study.slug} className="reveal">
                  <article className="group w-full bg-white border border-[#E8E6E3] rounded-xl transition-safe hover:-translate-y-[6px] hover:shadow-lg hover:border-[#111111] overflow-hidden">
                    <div className="relative w-full aspect-[4/3] bg-[#e5e5e5] overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={`${study.name} case study`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-[#111111] mb-3">{study.name}</h3>
                      <p className="text-xl font-medium text-[#111111] mb-2">{study.headline}</p>
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

      {/* Guarantee */}
      <section className="section-gap-xxl bg-[#F7F5F2]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal">
            <div className="bg-white border-l-4 border-[#111111] p-12 rounded-xl shadow-xl">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-4">
                    90-Day Guarantee
                  </h2>
                </div>
                <div>
                  <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#111111]">
                    <span className="font-semibold">
                      If we don&apos;t double your revenue within 90 days,
                    </span>{" "}
                    we refund your fee. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process - Staggered two-column layout */}
      <section className="section-gap-xxl border-y border-[#E8E6E3] bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal mb-16">
            <SectionHeader eyebrow="How We Work" title="Process" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left column: steps 1 & 3 */}
            <div className="space-y-24">
              <Reveal className="reveal">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center text-white font-semibold text-base border-4 border-white shadow-md flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold text-[#111111] mb-3">Diagnose</h3>
                  <p className="text-lg leading-relaxed text-[#5F5F5F] mb-6">
                    Identify bottlenecks in your offer, messaging, and sales process.
                  </p>
                  {/* Mobile: image stacks below text */}
                  <div className="md:hidden relative w-full aspect-[4/3] max-w-[320px] mx-auto rounded-xl border border-[#E8E6E3] overflow-hidden mt-6 max-h-[260px]">
                    <Image
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
                      alt="Diagnosis process"
                      fill
                      sizes="(max-width: 768px) 320px, 0px"
                      className="object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Desktop: small supporting image */}
                  <div className="hidden md:block relative w-full aspect-[4/3] max-w-[320px] rounded-xl border border-[#E8E6E3] overflow-hidden mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
                      alt="Diagnosis process"
                      fill
                      sizes="320px"
                      className="object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal className="reveal">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center text-white font-semibold text-base border-4 border-white shadow-md flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                    Pipeline & Conversion
                  </h3>
                  <p className="text-lg leading-relaxed text-[#5F5F5F]">
                    Optimize your sales funnel to convert leads into customers.
                  </p>
                  {/* Mobile: image stacks below text */}
                  <div className="md:hidden relative w-full aspect-[4/3] max-w-[320px] mx-auto rounded-xl border border-[#E8E6E3] overflow-hidden mt-6 max-h-[260px]">
                    <Image
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
                      alt="Pipeline optimization"
                      fill
                      sizes="(max-width: 768px) 320px, 0px"
                      className="object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Desktop: small supporting image */}
                  <div className="hidden md:block relative w-full aspect-[4/3] max-w-[320px] rounded-xl border border-[#E8E6E3] overflow-hidden mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
                      alt="Pipeline optimization"
                      fill
                      sizes="320px"
                      className="object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right column: steps 2 & 4 */}
            <div className="space-y-24 mt-12 md:mt-0">
              <Reveal className="reveal">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center text-white font-semibold text-base border-4 border-white shadow-md flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold text-[#111111] mb-3">Systems</h3>
                  <p className="text-lg leading-relaxed text-[#5F5F5F] mb-6">
                    Build repeatable processes for lead generation and nurturing.
                  </p>
                  {/* Mobile: image stacks below text */}
                  <div className="md:hidden relative w-full aspect-[4/3] max-w-[320px] mx-auto rounded-xl border border-[#E8E6E3] overflow-hidden mt-6 max-h-[260px]">
                    <Image
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                      alt="Systems building"
                      fill
                      sizes="(max-width: 768px) 320px, 0px"
                      className="object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Desktop: small supporting image */}
                  <div className="hidden md:block relative w-full aspect-[4/3] max-w-[320px] rounded-xl border border-[#E8E6E3] overflow-hidden mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                      alt="Systems building"
                      fill
                      sizes="320px"
                      className="object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal className="reveal">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center text-white font-semibold text-base border-4 border-white shadow-md flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-2xl font-semibold text-[#111111] mb-3">Scale & Review</h3>
                  <p className="text-lg leading-relaxed text-[#5F5F5F]">
                    Monitor performance, iterate, and scale what works.
                  </p>
                  {/* Mobile: image stacks below text */}
                  <div className="md:hidden relative w-full aspect-[4/3] max-w-[320px] mx-auto rounded-xl border border-[#E8E6E3] overflow-hidden mt-6 max-h-[260px]">
                    <Image
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                      alt="Scale and review"
                      fill
                      sizes="(max-width: 768px) 320px, 0px"
                      className="object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Desktop: small supporting image */}
                  <div className="hidden md:block relative w-full aspect-[4/3] max-w-[320px] rounded-xl border border-[#E8E6E3] overflow-hidden mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                      alt="Scale and review"
                      fill
                      sizes="320px"
                      className="object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-gap-xxl border-y border-[#E8E6E3] bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal mb-20">
            <SectionHeader eyebrow="Questions" title="Frequently Asked Questions" />
          </Reveal>

          <dl className="space-y-0 max-w-4xl mx-auto">
            <Reveal className="reveal">
              <div className="border-t border-[#E8E6E3] first:border-t-0 pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#111111] mt-1 flex-shrink-0">
                    01
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#111111]">
                    Who is this for?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#5F5F5F]">
                  Muslim founders running courses, consulting, or productized services who want to
                  scale revenue systematically.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#E8E6E3] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#111111] mt-1 flex-shrink-0">
                    02
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#111111]">
                    Do you share pricing?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#5F5F5F]">
                  Pricing is discussed during the application process based on your current revenue
                  and growth targets.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#E8E6E3] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#111111] mt-1 flex-shrink-0">
                    03
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#111111]">
                    What do you actually do?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#5F5F5F]">
                  We diagnose bottlenecks, build scalable systems, optimize your sales pipeline, and
                  help you convert leads into customers. We partner with you through the entire
                  process.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#E8E6E3] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#111111] mt-1 flex-shrink-0">
                    04
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#111111]">
                    What&apos;s the timeline?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#5F5F5F]">
                  We work toward doubling your revenue within 90 days. If we don&apos;t achieve
                  this, we refund your fee.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#E8E6E3] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#111111] mt-1 flex-shrink-0">
                    05
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#111111]">
                    What&apos;s the commitment?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#5F5F5F]">
                  We work closely with you throughout the 90-day period. You&apos;ll need to
                  implement systems and processes we build together.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#E8E6E3] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#111111] mt-1 flex-shrink-0">
                    06
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#111111]">
                    How does the guarantee work?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#5F5F5F]">
                  If we don&apos;t double your revenue within 90 days, we refund your full fee. No
                  questions asked.
                </dd>
              </div>
            </Reveal>
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-gap-xxl overflow-hidden bg-[#111111]">
        <div className="container-tight relative z-10 px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal max-w-3xl mx-auto text-center bg-white/95 backdrop-blur-sm rounded-2xl p-16 shadow-2xl border border-white/20">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-6">
              Ready to scale?
            </h2>
            <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#5F5F5F] mb-10">
              Apply now and let&apos;s double your revenue together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book" variant="primary">
                Book Call
              </Button>
              <Button href="#case-studies" variant="secondary">
                See case studies
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

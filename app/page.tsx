import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import SectionHeader from "@/components/ui/section-header";
import Sparkline from "@/components/ui/sparkline";
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
  const featuredTimelineData = featuredStudy.timeline.map((item) => item.revenue);

  // More wins (remaining 2)
  const moreWins = caseStudies.slice(1);
  const moreWinsImages = caseStudyImages.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero - animated gradient backdrop */}
      <section className="hero-wrap">
        {/* Animated gradient backdrop - always visible */}
        <div className="hero-bg" aria-hidden="true" />

        {/* Content */}
        <div className="site-container relative z-10 flex flex-col items-center justify-center text-center">
          <Reveal className="reveal w-full">
            <p className="eyebrow mb-4 tracking-wider">Muslim Scale Accelerator</p>
            <h1 className="text-[clamp(1.75rem,6vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-[#0B1220] mb-6 max-w-[680px] mx-auto">
              Double your revenue or your fee back.
            </h1>
            <p className="text-[clamp(1rem,1.6vw,1.125rem)] leading-relaxed text-[#5B6473] mb-10 max-w-[680px] mx-auto font-medium">
              We help Muslim founders grow courses, consulting, and productized services without
              noise—just systems that move revenue.
            </p>
            <div className="flex flex-col w-full gap-3 sm:flex-row sm:w-auto sm:gap-4 sm:items-center justify-center items-stretch">
              <Button href="/book" variant="primary" size="large" fullWidth>
                Book Call
              </Button>
              <Button href="#case-studies" variant="secondary" size="large" fullWidth>
                See case studies
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results band - polished */}
      <section className="border-y border-[var(--divider)] bg-[rgba(30,64,175,0.06)]">
        <div className="site-container">
          <div className="flex flex-col items-center gap-3 py-4 sm:flex-row sm:justify-between">
            <p className="eyebrow text-[var(--accent)]">Results</p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
              <span className="inline-flex items-center rounded-full border border-[var(--accent-300)] bg-[rgba(30,64,175,0.08)] px-3 py-2 text-[var(--text)] min-h-[44px]">
                Active partners 12+
              </span>
              <span className="inline-flex items-center rounded-full border border-[var(--accent-300)] bg-[rgba(30,64,175,0.08)] px-3 py-2 text-[var(--text)] min-h-[44px]">
                Highest monthly jump $50k → $110k
              </span>
              <span className="inline-flex items-center rounded-full border border-[var(--accent-300)] bg-[rgba(30,64,175,0.08)] px-3 py-2 text-[var(--text)] min-h-[44px]">
                Avg ROI 2.7×
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study (Spotlight) */}
      <section id="case-studies" className="section-gap-xxl bg-white border-y border-[#E6EAF0]">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Large image - left column on desktop, first on mobile */}
            <div className="order-2 md:order-1">
              <Reveal className="reveal">
                <div className="relative w-full aspect-[4/3] rounded-2xl border border-[#E6EAF0] overflow-hidden bg-[#e5e5e5]">
                  <Image
                    src={featuredImage}
                    alt={`${featuredStudy.name} case study`}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
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
                <p className="eyebrow mb-4">{featuredStudy.offerType}</p>
                <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-tight tracking-tight text-[#0B1220] mb-6">
                  {featuredStudy.headline}
                </h2>

                {/* 3 KPIs in a row */}
                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-[#E6EAF0]">
                  <div>
                    <p className="text-xs font-medium text-[#5B6473] mb-1 uppercase tracking-wide">
                      Before
                    </p>
                    <p className="text-2xl font-semibold text-[#0B1220]">
                      {featuredStudy.metrics.before}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#5B6473] mb-1 uppercase tracking-wide">
                      After
                    </p>
                    <p className="text-2xl font-semibold text-[#0B1220]">
                      {featuredStudy.metrics.after}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#5B6473] mb-1 uppercase tracking-wide">
                      ROI
                    </p>
                    <p className="text-2xl font-semibold text-[#1E3A8A]">
                      {featuredStudy.metrics.roi}
                    </p>
                  </div>
                </div>

                {/* What changed paragraph */}
                <p className="text-lg leading-relaxed text-[#5B6473] mb-6">
                  {featuredStudy.summary}
                </p>

                {/* Sparkline preview */}
                <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-[#F8FAFC] border border-[#E6EAF0] rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <p className="text-xs font-medium text-[#5B6473] uppercase tracking-wide">
                      Growth Timeline
                    </p>
                    <p className="text-xs font-semibold text-[#1E3A8A]">
                      {featuredStudy.metrics.timeline}
                    </p>
                  </div>
                  <Sparkline
                    data={featuredTimelineData}
                    width={400}
                    height={80}
                    strokeColor="#1E3A8A"
                    strokeWidth={2}
                  />
                </div>

                {/* Two CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button href="/book" variant="primary" size="large" fullWidth>
                    Book Call
                  </Button>
                  <Button
                    href={`/case-studies/${featuredStudy.slug}`}
                    variant="secondary"
                    size="large"
                    fullWidth
                  >
                    Read Playbook
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* More Wins (2 large cards) */}
      <section aria-labelledby="more-wins" className="section-gap-xxl bg-[#F8FAFC]">
        <div className="site-container">
          <Reveal className="reveal mb-16">
            <SectionHeader eyebrow="More Results" title="More Wins" id="more-wins" />
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 items-stretch">
            {moreWins.map((study, index) => {
              const imageUrl = moreWinsImages[index] ?? caseStudyImages[0] ?? "";
              return (
                <Reveal key={study.slug} className="reveal">
                  <article className="group w-full bg-white border border-[#E6EAF0] rounded-xl hover:shadow-lg overflow-hidden">
                    <div className="relative w-full bg-[#e5e5e5] overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={`${study.name} case study`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="h-[200px] sm:h-[220px] md:h-[280px] w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 sm:p-8 lg:p-10">
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1220] mb-3">
                        {study.name}
                      </h3>
                      <p className="text-lg sm:text-xl font-medium text-[#0B1220] mb-2">
                        {study.headline}
                      </p>
                      <p className="text-base leading-relaxed text-[#5B6473] mb-6">
                        {study.summary}
                      </p>
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center text-sm font-medium text-[#0B1220] hover:underline hover:decoration-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A8B4E6] focus:ring-offset-white rounded transition-colors min-h-[44px]"
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
      <section className="section-gap-xxl bg-[#F8FAFC]">
        <div className="site-container">
          <Reveal className="reveal">
            <div className="bg-white border-l-4 border-[#1E3A8A] p-12 rounded-xl shadow-xl">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#0B1220] mb-4">
                    90-Day Guarantee
                  </h2>
                </div>
                <div>
                  <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#0B1220]">
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
      <section className="section-gap-xxl border-y border-[#E6EAF0] bg-white">
        <div className="site-container">
          <Reveal className="reveal mb-16">
            <SectionHeader eyebrow="How We Work" title="Process" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left column: steps 1 & 3 */}
            <div className="space-y-24">
              <Reveal className="reveal">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white font-semibold text-base border-4 border-white shadow-md flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0B1220] mb-3">Diagnose</h3>
                  <p className="text-lg leading-relaxed text-[#5B6473] mb-6">
                    Identify bottlenecks in your offer, messaging, and sales process.
                  </p>
                  {/* Mobile: image stacks below text */}
                  <div className="md:hidden relative w-full aspect-[4/3] max-w-[320px] mx-auto rounded-xl border border-[#E6EAF0] overflow-hidden mt-6 h-[220px]">
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
                  {/* Desktop: small supporting image */}
                  <div className="hidden md:block relative w-full aspect-[4/3] max-w-[320px] rounded-xl border border-[#E6EAF0] overflow-hidden mt-4">
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
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white font-semibold text-base border-4 border-white shadow-md flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0B1220] mb-3">
                    Pipeline & Conversion
                  </h3>
                  <p className="text-lg leading-relaxed text-[#5B6473]">
                    Optimize your sales funnel to convert leads into customers.
                  </p>
                  {/* Mobile: image stacks below text */}
                  <div className="md:hidden relative w-full aspect-[4/3] max-w-[320px] mx-auto rounded-xl border border-[#E6EAF0] overflow-hidden mt-6 h-[220px]">
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
                  {/* Desktop: small supporting image */}
                  <div className="hidden md:block relative w-full aspect-[4/3] max-w-[320px] rounded-xl border border-[#E6EAF0] overflow-hidden mt-4">
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
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white font-semibold text-base border-4 border-white shadow-md flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0B1220] mb-3">Systems</h3>
                  <p className="text-lg leading-relaxed text-[#5B6473] mb-6">
                    Build repeatable processes for lead generation and nurturing.
                  </p>
                  {/* Mobile: image stacks below text */}
                  <div className="md:hidden relative w-full aspect-[4/3] max-w-[320px] mx-auto rounded-xl border border-[#E6EAF0] overflow-hidden mt-6 h-[220px]">
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
                  {/* Desktop: small supporting image */}
                  <div className="hidden md:block relative w-full aspect-[4/3] max-w-[320px] rounded-xl border border-[#E6EAF0] overflow-hidden mt-4">
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
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white font-semibold text-base border-4 border-white shadow-md flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0B1220] mb-3">Scale & Review</h3>
                  <p className="text-lg leading-relaxed text-[#5B6473]">
                    Monitor performance, iterate, and scale what works.
                  </p>
                  {/* Mobile: image stacks below text */}
                  <div className="md:hidden relative w-full aspect-[4/3] max-w-[320px] mx-auto rounded-xl border border-[#E6EAF0] overflow-hidden mt-6 h-[220px]">
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
                  {/* Desktop: small supporting image */}
                  <div className="hidden md:block relative w-full aspect-[4/3] max-w-[320px] rounded-xl border border-[#E6EAF0] overflow-hidden mt-4">
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
      <section className="section-gap-xxl border-y border-[#E6EAF0] bg-white">
        <div className="site-container">
          <Reveal className="reveal mb-20">
            <SectionHeader eyebrow="Questions" title="Frequently Asked Questions" />
          </Reveal>

          <dl className="space-y-0 max-w-4xl mx-auto">
            <Reveal className="reveal">
              <div className="border-t border-[#E6EAF0] first:border-t-0 pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#0B1220] mt-1 flex-shrink-0">
                    01
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#0B1220]">
                    Who is this for?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#5B6473]">
                  Muslim founders running courses, consulting, or productized services who want to
                  scale revenue systematically.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#E6EAF0] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#0B1220] mt-1 flex-shrink-0">
                    02
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#0B1220]">
                    Do you share pricing?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#5B6473]">
                  Pricing is discussed during the application process based on your current revenue
                  and growth targets.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#E6EAF0] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#0B1220] mt-1 flex-shrink-0">
                    03
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#0B1220]">
                    What do you actually do?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#5B6473]">
                  We diagnose bottlenecks, build scalable systems, optimize your sales pipeline, and
                  help you convert leads into customers. We partner with you through the entire
                  process.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#E6EAF0] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#0B1220] mt-1 flex-shrink-0">
                    04
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#0B1220]">
                    What&apos;s the timeline?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#5B6473]">
                  We work toward doubling your revenue within 90 days. If we don&apos;t achieve
                  this, we refund your fee.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#E6EAF0] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#0B1220] mt-1 flex-shrink-0">
                    05
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#0B1220]">
                    What&apos;s the commitment?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#5B6473]">
                  We work closely with you throughout the 90-day period. You&apos;ll need to
                  implement systems and processes we build together.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#E6EAF0] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#0B1220] mt-1 flex-shrink-0">
                    06
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#0B1220]">
                    How does the guarantee work?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#5B6473]">
                  If we don&apos;t double your revenue within 90 days, we refund your full fee. No
                  questions asked.
                </dd>
              </div>
            </Reveal>
          </dl>
        </div>
      </section>

      {/* CTA section - mobile first */}
      <section aria-labelledby="cta" className="border-t border-[var(--divider)]">
        <div className="site-container py-12 sm:py-16">
          <p className="eyebrow text-[var(--accent)] text-center sm:text-left">Work with us</p>
          <h2
            id="cta"
            className="mt-3 text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1220]"
          >
            Ready to scale?
          </h2>
          <p className="mt-3 text-[var(--muted)] text-center sm:text-left max-w-[42ch] leading-relaxed">
            We install the systems that move revenue—offers, funnels, appointments, and follow‑up.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
            <Link
              href="/book"
              className="btn btn-primary w-full sm:w-auto text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-300)] focus-visible:ring-offset-2 rounded-full"
            >
              Book a call
            </Link>
            <Link
              href="#case-studies"
              className="btn btn-secondary w-full sm:w-auto text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-300)] focus-visible:ring-offset-2 rounded-full"
            >
              See case studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

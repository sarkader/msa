import Image from "next/image";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import SectionHeader from "@/components/ui/section-header";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative section-gap-xxl overflow-hidden bg-[#FAFAFA]">
        {/* Premium layered gradients and geometric shapes */}
        <div className="hero-backdrop" aria-hidden="true" />

        <div className="container-tight relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <Reveal className="reveal w-full">
            <p className="eyebrow mb-4 text-[#6B6B6B] tracking-wider">Muslim Scale Accelerator</p>
            <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-semibold leading-[1.05] tracking-tight text-[#0A0A0A] mb-6 max-w-[680px] mx-auto">
              Double your revenue or your fee back.
            </h1>
            <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#6B6B6B] mb-10 max-w-[680px] mx-auto">
              We partner with Muslim founders to scale offers—courses, consulting, and productized
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center items-center">
              <Button href="/apply" variant="primary">
                Book Demo
              </Button>
              <Button href="#case-studies" variant="secondary">
                View Case Studies
              </Button>
            </div>
          </Reveal>

          {/* Stats row */}
          <Reveal className="reveal w-full max-w-3xl mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-[#EDEDED]">
              <div>
                <p className="text-3xl font-semibold text-[#0A0A0A] mb-2">12+</p>
                <p className="text-sm text-[#6B6B6B]">Active Partners</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-[#a3a3a3]">•</span>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[#0A0A0A] mb-2">$50K→$110K</p>
                <p className="text-sm text-[#6B6B6B]">Largest monthly jump</p>
              </div>
              <div className="flex items-center justify-center sm:hidden">
                <span className="text-[#a3a3a3]">•</span>
              </div>
              <div className="flex items-center justify-center hidden sm:flex">
                <span className="text-[#a3a3a3]">•</span>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[#0A0A0A] mb-2">2.7×</p>
                <p className="text-sm text-[#6B6B6B]">Average ROI</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proof marquee */}
      <section className="relative py-[72px] bg-white/50 backdrop-blur-sm border-y border-[#EDEDED]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <span className="eyebrow text-[#6B6B6B] text-lg">PROOF</span>
              <span className="text-[#a3a3a3]">•</span>
              <span className="text-lg text-[#0A0A0A]">Muslim Settify → 50k/mo</span>
              <span className="text-[#a3a3a3]">•</span>
              <span className="text-lg text-[#0A0A0A]">Aqib → 15k+</span>
              <span className="text-[#a3a3a3]">•</span>
              <span className="text-lg text-[#0A0A0A]">Ustadh Abdulaziz Haqqan → 40k+</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section-gap-xxl bg-[#FAFAFA]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal">
            <div className="bg-white border-l-4 border-[#111111] p-12 rounded-lg shadow-[0_32px_64px_rgba(17,17,17,0.08)]">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#0A0A0A] mb-4">
                    90-Day Guarantee
                  </h2>
                </div>
                <div>
                  <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#0A0A0A]">
                    <span className="font-semibold">
                      If we don&apos;t achieve 2x within 90 days,
                    </span>{" "}
                    we refund your fee. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process - Two-column layout with image on right */}
      <section className="section-gap-xxl border-y border-[#EDEDED] bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal mb-16">
            <SectionHeader eyebrow="How We Work" title="Process" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Process steps - left column */}
            <div className="space-y-16">
              <Reveal className="reveal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white font-semibold text-lg border-4 border-white shadow-md flex-shrink-0">
                    1
                  </div>
                  <p className="eyebrow mb-0">DIAGNOSE</p>
                </div>
                <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-3">Diagnose</h3>
                <p className="text-lg leading-relaxed text-[#6B6B6B]">
                  Identify bottlenecks in your offer, messaging, and sales process.
                </p>
              </Reveal>

              <Reveal className="reveal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white font-semibold text-lg border-4 border-white shadow-md flex-shrink-0">
                    2
                  </div>
                  <p className="eyebrow mb-0">SYSTEMS</p>
                </div>
                <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-3">Systems</h3>
                <p className="text-lg leading-relaxed text-[#6B6B6B]">
                  Build repeatable processes for lead generation and nurturing.
                </p>
              </Reveal>

              <Reveal className="reveal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white font-semibold text-lg border-4 border-white shadow-md flex-shrink-0">
                    3
                  </div>
                  <p className="eyebrow mb-0">PIPELINE</p>
                </div>
                <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-3">
                  Pipeline & Conversion
                </h3>
                <p className="text-lg leading-relaxed text-[#6B6B6B]">
                  Optimize your sales funnel to convert leads into customers.
                </p>
              </Reveal>

              <Reveal className="reveal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white font-semibold text-lg border-4 border-white shadow-md flex-shrink-0">
                    4
                  </div>
                  <p className="eyebrow mb-0">SCALE</p>
                </div>
                <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-3">Scale & Review</h3>
                <p className="text-lg leading-relaxed text-[#6B6B6B]">
                  Monitor performance, iterate, and scale what works.
                </p>
              </Reveal>
            </div>

            {/* Supporting image - right column on desktop, stacked below on mobile */}
            <div className="order-last md:order-last">
              <Reveal className="reveal">
                <div className="relative w-full max-w-[480px] mx-auto md:mx-0 aspect-[4/3] max-h-[260px] md:max-h-none rounded-lg border border-[#EDEDED] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
                    alt="Workspace collaboration"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
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

      {/* Case Studies */}
      <section id="case-studies" className="section-gap-xxl bg-[#FAFAFA]">
        <div className="container-section px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal mb-16">
            <SectionHeader eyebrow="Results" title="Case Studies" />
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <Reveal className="reveal">
              <article className="group w-full max-w-[400px] mx-auto md:mx-0 bg-white border border-[#EDEDED] rounded-lg transition-safe hover:-translate-y-[6px] hover:shadow-lg hover:border-[#0A0A0A] overflow-hidden">
                <div className="relative w-full h-40 bg-[#e5e5e5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                    alt="Business workspace"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">Muslim Settify</h3>
                  <p className="text-lg leading-relaxed text-[#6B6B6B] mb-4">
                    50k+ monthly revenue.
                  </p>
                  <Button href="/case-studies" variant="subtle" size="default" className="text-sm">
                    View Playbook →
                  </Button>
                </div>
              </article>
            </Reveal>
            <Reveal className="reveal">
              <article className="group w-full max-w-[400px] mx-auto md:mx-0 bg-white border border-[#EDEDED] rounded-lg transition-safe hover:-translate-y-[6px] hover:shadow-lg hover:border-[#0A0A0A] overflow-hidden">
                <div className="relative w-full h-40 bg-[#e5e5e5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                    alt="Team collaboration"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">Aqib</h3>
                  <p className="text-lg leading-relaxed text-[#6B6B6B] mb-4">
                    15k+ monthly revenue.
                  </p>
                  <Button href="/case-studies" variant="subtle" size="default" className="text-sm">
                    View Playbook →
                  </Button>
                </div>
              </article>
            </Reveal>
            <Reveal className="reveal">
              <article className="group w-full max-w-[400px] mx-auto md:mx-0 bg-white border border-[#EDEDED] rounded-lg transition-safe hover:-translate-y-[6px] hover:shadow-lg hover:border-[#0A0A0A] overflow-hidden">
                <div className="relative w-full h-40 bg-[#e5e5e5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
                    alt="Professional consulting"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">
                    Ustadh Abdulaziz Haqqan
                  </h3>
                  <p className="text-lg leading-relaxed text-[#6B6B6B] mb-4">
                    40k+ monthly revenue.
                  </p>
                  <Button href="/case-studies" variant="subtle" size="default" className="text-sm">
                    View Playbook →
                  </Button>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-gap-xxl border-y border-[#EDEDED] bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal mb-20">
            <SectionHeader eyebrow="Questions" title="Frequently Asked Questions" />
          </Reveal>

          <dl className="space-y-0 max-w-4xl mx-auto">
            <Reveal className="reveal">
              <div className="border-t border-[#EDEDED] first:border-t-0 pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#0A0A0A] mt-1 flex-shrink-0">
                    01
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#0A0A0A]">
                    Who is this for?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#6B6B6B]">
                  Muslim founders running courses, consulting, or productized services who want to
                  scale revenue systematically.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#EDEDED] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#0A0A0A] mt-1 flex-shrink-0">
                    02
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#0A0A0A]">
                    Do you share pricing?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#6B6B6B]">
                  Pricing is discussed during the application process based on your current revenue
                  and growth targets.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#EDEDED] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#0A0A0A] mt-1 flex-shrink-0">
                    03
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#0A0A0A]">
                    What do you actually do?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#6B6B6B]">
                  We diagnose bottlenecks, build scalable systems, optimize your sales pipeline, and
                  help you convert leads into customers. We partner with you through the entire
                  process.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#EDEDED] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#0A0A0A] mt-1 flex-shrink-0">
                    04
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#0A0A0A]">
                    What&apos;s the timeline?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#6B6B6B]">
                  We work toward doubling your revenue within 90 days. If we don&apos;t achieve
                  this, we refund your fee.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#EDEDED] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#0A0A0A] mt-1 flex-shrink-0">
                    05
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#0A0A0A]">
                    What&apos;s the commitment?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#6B6B6B]">
                  We work closely with you throughout the 90-day period. You&apos;ll need to
                  implement systems and processes we build together.
                </dd>
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="border-t border-[#EDEDED] pt-10 pb-10">
                <dt className="flex items-start gap-6 mb-4">
                  <span className="text-2xl font-semibold text-[#0A0A0A] mt-1 flex-shrink-0">
                    06
                  </span>
                  <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#0A0A0A]">
                    How does the guarantee work?
                  </span>
                </dt>
                <dd className="ml-14 text-lg leading-relaxed text-[#6B6B6B]">
                  If we don&apos;t double your revenue within 90 days, we refund your full fee. No
                  questions asked.
                </dd>
              </div>
            </Reveal>
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-gap-xxl overflow-hidden bg-[#0A0A0A]">
        <div className="container-tight relative z-10 px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal max-w-3xl mx-auto text-center bg-white/95 backdrop-blur-sm rounded-2xl p-16 shadow-2xl border border-white/20">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#0A0A0A] mb-6">
              Ready to scale?
            </h2>
            <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#6B6B6B] mb-10">
              Apply now and let&apos;s double your revenue together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply" variant="primary" className="emerald-accent">
                Book Demo
              </Button>
              <Button href="#case-studies" variant="secondary">
                View Case Studies
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Button from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative section-gap-xl overflow-hidden bg-[#faf8f5]">
        {/* Gradient background with layered radial-gradients + noise for zero CLS */}
        <div
          className="absolute inset-0 -z-10 opacity-90"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(252, 228, 236, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(255, 243, 224, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 50% 20%, rgba(243, 229, 245, 0.8) 0%, transparent 50%),
              linear-gradient(135deg, #fce4ec 0%, #fff3e0 25%, #f3e5f5 50%, #e8f5e9 100%)
            `,
            filter: "blur(28px)",
            transform: "scale(1.1)",
          }}
          aria-hidden="true"
        />

        <div className="container-tight relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <p className="eyebrow mb-4 text-[#525252] tracking-wider">Muslim Scale Accelerator</p>
          <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-semibold leading-[1.05] tracking-tight text-[#111111] mb-6 max-w-[680px]">
            Double your revenue or your fee back.
          </h1>
          <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#525252] mb-10 max-w-[680px]">
            We partner with Muslim founders to scale offers—courses, consulting, and productized
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button href="/apply" variant="primary">
              Book Demo
            </Button>
            <Button href="#case-studies" variant="secondary">
              View Case Studies
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-[rgba(17,17,17,0.08)] w-full max-w-3xl">
            <div>
              <p className="text-3xl font-semibold text-[#111111] mb-2">12+</p>
              <p className="text-sm text-[#525252]">Active Partners</p>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-[#a3a3a3]">•</span>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#111111] mb-2">$50K→$110K</p>
              <p className="text-sm text-[#525252]">Largest monthly jump</p>
            </div>
            <div className="flex items-center justify-center sm:hidden">
              <span className="text-[#a3a3a3]">•</span>
            </div>
            <div className="flex items-center justify-center hidden sm:flex">
              <span className="text-[#a3a3a3]">•</span>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#111111] mb-2">2.7×</p>
              <p className="text-sm text-[#525252]">Average ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof marquee */}
      <section className="relative py-[72px] bg-white/50 backdrop-blur-sm">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <span className="eyebrow text-[#525252] text-lg">PROOF</span>
            <span className="text-[#a3a3a3]">•</span>
            <span className="text-lg text-[#111111]">Muslim Settify → 50k/mo</span>
            <span className="text-[#a3a3a3]">•</span>
            <span className="text-lg text-[#111111]">Aqib → 15k+</span>
            <span className="text-[#a3a3a3]">•</span>
            <span className="text-lg text-[#111111]">Ustadh Abdulaziz Haqqan → 40k+</span>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section-gap-xl bg-[#faf8f5]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-[#0F766E] p-12 rounded-lg shadow-[0_32px_64px_rgba(15,118,110,0.08)]">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-4">
                  90-Day Guarantee
                </h2>
              </div>
              <div>
                <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#111111]">
                  <span className="font-semibold">If we don&apos;t achieve 2x within 90 days,</span>{" "}
                  we refund your fee. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Zig-zag layout */}
      <section className="section-gap-xl border-y border-[rgba(17,17,17,0.08)] bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How We Work" title="Process" className="mb-20" />

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical timeline line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px bg-[rgba(17,17,17,0.08)] hidden md:block transform -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="space-y-24">
              {/* Step 1 - Left */}
              <div className="relative flex items-center gap-8 md:flex-row">
                <div className="md:w-1/2 md:pr-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#0F766E] flex items-center justify-center text-white font-semibold text-lg border-4 border-white shadow-md">
                      1
                    </div>
                    <p className="eyebrow mb-0">DIAGNOSE</p>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#111111] mb-3">Diagnose</h3>
                  <p className="text-lg leading-relaxed text-[#525252]">
                    Identify bottlenecks in your offer, messaging, and sales process.
                  </p>
                </div>
                <div className="md:w-1/2 hidden md:block" />
              </div>

              {/* Step 2 - Right */}
              <div className="relative flex items-center gap-8 md:flex-row">
                <div className="md:w-1/2 hidden md:block" />
                <div className="md:w-1/2 md:pl-12">
                  <div className="flex items-center gap-4 mb-4 justify-end md:justify-start">
                    <p className="eyebrow mb-0">SYSTEMS</p>
                    <div className="w-12 h-12 rounded-full bg-[#0F766E] flex items-center justify-center text-white font-semibold text-lg border-4 border-white shadow-md">
                      2
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#111111] mb-3">Systems</h3>
                  <p className="text-lg leading-relaxed text-[#525252]">
                    Build repeatable processes for lead generation and nurturing.
                  </p>
                </div>
              </div>

              {/* Step 3 - Left */}
              <div className="relative flex items-center gap-8 md:flex-row">
                <div className="md:w-1/2 md:pr-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#0F766E] flex items-center justify-center text-white font-semibold text-lg border-4 border-white shadow-md">
                      3
                    </div>
                    <p className="eyebrow mb-0">PIPELINE</p>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                    Pipeline & Conversion
                  </h3>
                  <p className="text-lg leading-relaxed text-[#525252]">
                    Optimize your sales funnel to convert leads into customers.
                  </p>
                </div>
                <div className="md:w-1/2 hidden md:block" />
              </div>

              {/* Step 4 - Right */}
              <div className="relative flex items-center gap-8 md:flex-row">
                <div className="md:w-1/2 hidden md:block" />
                <div className="md:w-1/2 md:pl-12">
                  <div className="flex items-center gap-4 mb-4 justify-end md:justify-start">
                    <p className="eyebrow mb-0">SCALE</p>
                    <div className="w-12 h-12 rounded-full bg-[#0F766E] flex items-center justify-center text-white font-semibold text-lg border-4 border-white shadow-md">
                      4
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#111111] mb-3">Scale & Review</h3>
                  <p className="text-lg leading-relaxed text-[#525252]">
                    Monitor performance, iterate, and scale what works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section-gap-xl bg-[#faf8f5]">
        <div className="container-section px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Results" title="Case Studies" className="mb-16" />

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <article className="group w-full max-w-[400px] mx-auto md:mx-0 bg-white border border-[rgba(17,17,17,0.08)] rounded-lg transition-safe hover:-translate-y-2 hover:shadow-lg hover:border-[#0F766E] overflow-hidden">
              <div className="relative w-full h-48 bg-[#e5e5e5]">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                  alt="Business workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#111111] mb-3">Muslim Settify</h3>
                <p className="text-lg leading-relaxed text-[#525252] mb-4">50k+ monthly revenue.</p>
                <Button href="/case-studies" variant="subtle" size="default" className="text-sm">
                  View Playbook →
                </Button>
              </div>
            </article>
            <article className="group w-full max-w-[400px] mx-auto md:mx-0 bg-white border border-[rgba(17,17,17,0.08)] rounded-lg transition-safe hover:-translate-y-2 hover:shadow-lg hover:border-[#0F766E] overflow-hidden">
              <div className="relative w-full h-48 bg-[#e5e5e5]">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  alt="Team collaboration"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#111111] mb-3">Aqib</h3>
                <p className="text-lg leading-relaxed text-[#525252] mb-4">15k+ monthly revenue.</p>
                <Button href="/case-studies" variant="subtle" size="default" className="text-sm">
                  View Playbook →
                </Button>
              </div>
            </article>
            <article className="group w-full max-w-[400px] mx-auto md:mx-0 bg-white border border-[rgba(17,17,17,0.08)] rounded-lg transition-safe hover:-translate-y-2 hover:shadow-lg hover:border-[#0F766E] overflow-hidden">
              <div className="relative w-full h-48 bg-[#e5e5e5]">
                <Image
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
                  alt="Professional consulting"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#111111] mb-3">
                  Ustadh Abdulaziz Haqqan
                </h3>
                <p className="text-lg leading-relaxed text-[#525252] mb-4">40k+ monthly revenue.</p>
                <Button href="/case-studies" variant="subtle" size="default" className="text-sm">
                  View Playbook →
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-gap-xl border-y border-[rgba(17,17,17,0.08)] bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Questions" title="Frequently Asked Questions" className="mb-20" />

          <dl className="space-y-0 max-w-4xl mx-auto">
            <div className="border-t border-[rgba(17,17,17,0.08)] first:border-t-0 pt-10 pb-10">
              <dt className="flex items-start gap-6 mb-4">
                <span className="text-2xl font-semibold text-[#0F766E] mt-1 flex-shrink-0">01</span>
                <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#111111]">
                  Who is this for?
                </span>
              </dt>
              <dd className="ml-14 text-lg leading-relaxed text-[#525252]">
                Muslim founders running courses, consulting, or productized services who want to
                scale revenue systematically.
              </dd>
            </div>
            <div className="border-t border-[rgba(17,17,17,0.08)] pt-10 pb-10">
              <dt className="flex items-start gap-6 mb-4">
                <span className="text-2xl font-semibold text-[#0F766E] mt-1 flex-shrink-0">02</span>
                <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#111111]">
                  Do you share pricing?
                </span>
              </dt>
              <dd className="ml-14 text-lg leading-relaxed text-[#525252]">
                Pricing is discussed during the application process based on your current revenue
                and growth targets.
              </dd>
            </div>
            <div className="border-t border-[rgba(17,17,17,0.08)] pt-10 pb-10">
              <dt className="flex items-start gap-6 mb-4">
                <span className="text-2xl font-semibold text-[#0F766E] mt-1 flex-shrink-0">03</span>
                <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#111111]">
                  What do you actually do?
                </span>
              </dt>
              <dd className="ml-14 text-lg leading-relaxed text-[#525252]">
                We diagnose bottlenecks, build scalable systems, optimize your sales pipeline, and
                help you convert leads into customers. We partner with you through the entire
                process.
              </dd>
            </div>
            <div className="border-t border-[rgba(17,17,17,0.08)] pt-10 pb-10">
              <dt className="flex items-start gap-6 mb-4">
                <span className="text-2xl font-semibold text-[#0F766E] mt-1 flex-shrink-0">04</span>
                <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#111111]">
                  What&apos;s the timeline?
                </span>
              </dt>
              <dd className="ml-14 text-lg leading-relaxed text-[#525252]">
                We work toward doubling your revenue within 90 days. If we don&apos;t achieve this,
                we refund your fee.
              </dd>
            </div>
            <div className="border-t border-[rgba(17,17,17,0.08)] pt-10 pb-10">
              <dt className="flex items-start gap-6 mb-4">
                <span className="text-2xl font-semibold text-[#0F766E] mt-1 flex-shrink-0">05</span>
                <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#111111]">
                  What&apos;s the commitment?
                </span>
              </dt>
              <dd className="ml-14 text-lg leading-relaxed text-[#525252]">
                We work closely with you throughout the 90-day period. You&apos;ll need to implement
                systems and processes we build together.
              </dd>
            </div>
            <div className="border-t border-[rgba(17,17,17,0.08)] pt-10 pb-10">
              <dt className="flex items-start gap-6 mb-4">
                <span className="text-2xl font-semibold text-[#0F766E] mt-1 flex-shrink-0">06</span>
                <span className="text-[clamp(1.75rem,3vw,2rem)] font-semibold text-[#111111]">
                  How does the guarantee work?
                </span>
              </dt>
              <dd className="ml-14 text-lg leading-relaxed text-[#525252]">
                If we don&apos;t double your revenue within 90 days, we refund your full fee. No
                questions asked.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative section-gap-xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F766E 0%, rgba(15,118,110,0.4) 100%)" }}
      >
        <div className="container-tight relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-white/95 backdrop-blur-sm rounded-2xl p-16 shadow-2xl border border-white/20">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-6">
              Ready to scale?
            </h2>
            <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#525252] mb-10">
              Apply now and let&apos;s double your revenue together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply" variant="primary">
                Book Demo
              </Button>
              <Button href="#case-studies" variant="secondary">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Button from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-[#fafafa]">
        {/* Angled dark overlay block on right */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-[#1a1a1a]"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          aria-hidden="true"
        />
        {/* Thin emerald accent line */}
        <div
          className="absolute top-0 right-0 w-1/2 h-[2px] bg-[#0F766E] z-10"
          aria-hidden="true"
        />

        <div className="container-tight relative z-20 px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4 text-[#a3a3a3]">Muslim Scale Accelerator</p>
          <h1 className="text-[clamp(3rem,6vw,4.25rem)] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] mb-6 max-w-3xl">
            Double your revenue or your fee back.
          </h1>
          <p className="text-[clamp(1rem,1.3vw,1.0625rem)] leading-relaxed text-[#525252] mb-8 max-w-2xl">
            We partner with Muslim founders to scale offers—courses, consulting, and productized
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button href="/apply" variant="primary">
              Apply
            </Button>
            <Button href="#case-studies" variant="secondary">
              See case studies
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-[#e5e5e5]">
            <div>
              <p className="text-2xl font-semibold text-[#1a1a1a] mb-1">12+</p>
              <p className="text-sm text-[#525252]">Active operators</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#1a1a1a] mb-1">$35k</p>
              <p className="text-sm text-[#525252]">Highest monthly jump</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#1a1a1a] mb-1">200%</p>
              <p className="text-sm text-[#525252]">Average ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof marquee */}
      <section className="py-6 border-y border-[#e5e5e5] bg-[#fafafa]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="eyebrow text-[#525252]">Proof</span>
            <span className="text-sm text-[#a3a3a3]">•</span>
            <span className="text-sm text-[#525252]">Muslim Settify → 50k/mo</span>
            <span className="text-sm text-[#a3a3a3]">•</span>
            <span className="text-sm text-[#525252]">Aqib → 15k+</span>
            <span className="text-sm text-[#a3a3a3]">•</span>
            <span className="text-sm text-[#525252]">Ustadh Abdulaziz Haqqan → 40k+</span>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-[#0F766E] p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold leading-tight tracking-tight text-[#1a1a1a] mb-4">
                  Guarantee
                </h2>
              </div>
              <div>
                <p className="text-[clamp(1rem,1.3vw,1.0625rem)] leading-relaxed text-[#1a1a1a]">
                  <span className="font-semibold">If we don&apos;t achieve 2x within 90 days,</span>{" "}
                  we refund your fee. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-y border-[#e5e5e5] bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How We Work" title="Process" className="mb-16" />

          <div className="relative max-w-3xl">
            {/* Vertical timeline divider */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#e5e5e5]" aria-hidden="true" />

            <ol className="space-y-0">
              <li className="relative pl-12 pb-16 last:pb-0">
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#0F766E] border-4 border-white" />
                <p className="eyebrow mb-2">01</p>
                <h3 className="text-base font-medium text-[#1a1a1a] mb-2">Diagnose</h3>
                <p className="text-sm leading-relaxed text-[#525252]">
                  Identify bottlenecks in your offer, messaging, and sales process.
                </p>
              </li>
              <li className="relative pl-12 pb-16 last:pb-0">
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#0F766E] border-4 border-white" />
                <p className="eyebrow mb-2">02</p>
                <h3 className="text-base font-medium text-[#1a1a1a] mb-2">Systems</h3>
                <p className="text-sm leading-relaxed text-[#525252]">
                  Build repeatable processes for lead generation and nurturing.
                </p>
              </li>
              <li className="relative pl-12 pb-16 last:pb-0">
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#0F766E] border-4 border-white" />
                <p className="eyebrow mb-2">03</p>
                <h3 className="text-base font-medium text-[#1a1a1a] mb-2">Pipeline & Conversion</h3>
                <p className="text-sm leading-relaxed text-[#525252]">
                  Optimize your sales funnel to convert leads into customers.
                </p>
              </li>
              <li className="relative pl-12 pb-16 last:pb-0">
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#0F766E] border-4 border-white" />
                <p className="eyebrow mb-2">04</p>
                <h3 className="text-base font-medium text-[#1a1a1a] mb-2">Scale & Review</h3>
                <p className="text-sm leading-relaxed text-[#525252]">
                  Monitor performance, iterate, and scale what works.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-[#fafafa]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Results" title="Case Studies" className="mb-12" />

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <article className="group p-6 bg-white border border-[#e5e5e5] rounded-lg transition-safe hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-base font-medium text-[#1a1a1a] mb-2">Muslim Settify</h3>
              <p className="text-sm leading-relaxed text-[#525252]">50k+ monthly revenue.</p>
            </article>
            <article className="group p-6 bg-white border border-[#e5e5e5] rounded-lg transition-safe hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-base font-medium text-[#1a1a1a] mb-2">Aqib</h3>
              <p className="text-sm leading-relaxed text-[#525252]">15k+ monthly revenue.</p>
            </article>
            <article className="group p-6 bg-white border border-[#e5e5e5] rounded-lg transition-safe hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-base font-medium text-[#1a1a1a] mb-2">Ustadh Abdulaziz Haqqan</h3>
              <p className="text-sm leading-relaxed text-[#525252]">40k+ monthly revenue.</p>
            </article>
          </div>

          <Button href="/case-studies" variant="subtle">
            View all case studies →
          </Button>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 border-y border-[#e5e5e5] bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Questions" title="Frequently Asked Questions" className="mb-12" />

          <dl className="space-y-0 max-w-3xl">
            <div className="border-t border-[#e5e5e5] first:border-t-0 pt-8 pb-8">
              <dt className="flex items-start gap-4 mb-3">
                <span className="text-sm font-semibold text-[#0F766E] mt-1 flex-shrink-0">01</span>
                <span className="text-base font-medium text-[#1a1a1a]">Who is this for?</span>
              </dt>
              <dd className="ml-8 text-sm leading-relaxed text-[#525252]">
                Muslim founders running courses, consulting, or productized services who want to
                scale revenue systematically.
              </dd>
            </div>
            <div className="border-t border-[#e5e5e5] pt-8 pb-8">
              <dt className="flex items-start gap-4 mb-3">
                <span className="text-sm font-semibold text-[#0F766E] mt-1 flex-shrink-0">02</span>
                <span className="text-base font-medium text-[#1a1a1a]">Do you share pricing?</span>
              </dt>
              <dd className="ml-8 text-sm leading-relaxed text-[#525252]">
                Pricing is discussed during the application process based on your current revenue
                and growth targets.
              </dd>
            </div>
            <div className="border-t border-[#e5e5e5] pt-8 pb-8">
              <dt className="flex items-start gap-4 mb-3">
                <span className="text-sm font-semibold text-[#0F766E] mt-1 flex-shrink-0">03</span>
                <span className="text-base font-medium text-[#1a1a1a]">
                  What do you actually do?
                </span>
              </dt>
              <dd className="ml-8 text-sm leading-relaxed text-[#525252]">
                We diagnose bottlenecks, build scalable systems, optimize your sales pipeline, and
                help you convert leads into customers. We partner with you through the entire
                process.
              </dd>
            </div>
            <div className="border-t border-[#e5e5e5] pt-8 pb-8">
              <dt className="flex items-start gap-4 mb-3">
                <span className="text-sm font-semibold text-[#0F766E] mt-1 flex-shrink-0">04</span>
                <span className="text-base font-medium text-[#1a1a1a]">
                  What&apos;s the timeline?
                </span>
              </dt>
              <dd className="ml-8 text-sm leading-relaxed text-[#525252]">
                We work toward doubling your revenue within 90 days. If we don&apos;t achieve this,
                we refund your fee.
              </dd>
            </div>
            <div className="border-t border-[#e5e5e5] pt-8 pb-8">
              <dt className="flex items-start gap-4 mb-3">
                <span className="text-sm font-semibold text-[#0F766E] mt-1 flex-shrink-0">05</span>
                <span className="text-base font-medium text-[#1a1a1a]">
                  What&apos;s the commitment?
                </span>
              </dt>
              <dd className="ml-8 text-sm leading-relaxed text-[#525252]">
                We work closely with you throughout the 90-day period. You&apos;ll need to implement
                systems and processes we build together.
              </dd>
            </div>
            <div className="border-t border-[#e5e5e5] pt-8 pb-8">
              <dt className="flex items-start gap-4 mb-3">
                <span className="text-sm font-semibold text-[#0F766E] mt-1 flex-shrink-0">06</span>
                <span className="text-base font-medium text-[#1a1a1a]">
                  How does the guarantee work?
                </span>
              </dt>
              <dd className="ml-8 text-sm leading-relaxed text-[#525252]">
                If we don&apos;t double your revenue within 90 days, we refund your full fee. No
                questions asked.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-lg p-12 border border-[#e5e5e5]">
            <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold leading-tight tracking-tight text-[#1a1a1a] mb-4">
              Ready to scale?
            </h2>
            <p className="text-[clamp(1rem,1.3vw,1.0625rem)] leading-relaxed text-[#525252] mb-8">
              Apply now and let&apos;s double your revenue together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply" variant="primary">
                Apply
              </Button>
              <Button href="#case-studies" variant="secondary">
                See case studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

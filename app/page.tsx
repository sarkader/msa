import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-tight text-[#171717] mb-4">
          Double your revenue or your fee back.
        </h1>
        <p className="text-[clamp(1rem,1.3vw,1.0625rem)] leading-relaxed text-[#525252] mb-8 max-w-2xl">
          We partner with Muslim founders to scale offers—courses, consulting, and productized
          services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium text-white bg-[#0F766E] transition-colors hover:bg-[#0d6361] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:ring-offset-white"
          >
            Apply
          </Link>
          <Link
            href="#case-studies"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium text-[#171717] border border-[#e5e5e5] transition-colors hover:border-[#0F766E] hover:text-[#0F766E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:ring-offset-white"
          >
            See case studies
          </Link>
        </div>
      </section>

      {/* Proof */}
      <section className="py-8 border-y border-[#e5e5e5]">
        <p className="text-sm text-[#525252]">
          Muslim Settify → 50k/mo. Aqib → 15k+. Ustadh Abdulaziz Haqqan → 40k+.
        </p>
      </section>

      {/* Model/Guarantee */}
      <section className="py-16 md:py-24">
        <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold leading-tight tracking-tight text-[#171717] mb-8">
          Our Model
        </h2>
        <ul className="space-y-4 max-w-2xl">
          <li className="flex items-start gap-3">
            <span className="text-[#0F766E] mt-1" aria-hidden="true">
              •
            </span>
            <span className="text-[clamp(1rem,1.3vw,1.0625rem)] leading-relaxed text-[#525252]">
              We partner with you to diagnose bottlenecks and build systems that scale.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#0F766E] mt-1" aria-hidden="true">
              •
            </span>
            <span className="text-[clamp(1rem,1.3vw,1.0625rem)] leading-relaxed text-[#525252]">
              Target: 2x revenue growth through optimized pipeline and conversion.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#0F766E] mt-1" aria-hidden="true">
              •
            </span>
            <span className="text-[clamp(1rem,1.3vw,1.0625rem)] leading-relaxed text-[#525252]">
              If we don&apos;t achieve 2x within 90 days, we refund your fee.
            </span>
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 border-y border-[#e5e5e5]">
        <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold leading-tight tracking-tight text-[#171717] mb-12">
          How We Work
        </h2>
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <li className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#0F766E]" aria-hidden="true">
              01
            </span>
            <h3 className="text-base font-medium text-[#171717]">Diagnose</h3>
            <p className="text-sm leading-relaxed text-[#525252]">
              Identify bottlenecks in your offer, messaging, and sales process.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#0F766E]" aria-hidden="true">
              02
            </span>
            <h3 className="text-base font-medium text-[#171717]">Systems</h3>
            <p className="text-sm leading-relaxed text-[#525252]">
              Build repeatable processes for lead generation and nurturing.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#0F766E]" aria-hidden="true">
              03
            </span>
            <h3 className="text-base font-medium text-[#171717]">Pipeline & Conversion</h3>
            <p className="text-sm leading-relaxed text-[#525252]">
              Optimize your sales funnel to convert leads into customers.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#0F766E]" aria-hidden="true">
              04
            </span>
            <h3 className="text-base font-medium text-[#171717]">Scale & Review</h3>
            <p className="text-sm leading-relaxed text-[#525252]">
              Monitor performance, iterate, and scale what works.
            </p>
          </li>
        </ol>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 md:py-24">
        <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold leading-tight tracking-tight text-[#171717] mb-12">
          Case Studies
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="p-6 border border-[#e5e5e5] rounded-lg">
            <h3 className="text-base font-medium text-[#171717] mb-2">Muslim Settify</h3>
            <p className="text-sm leading-relaxed text-[#525252]">50k+ monthly revenue.</p>
          </article>
          <article className="p-6 border border-[#e5e5e5] rounded-lg">
            <h3 className="text-base font-medium text-[#171717] mb-2">Aqib</h3>
            <p className="text-sm leading-relaxed text-[#525252]">15k+ monthly revenue.</p>
          </article>
          <article className="p-6 border border-[#e5e5e5] rounded-lg">
            <h3 className="text-base font-medium text-[#171717] mb-2">Ustadh Abdulaziz Haqqan</h3>
            <p className="text-sm leading-relaxed text-[#525252]">40k+ monthly revenue.</p>
          </article>
        </div>
        <div className="mt-8">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-[#0F766E] hover:text-[#0d6361] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:ring-offset-white rounded"
          >
            View all case studies →
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 border-y border-[#e5e5e5]">
        <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold leading-tight tracking-tight text-[#171717] mb-12">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-8 max-w-2xl">
          <div>
            <dt className="text-base font-medium text-[#171717] mb-2">Who is this for?</dt>
            <dd className="text-sm leading-relaxed text-[#525252]">
              Muslim founders running courses, consulting, or productized services who want to scale
              revenue systematically.
            </dd>
          </div>
          <div>
            <dt className="text-base font-medium text-[#171717] mb-2">Do you share pricing?</dt>
            <dd className="text-sm leading-relaxed text-[#525252]">
              Pricing is discussed during the application process based on your current revenue and
              growth targets.
            </dd>
          </div>
          <div>
            <dt className="text-base font-medium text-[#171717] mb-2">What do you actually do?</dt>
            <dd className="text-sm leading-relaxed text-[#525252]">
              We diagnose bottlenecks, build scalable systems, optimize your sales pipeline, and
              help you convert leads into customers. We partner with you through the entire process.
            </dd>
          </div>
          <div>
            <dt className="text-base font-medium text-[#171717] mb-2">What&apos;s the timeline?</dt>
            <dd className="text-sm leading-relaxed text-[#525252]">
              We work toward doubling your revenue within 90 days. If we don&apos;t achieve this, we
              refund your fee.
            </dd>
          </div>
          <div>
            <dt className="text-base font-medium text-[#171717] mb-2">
              What&apos;s the commitment?
            </dt>
            <dd className="text-sm leading-relaxed text-[#525252]">
              We work closely with you throughout the 90-day period. You&apos;ll need to implement
              systems and processes we build together.
            </dd>
          </div>
          <div>
            <dt className="text-base font-medium text-[#171717] mb-2">
              How does the guarantee work?
            </dt>
            <dd className="text-sm leading-relaxed text-[#525252]">
              If we don&apos;t double your revenue within 90 days, we refund your full fee. No
              questions asked.
            </dd>
          </div>
        </dl>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold leading-tight tracking-tight text-[#171717] mb-4">
            Ready to scale?
          </h2>
          <p className="text-[clamp(1rem,1.3vw,1.0625rem)] leading-relaxed text-[#525252] mb-8">
            Apply now and let&apos;s double your revenue together.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium text-white bg-[#0F766E] transition-colors hover:bg-[#0d6361] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:ring-offset-white"
          >
            Apply
          </Link>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/button";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";

type Props = {
  params: Promise<{ slug: string }>;
};

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

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="section-gap-xl border-b border-[rgba(17,17,17,0.08)]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-medium text-[#525252] hover:text-[#111111] mb-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:ring-offset-white rounded transition-safe"
          >
            ← Back to case studies
          </Link>

          <div className="max-w-3xl">
            <p className="eyebrow mb-4 text-[#525252]">{study.offerType}</p>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-6">
              {study.headline}
            </h1>
            <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#525252]">
              {study.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="section-gap-xl border-b border-[rgba(17,17,17,0.08)] bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-12">
            Snapshot
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-sm font-medium text-[#525252] mb-2 uppercase tracking-wide">
                Before
              </p>
              <p className="text-3xl font-semibold text-[#111111]">{study.metrics.before}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#525252] mb-2 uppercase tracking-wide">
                After
              </p>
              <p className="text-3xl font-semibold text-[#0F766E]">{study.metrics.after}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#525252] mb-2 uppercase tracking-wide">
                Timeline
              </p>
              <p className="text-3xl font-semibold text-[#111111]">{study.metrics.timeline}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#525252] mb-2 uppercase tracking-wide">ROI</p>
              <p className="text-3xl font-semibold text-[#0F766E]">{study.metrics.roi}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Levers */}
      <section className="section-gap-xl border-b border-[rgba(17,17,17,0.08)] bg-[#faf8f5]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-12">
            Key Levers
          </h2>

          <ul className="space-y-4 max-w-3xl">
            {study.levers.map((lever) => (
              <li key={lever} className="flex items-start gap-4">
                <span className="text-[#0F766E] mt-2 flex-shrink-0" aria-hidden="true">
                  •
                </span>
                <span className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#111111]">
                  {lever}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-gap-xl border-b border-[rgba(17,17,17,0.08)] bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-[clamp(1.5rem,3vw,2rem)] leading-relaxed text-[#111111] mb-6 font-medium">
              &ldquo;{study.testimonial.quote}&rdquo;
            </p>
            <footer className="text-lg text-[#525252]">
              —{" "}
              <cite className="not-italic font-semibold text-[#111111]">
                {study.testimonial.author}
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gap-xl bg-[#faf8f5]">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-12 border border-[rgba(17,17,17,0.08)] shadow-lg">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-6">
              Ready to scale your business?
            </h2>
            <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#525252] mb-10">
              Apply now and let&apos;s double your revenue together.
            </p>
            <Button href="/apply" variant="primary">
              Book Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

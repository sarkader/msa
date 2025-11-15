import Link from "next/link";
import CalendlyInline from "@/components/integrations/calendly-inline";
import SectionHeader from "@/components/ui/section-header";

const CALENDLY_URL = "https://calendly.com/mohammad-generista/apply-for-paid-community-aq";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      <section className="section-gap-xxl">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Schedule"
            title="Book a Demo"
            description="Select a time that works for you. We'll discuss how we can help scale your business."
            align="center"
            className="mb-12"
          />

          {/* Noscript fallback */}
          <noscript>
            <div className="bg-white border border-[#E8E6E3] rounded-xl p-8 text-center mb-8">
              <p className="text-lg text-[#5F5F5F] mb-4">
                Please enable JavaScript to view the calendar.
              </p>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium text-white bg-[#111111] hover:bg-[#000000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white shadow-sm hover:shadow-md transition-colors"
              >
                Open Calendly →
              </Link>
            </div>
          </noscript>

          {/* Calendly inline widget */}
          <div className="bg-white border border-[#E8E6E3] rounded-xl p-4 md:p-8 overflow-hidden">
            <CalendlyInline url={CALENDLY_URL} height={820} />
          </div>
        </div>
      </section>
    </div>
  );
}

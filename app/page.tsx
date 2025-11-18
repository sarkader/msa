import { Star } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";
import { AnimatedCTA } from "@/components/ui/animated-cta";
import { FAQOpen } from "@/components/ui/faq-open";
import Reveal from "@/components/ui/reveal";
import { VSLPlayer } from "@/components/ui/vsl-player";
import CalendlyInline from "@/components/integrations/calendly-inline";
import { caseStudies } from "@/data/case-studies";

export default function Home() {
  const allCaseStudies = caseStudies;
  const featuredTestimonial = allCaseStudies[0];
  const testimonialGrid = allCaseStudies;

  // Create testimonial cards with achievements
  const testimonialCards = allCaseStudies.map((study) => ({
    name: study.name,
    achievement: study.headline,
    quote: study.testimonial.quote,
    revenue: study.metrics.after,
    roi: study.metrics.roi,
    timeline: study.metrics.timeline,
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="site-container">
          <div className="max-w-5xl mx-auto text-center">
            <Reveal className="reveal">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0B1220] mb-6 leading-tight">
                Learn how to <span className="text-[#1E3A8A]">Double Your Revenue</span> with a{" "}
                <span className="text-[#1E3A8A]">Halal Business</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-[#5B6473] mb-8 max-w-3xl mx-auto leading-relaxed">
                No prior experience required. We partner with Muslim founders to scale their
                businesses—courses, consulting, and productized services.
              </p>
            </Reveal>

            <Reveal className="reveal mb-6">
              <AnimatedCTA href="#booking" variant="primary">
                Book Your Consultation
              </AnimatedCTA>
            </Reveal>

            <Reveal className="reveal">
              <div className="flex items-center justify-center gap-2 text-sm text-[#5B6473]">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] border-2 border-white"
                    />
                  ))}
                </div>
                <span className="font-medium">SPOTS ARE LIMITED</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="site-container">
          <div className="max-w-5xl mx-auto">
            <Reveal className="reveal text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-4">
                Watch How We Help Muslim Founders <span className="text-[#1E3A8A]">Scale</span>
              </h2>
              <p className="text-lg text-[#5B6473] max-w-2xl mx-auto">
                Learn how our proven system helps Muslim entrepreneurs double their revenue in 90 days
              </p>
            </Reveal>
            <Reveal className="reveal">
              <VSLPlayer
                src={process.env.NEXT_PUBLIC_VSL_VIDEO_URL || "/vsl-video.mp4"}
                poster={process.env.NEXT_PUBLIC_VSL_POSTER_URL}
                className="shadow-2xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Card */}
      <section className="py-12 md:py-16 bg-white">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <Reveal className="reveal">
              <div className="bg-white border-2 border-[#E6EAF0] rounded-2xl p-8 md:p-12 shadow-lg">
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-xl md:text-2xl font-medium text-[#0B1220] mb-6 leading-relaxed">
                  &ldquo;{featuredTestimonial?.testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-semibold text-[#0B1220] text-lg">
                      {featuredTestimonial?.testimonial.author}
                    </p>
                    <p className="text-sm text-[#5B6473] mt-1">
                      {featuredTestimonial?.headline}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-4 py-2 bg-[#F8FAFC] text-sm font-bold text-[#1E3A8A] rounded-full border border-[#E6EAF0]">
                      Win
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] text-white text-sm font-bold rounded-full shadow-sm">
                      {featuredTestimonial?.metrics.after}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Join X+ Successful Partners Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="site-container">
          <Reveal className="reveal text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-4">
              Join 12+ Successful Partners
            </h2>
            <p className="text-lg text-[#5B6473] max-w-2xl mx-auto">
              Real results from Muslim founders scaling their businesses
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonialCards.map((card, index) => (
              <Reveal key={index} className="reveal">
                <div className="bg-white border border-[#E6EAF0] rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[#5B6473] mb-4 line-clamp-4 leading-relaxed">
                    &ldquo;{card.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-[#E6EAF0]">
                    <p className="font-semibold text-[#0B1220] mb-3">{card.name}</p>
                    {/* Prominent Revenue Display */}
                    <div className="mb-3">
                      <p className="text-xs text-[#5B6473] mb-1">Revenue</p>
                      <p className="text-2xl font-bold text-[#1E3A8A] leading-tight">
                        {card.revenue}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] text-white text-xs font-bold rounded-full shadow-sm">
                        {card.roi} ROI
                      </span>
                      <span className="px-3 py-1.5 bg-[#F8FAFC] text-[#1E3A8A] text-xs font-semibold rounded-full border border-[#E6EAF0]">
                        {card.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="site-container">
          <Reveal className="reveal text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-6">
              Start Scaling <span className="text-[#1E3A8A]">Today!</span>
            </h2>
            <p className="text-lg md:text-xl text-[#5B6473] mb-8 leading-relaxed">
              Double your revenue within 90 days or get your fee back. No questions asked.
            </p>
            <AnimatedCTA href="#booking" variant="primary">
              Book Your Consultation
            </AnimatedCTA>
          </Reveal>
        </div>
      </section>

      {/* Booking Section - Moved above FAQs for priority */}
      <section id="booking" className="py-16 md:py-24 bg-white border-t border-[#E6EAF0]">
        <div className="site-container">
          <Reveal className="reveal text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-6">
              Ready to <span className="text-[#1E3A8A]">Double Your Revenue?</span>
            </h2>
            <p className="text-lg md:text-xl text-[#5B6473] mb-4 leading-relaxed">
              Book a consultation call below to discuss your business and see how we can help you scale.
            </p>
            <p className="text-base text-[#5B6473] mb-8">
              <strong className="text-[#0B1220]">How it works:</strong> Select a time that works for you, and we'll discuss your business goals, current challenges, and how our program can help you achieve 2× revenue growth. Pricing is customized based on your specific needs.
            </p>
          </Reveal>

          <Reveal className="reveal">
            <div className="max-w-4xl mx-auto">
              <CalendlyInline url="https://calendly.com/mohammad-generista/apply-for-paid-community-aq" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="site-container">
          <Reveal className="reveal text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#5B6473]">Still have questions? We&apos;ve got you covered.</p>
          </Reveal>

          <Reveal className="reveal">
            <FAQOpen
              items={[
                {
                  q: "What is revenue scaling & how does it work?",
                  a: "We partner with Muslim founders to diagnose bottlenecks, build scalable systems, optimize sales pipelines, and help convert leads into customers. We work with you through the entire process to double your revenue within 90 days.",
                },
                {
                  q: "Do I need experience?",
                  a: "No prior experience needed. We work with Muslim founders at any stage—whether you're just starting or already generating revenue. Our systems are designed to work regardless of your current level.",
                },
                {
                  q: "How much can I earn?",
                  a: "Results vary, but our partners typically see 2-3× revenue growth within 90 days. We've helped partners scale from $0 to $50k monthly, $5k to $15k+, and $10k to $40k+ in revenue.",
                },
                {
                  q: "What is the program structure?",
                  a: "We work with you for 90 days through a structured process: diagnose bottlenecks, build systems, optimize pipelines, and scale what works. You'll have direct access to our team throughout.",
                },
                {
                  q: "How long does it take to see results?",
                  a: "Most partners see initial improvements within 30 days, with significant revenue growth by 60-90 days. Our guarantee ensures you double your revenue within 90 days or get your fee back.",
                },
                {
                  q: "How much does it cost?",
                  a: "Pricing is customized based on each client's specific needs, business stage, and goals. During your consultation call, we'll discuss your situation and provide a tailored investment that aligns with your business objectives.",
                },
                {
                  q: "Is there a refund policy?",
                  a: "Yes. Our 90-day guarantee: If we don't double your revenue within 90 days, we refund your full fee. No questions asked.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import { Star, TrendingUp, Target, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";
import { AnimatedCTA } from "@/components/ui/animated-cta";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { FAQOpen } from "@/components/ui/faq-open";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
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
      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        {/* Professional gradient mesh background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-white" />
          
          {/* Professional gradient mesh orbs - 15% opacity, animated - better distribution */}
          {/* Top left corner */}
          <div className="absolute -top-20 -left-20 w-[700px] h-[700px] hero-mesh-1" style={{ background: 'radial-gradient(circle, rgba(30, 58, 138, 0.15) 0%, rgba(30, 58, 138, 0.08) 40%, transparent 70%)', filter: 'blur(120px)' }} />
          {/* Top right corner */}
          <div className="absolute -top-20 -right-20 w-[650px] h-[650px] hero-mesh-2" style={{ background: 'radial-gradient(circle, rgba(30, 64, 175, 0.15) 0%, rgba(30, 64, 175, 0.08) 40%, transparent 70%)', filter: 'blur(120px)' }} />
          {/* Center left */}
          <div className="absolute top-1/2 -left-32 w-[600px] h-[600px] hero-mesh-3" style={{ background: 'radial-gradient(circle, rgba(168, 180, 230, 0.15) 0%, rgba(168, 180, 230, 0.08) 40%, transparent 70%)', filter: 'blur(120px)' }} />
          {/* Center right */}
          <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] hero-mesh-4" style={{ background: 'radial-gradient(circle, rgba(30, 58, 138, 0.15) 0%, rgba(30, 58, 138, 0.08) 40%, transparent 70%)', filter: 'blur(120px)' }} />
          {/* Bottom left */}
          <div className="absolute -bottom-20 left-1/4 w-[550px] h-[550px] hero-mesh-5" style={{ background: 'radial-gradient(circle, rgba(168, 180, 230, 0.15) 0%, rgba(168, 180, 230, 0.08) 40%, transparent 70%)', filter: 'blur(120px)' }} />
          {/* Bottom right */}
          <div className="absolute -bottom-20 right-1/4 w-[550px] h-[550px] hero-mesh-6" style={{ background: 'radial-gradient(circle, rgba(30, 64, 175, 0.15) 0%, rgba(30, 64, 175, 0.08) 40%, transparent 70%)', filter: 'blur(120px)' }} />
          {/* Center accent */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] hero-mesh-1" style={{ background: 'radial-gradient(circle, rgba(168, 180, 230, 0.12) 0%, rgba(168, 180, 230, 0.06) 40%, transparent 70%)', filter: 'blur(100px)' }} />
        </div>
        
        {/* Smooth fade-out transition overlay to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-[1] pointer-events-none" />
        
        <div className="site-container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Reveal className="reveal">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0B1220] mb-6 leading-tight">
                Double Your Revenue in 90 Days{" "}
                <span className="text-[#1E3A8A]">Or Get Every Penny Back</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-[#5B6473] mb-6 max-w-3xl mx-auto leading-relaxed">
                We partner with Muslim founders to scale their businesses—courses, consulting, and productized services. No prior experience required.
              </p>
              {/* Guarantee Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] text-white rounded-full font-semibold text-base md:text-lg mb-8 shadow-lg">
                <span>100% Money-Back Guarantee: If we don't 2× your revenue, we refund your entire fee</span>
              </div>
            </Reveal>

            <Reveal className="reveal mb-6">
              <AnimatedCTA href="/book" variant="primary">
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
                {...(process.env.NEXT_PUBLIC_VSL_POSTER_URL && { poster: process.env.NEXT_PUBLIC_VSL_POSTER_URL })}
                className="shadow-2xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* How It Works - BentoGrid Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="site-container">
          <Reveal className="reveal text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-4">
              How We <span className="text-[#1E3A8A]">Double Your Revenue</span>
            </h2>
            <p className="text-lg text-[#5B6473] max-w-2xl mx-auto">
              Our proven 4-step process that has helped 12+ Muslim founders scale their businesses
            </p>
          </Reveal>

          <Reveal className="reveal">
            <BentoGrid
              items={[
                {
                  title: "Diagnose Bottlenecks",
                  meta: "Week 1-2",
                  description:
                    "We analyze your current business, identify revenue blockers, and map out your sales funnel to find exactly where you're losing money.",
                  icon: <Target className="w-4 h-4 text-[#1E3A8A]" />,
                  status: "Step 1",
                  tags: ["Analysis", "Audit", "Strategy"],
                  colSpan: 2,
                  hasPersistentHover: true,
                },
                {
                  title: "Build Scalable Systems",
                  meta: "Week 3-6",
                  description:
                    "We create automated systems for lead generation, conversion, and customer retention that work 24/7 without your constant input.",
                  icon: <Zap className="w-4 h-4 text-[#1E40AF]" />,
                  status: "Step 2",
                  tags: ["Automation", "Systems", "Scale"],
                },
                {
                  title: "Optimize Sales Pipeline",
                  meta: "Week 7-10",
                  description:
                    "We fine-tune your sales process, improve conversion rates, and implement proven strategies to turn more leads into paying customers.",
                  icon: <TrendingUp className="w-4 h-4 text-[#1E3A8A]" />,
                  status: "Step 3",
                  tags: ["Sales", "Conversion", "Growth"],
                  colSpan: 2,
                },
                {
                  title: "Scale & Guarantee Results",
                  meta: "Week 11-12",
                  description:
                    "We scale what works and ensure you hit 2× revenue. If we don't deliver, you get 100% of your fee back—no questions asked.",
                  icon: <CheckCircle className="w-4 h-4 text-[#1E40AF]" />,
                  status: "Step 4",
                  tags: ["Scale", "Guarantee", "Results"],
                },
              ]}
            />
          </Reveal>
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

      {/* Partners/Trust Section - InfiniteSlider */}
      <section className="py-12 md:py-16 bg-white border-t border-[#E6EAF0] relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Base gradient layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC]"></div>
          
          {/* Animated gradient overlays */}
          <div className="absolute inset-0 opacity-40 animate-gradient-shift">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#1E3A8A]/8 to-transparent"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-[#1E40AF]/8 to-transparent"></div>
          </div>
          
          {/* Floating orbs */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#1E3A8A]/12 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#1E40AF]/12 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-[#A8B4E6]/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '22s' }}></div>
          </div>
          
          {/* Subtle mesh pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(30, 58, 138, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)`,
            backgroundSize: '100% 100%',
          }}></div>
        </div>
        <div className="group relative m-auto max-w-6xl px-6 z-10">
          <div className="flex flex-col items-center md:flex-row md:items-center md:h-[72px] md:min-h-[72px] md:max-h-[72px] md:overflow-hidden" style={{ contain: "layout style", transform: "translateZ(0)", position: "relative", top: 0, left: 0, right: 0, alignContent: "stretch" }}>
            <div className="md:max-w-44 md:border-r md:pr-6 md:h-full md:flex md:items-center md:shrink-0" style={{ alignSelf: "stretch" }}>
              <p className="text-end text-sm text-[#5B6473]">Trusted by successful founders</p>
            </div>
            <div className="relative md:w-[calc(100%-11rem)] h-[60px] md:h-[72px] flex items-center w-full md:shrink-0" style={{ contain: "layout style", transform: "translateZ(0)", alignSelf: "stretch", top: 0 }}>
              <div className="w-full h-full" style={{ transform: "translateZ(0)", willChange: "transform" }}>
                <InfiniteSlider speedOnHover={8} speed={12} gap={112} className="h-8 w-full">
                <div className="flex items-center h-8">
                  <div className="mx-auto h-8 w-fit flex items-center justify-center text-[#1E3A8A] font-bold text-lg">
                    MSA
                  </div>
                </div>
                <div className="flex items-center h-8">
                  <div className="mx-auto h-8 w-fit flex items-center justify-center text-[#5B6473] font-semibold">
                    Muslim Founders
                  </div>
                </div>
                <div className="flex items-center h-8">
                  <div className="mx-auto h-8 w-fit flex items-center justify-center text-[#5B6473] font-semibold">
                    Halal Business
                  </div>
                </div>
                <div className="flex items-center h-8">
                  <div className="mx-auto h-8 w-fit flex items-center justify-center text-[#1E3A8A] font-bold text-lg">
                    MSA
                  </div>
                </div>
                <div className="flex items-center h-8">
                  <div className="mx-auto h-8 w-fit flex items-center justify-center text-[#5B6473] font-semibold">
                    Revenue Scaling
                  </div>
                </div>
                <div className="flex items-center h-8">
                  <div className="mx-auto h-8 w-fit flex items-center justify-center text-[#5B6473] font-semibold">
                    Business Growth
                  </div>
                </div>
                <div className="flex items-center h-8">
                  <div className="mx-auto h-8 w-fit flex items-center justify-center text-[#1E3A8A] font-bold text-lg">
                    MSA
                  </div>
                </div>
                <div className="flex items-center h-8">
                  <div className="mx-auto h-8 w-fit flex items-center justify-center text-[#5B6473] font-semibold">
                    Success Stories
                  </div>
                </div>
                </InfiniteSlider>
              </div>

              <div className="bg-gradient-to-r from-white absolute inset-y-0 left-0 w-20"></div>
              <div className="bg-gradient-to-l from-white absolute inset-y-0 right-0 w-20"></div>
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section - Prominent */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] text-white">
        <div className="site-container">
          <Reveal className="reveal text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Our Iron-Clad Guarantee
              </h2>
            </div>
            <p className="text-xl md:text-2xl font-semibold mb-4 leading-relaxed">
              If we don't double your revenue within 90 days, we refund <span className="text-yellow-300">100% of your fee</span>—no questions asked.
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              We're so confident in our system that we put our money where our mouth is. You have nothing to lose and everything to gain.
            </p>
            <AnimatedCTA href="/book" variant="secondary">
              Book Your Risk-Free Consultation
            </AnimatedCTA>
          </Reveal>
        </div>
      </section>

      {/* Booking Section - Moved above FAQs for priority */}
      <section className="py-16 md:py-24 bg-white border-t border-[#E6EAF0]">
        <div className="site-container">
          <Reveal className="reveal text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-6">
              Ready to <span className="text-[#1E3A8A]">Double Your Revenue?</span>
            </h2>
            <p className="text-lg md:text-xl text-[#5B6473] mb-4 leading-relaxed">
              Book a consultation call below to discuss your business and see how we can help you scale.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] text-white rounded-full font-semibold text-base md:text-lg mb-6 shadow-lg">
              <span>100% Money-Back Guarantee if we don't 2× your revenue</span>
            </div>
            <p className="text-base text-[#5B6473] mb-8">
              <strong className="text-[#0B1220]">How it works:</strong> Select a time that works for you, and we'll discuss your business goals, current challenges, and how our program can help you achieve 2× revenue growth. Pricing is customized based on your specific needs. Remember: You have zero risk—if we don't deliver, you get every penny back.
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
                  q: "What if you don't double my revenue? Do I really get my money back?",
                  a: "Yes—100% of your fee, no questions asked. This is our iron-clad guarantee: If we don't double your revenue within 90 days, we refund every single penny you paid us. We're so confident in our system that we put our money where our mouth is. You have zero risk and everything to gain.",
                },
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
                  a: "Most partners see initial improvements within 30 days, with significant revenue growth by 60-90 days. Our guarantee ensures you double your revenue within 90 days or get your full fee refunded—no questions asked.",
                },
                {
                  q: "How much does it cost?",
                  a: "Pricing is customized based on each client's specific needs, business stage, and goals. During your consultation call, we'll discuss your situation and provide a tailored investment that aligns with your business objectives. Remember: If we don't double your revenue, you get 100% of your fee back.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

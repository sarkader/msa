export type CaseStudy = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  metrics: {
    before: string;
    after: string;
    timeline: string;
    roi: string;
  };
  kpis: {
    before: number;
    after: number;
    roi: number;
    timelineWeeks: number;
  };
  timeline: Array<{
    date: string;
    revenue: number;
    note: string;
  }>;
  testimonial: {
    quote: string;
    author: string;
    avatar?: string;
  };
  offerType: string;
  levers: string[];
  gallery?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "muslim-settify",
    name: "Muslim Settify",
    headline: "From $0 to $50k monthly revenue in 90 days",
    summary:
      "Muslim Settify transformed their consulting practice into a scalable, productized service offering.",
    metrics: {
      before: "$0 MRR",
      after: "$50k MRR",
      timeline: "90 days",
      roi: "2.8×",
    },
    kpis: {
      before: 0,
      after: 50000,
      roi: 2.8,
      timelineWeeks: 13,
    },
    timeline: [
      { date: "Week 1", revenue: 0, note: "Initial consultation" },
      { date: "Week 2", revenue: 5000, note: "First client onboarded" },
      { date: "Week 4", revenue: 12000, note: "Systemized onboarding" },
      { date: "Week 6", revenue: 20000, note: "Pricing optimization" },
      { date: "Week 8", revenue: 32000, note: "Automated lead nurturing" },
      { date: "Week 10", revenue: 42000, note: "Scaling delivery" },
      { date: "Week 12", revenue: 48000, note: "Steady pipeline" },
      { date: "Week 13", revenue: 50000, note: "Target achieved" },
    ],
    testimonial: {
      quote:
        "MSA helped us systemize our consulting approach and launch a productized service that now runs itself. We went from chasing clients to having a steady pipeline.",
      author: "Founder, Muslim Settify",
    },
    offerType: "Productized Service",
    levers: [
      "Systemized onboarding process",
      "Built repeatable delivery framework",
      "Optimized pricing structure",
      "Implemented automated lead nurturing",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    ],
  },
  {
    slug: "aqib",
    name: "Aqib",
    headline: "Scaling courses from $5k to $15k+ monthly",
    summary:
      "Aqib scaled their online course business through optimized messaging and conversion funnel improvements.",
    metrics: {
      before: "$5k MRR",
      after: "$15k+ MRR",
      timeline: "75 days",
      roi: "2.2×",
    },
    kpis: {
      before: 5000,
      after: 15000,
      roi: 2.2,
      timelineWeeks: 11,
    },
    timeline: [
      { date: "Week 1", revenue: 5000, note: "Baseline revenue" },
      { date: "Week 2", revenue: 6000, note: "Messaging refinement" },
      { date: "Week 4", revenue: 7500, note: "Sales page optimization" },
      { date: "Week 6", revenue: 9500, note: "Email sequences live" },
      { date: "Week 8", revenue: 11500, note: "Upsell strategy" },
      { date: "Week 10", revenue: 13500, note: "Conversion doubled" },
      { date: "Week 11", revenue: 15000, note: "Target achieved" },
    ],
    testimonial: {
      quote:
        "The messaging framework MSA provided transformed how we positioned our courses. Our conversion rate doubled, and we're now consistently hitting $15k+ monthly.",
      author: "Aqib, Course Creator",
    },
    offerType: "Online Course",
    levers: [
      "Refined messaging and positioning",
      "Optimized sales page conversion",
      "Built automated email sequences",
      "Implemented upsell strategy",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    ],
  },
  {
    slug: "ustadh-abdulaziz-haqqan",
    name: "Ustadh Abdulaziz Haqqan",
    headline: "Consulting practice scales to $40k+ monthly",
    summary:
      "Ustadh Abdulaziz Haqqan transformed their one-on-one consulting into a scalable group program model.",
    metrics: {
      before: "$10k MRR",
      after: "$40k+ MRR",
      timeline: "85 days",
      roi: "2.6×",
    },
    kpis: {
      before: 10000,
      after: 40000,
      roi: 2.6,
      timelineWeeks: 12,
    },
    timeline: [
      { date: "Week 1", revenue: 10000, note: "Baseline revenue" },
      { date: "Week 2", revenue: 12000, note: "Program structure design" },
      { date: "Week 4", revenue: 18000, note: "Application process live" },
      { date: "Week 6", revenue: 24000, note: "Content delivery system" },
      { date: "Week 8", revenue: 30000, note: "Pricing tiers established" },
      { date: "Week 10", revenue: 35000, note: "Quality maintained" },
      { date: "Week 12", revenue: 40000, note: "Target achieved" },
    ],
    testimonial: {
      quote:
        "Moving from one-on-one to group consulting while maintaining quality was our biggest challenge. MSA's framework made it seamless, and we've more than doubled our revenue.",
      author: "Ustadh Abdulaziz Haqqan",
    },
    offerType: "Group Consulting",
    levers: [
      "Designed scalable group program structure",
      "Built application and vetting process",
      "Created content delivery system",
      "Established pricing tiers and payment plans",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

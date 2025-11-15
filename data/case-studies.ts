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
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

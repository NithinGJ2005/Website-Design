import { SiteConfig } from './types.ts';

export const siteConfig: SiteConfig = {
  companyName: 'MERIDIAN',
  tagline: 'Strategy + Technology + Consulting',

  hero: {
    eyebrow: 'IDEAS  /  STRATEGY  /  TECHNOLOGY',
    headline: 'Turn Possibilities Into Progress',
    subheadline: 'Turn Possibilities\nInto Progress',
    description:
      'We partner with ambitious organizations to solve complex challenges, build innovative solutions, and create lasting value in a rapidly changing world.',
    primaryCta: 'Explore Our Services',
    secondaryCta: 'Learn More',
    // High-resolution architectural executive boardroom overlooking city skyline with warm natural evening light
    bgImage:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2560&q=85',
    capabilities: [
      { number: '01', title: 'Strategic Thinking' },
      { number: '02', title: 'Technology Enablement' },
      { number: '03', title: 'Sustainable Impact' },
    ],
    rightStatement: 'A BRIGHTER\nTOMORROW, TOGETHER.',
  },

  about: {
    label: 'ABOUT US',
    heading: 'Building meaningful solutions for a changing world.',
    paragraph1:
      'We combine strategic thinking, technology and practical execution to help organizations navigate complexity and create sustainable growth.',
    paragraph2:
      'As trusted advisors to industry leaders and emerging disruptors, we reject off-the-shelf paradigms. We embed alongside leadership teams to design resilient digital architectures, unlock capital efficiency, and convert volatile market shifts into durable competitive moats.',
    infoBlocks: [
      {
        number: '01',
        title: 'Strategic Approach',
        description:
          'Data-grounded market analysis and structural problem decomposition to uncover high-impact enterprise opportunities.',
      },
      {
        number: '02',
        title: 'Technology Driven',
        description:
          'Modern cloud architectures, AI systems, and robust engineering standards tailored for long-term scalability.',
      },
      {
        number: '03',
        title: 'Long-Term Value',
        description:
          'Measurable compounding outcomes that reinforce operational autonomy, client capability, and commercial resilience.',
      },
    ],
  },

  services: {
    heading: 'How We Create Value',
    subheading:
      'From strategy to execution, we help organizations transform ideas into measurable outcomes.',
    items: [
      {
        id: 'strategic-consulting',
        number: '01',
        title: 'Strategic Consulting',
        description:
          'Helping organizations identify opportunities, solve complex challenges and define clear paths forward.',
        details: {
          overview:
            'We provide rigorous executive advisory services, corporate strategy roadmaps, and capital optimization models that align organizational agility with enterprise objectives.',
          capabilities: [
            'Market entry & competitive positioning',
            'Business model transformation',
            'Operating model design & governance',
            'M&A strategic diligence & integration',
          ],
          outcomes: [
            'De-risked capital investments',
            'Accelerated time-to-market for flagship initiatives',
            'Clear leadership alignment on multi-year milestones',
          ],
        },
      },
      {
        id: 'technology-solutions',
        number: '02',
        title: 'Technology Solutions',
        description:
          'Designing and implementing modern technology solutions that improve efficiency and enable growth.',
        details: {
          overview:
            'From distributed cloud infrastructure to microservice architectures, we engineer dependable software foundations that unlock operational velocity.',
          capabilities: [
            'Modern cloud native architecture (GCP, AWS)',
            'Enterprise API design & systems integration',
            'High-throughput microservices',
            'Resilience, observability & security posture',
          ],
          outcomes: [
            'Up to 40% reduction in infrastructure overhead',
            '99.99% enterprise service reliability',
            'Drastically faster release cycles and deployment agility',
          ],
        },
      },
      {
        id: 'data-ai',
        number: '03',
        title: 'Data & AI',
        description:
          'Turning data into actionable insights through analytics, automation and intelligent systems.',
        details: {
          overview:
            'We build proprietary data pipelines, predictive intelligence frameworks, and enterprise-grade generative AI workflows that transform stagnant data lakes into active growth engines.',
          capabilities: [
            'Predictive analytics & forecasting pipelines',
            'Enterprise LLM & Agentic AI workflows',
            'Modern data warehousing & real-time telemetry',
            'AI ethics, model governance & evaluation',
          ],
          outcomes: [
            'Actionable decision support in near real-time',
            'Automated redundant workflows across knowledge workers',
            'Protected proprietary intellectual property',
          ],
        },
      },
      {
        id: 'digital-transformation',
        number: '04',
        title: 'Digital Transformation',
        description:
          'Helping businesses modernize processes, platforms and experiences for a rapidly changing world.',
        details: {
          overview:
            'We modernize legacy ecosystems into adaptive, user-centric digital platforms that empower teams and exceed evolving customer expectations.',
          capabilities: [
            'Legacy mainframe & core system modernization',
            'Omnichannel digital customer experiences',
            'Agile engineering culture enablement',
            'Continuous change management & upskilling',
          ],
          outcomes: [
            'Elimination of technical debt bottlenecks',
            'Elevated NPS and stakeholder satisfaction',
            'Sustainable organizational capability to innovate independently',
          ],
        },
      },
    ],
  },

  contact: {
    heading: "Let's build something meaningful.",
    subheading:
      "Have a challenge, idea, or opportunity? We'd love to hear from you.",
    email: 'hello@company.com',
    phone: '+91 XXXXX XXXXX',
    location: 'India',
    hours: 'Monday – Friday, 09:00 – 18:00 IST',
  },

  socialLinks: [
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Instagram', url: 'https://instagram.com' },
    { label: 'X / Twitter', url: 'https://x.com' },
  ],
};

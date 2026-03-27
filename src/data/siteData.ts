export const primaryNavLinks = [
  { label: 'About', to: '/' },
  { label: 'Services', to: '/services' },
]

export const moreNavLinks = [
  { label: 'Contact', to: '/contact' },
]

export const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About us', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Contact', to: '/contact' },
      { label: 'Careers', to: '/#careers' },
      { label: 'Resources', to: '/#insights' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Documentation', to: '/services#faq' },
      { label: 'FAQ', to: '/services#faq' },
      { label: 'Blog', to: '/#insights' },
      { label: 'Case studies', to: '/#testimonials' },
      { label: 'Connect', to: '/contact' },
    ],
  },
]

export const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Email', href: 'mailto:hello@galaxylogic.com' },
  { label: 'Slack', href: '#' },
  { label: 'Youtube', href: '#' },
]

export const homeCoreServices = [
  {
    eyebrow: 'Engineering',
    title: 'Software engineering',
    description: 'We design and build systems that scale with your growth.',
    imageSrc: '/images/placeholders/landscape.svg',
  },
  {
    eyebrow: 'Integration',
    title: 'Systems integration',
    description: 'Connect your technology stack into one coherent platform.',
    imageSrc: '/images/placeholders/landscape.svg',
  },
  {
    eyebrow: 'Architecture',
    title: 'Architecture consulting',
    description: 'Strategic guidance on technology decisions and system design.',
    imageSrc: '/images/placeholders/landscape.svg',
  },
]

export const homeWhyFeatures = [
  {
    title: 'Technical depth',
    description:
      'We work as an extension of your team, invested in your long-term success and growth.',
    imageSrc: '/images/placeholders/landscape.svg',
  },
  {
    title: 'Delivery discipline',
    description:
      'Clear milestones, practical communication, and implementation plans that stay grounded in your business context.',
    imageSrc: '/images/placeholders/square.svg',
  },
  {
    title: 'Enterprise reliability',
    description:
      'Our systems are built for stability, security, and mission-critical operations.',
    imageSrc: '/images/placeholders/landscape.svg',
  },
]

export const homeSolutions = [
  {
    eyebrow: 'Modernization',
    title: 'Legacy system modernization',
    description: 'Transform outdated systems into modern, maintainable platforms.',
    imageSrc: '/images/placeholders/portrait.svg',
    imagePosition: 'top' as const,
  },
  {
    eyebrow: 'Delivery',
    title: 'Product delivery support',
    description: 'End-to-end engineering support for new products and features.',
    imageSrc: '/images/placeholders/landscape.svg',
    imagePosition: 'bottom' as const,
  },
  {
    eyebrow: 'Evaluation',
    title: 'Technical evaluations',
    description: 'Objective assessment of your technology landscape and options.',
    imageSrc: '/images/placeholders/landscape.svg',
    imagePosition: 'bottom' as const,
  },
]

export const homeTestimonials = [
  {
    quote:
      'GalaxyLogic LLC delivered exactly what we needed. Their team understood our business and built systems that actually work.',
    name: 'Sarah Mitchell',
    role: 'VP of Engineering',
    company: 'Fintech Solutions',
  },
  {
    quote:
      'The modernization project transformed how we operate. We moved from struggling with legacy code to running on a platform we can trust.',
    name: 'James Chen',
    role: 'CTO',
    company: 'Healthcare Systems Inc',
  },
  {
    quote:
      'They became part of our team and helped us think through problems we did not even know we had.',
    name: 'Marcus Rodriguez',
    role: 'Director of Operations',
    company: 'Logistics Group',
  },
  {
    quote:
      'Working with GalaxyLogic LLC was straightforward. They communicated clearly, delivered on time, and the code quality was exceptional.',
    name: 'Elena Vasquez',
    role: 'Product Owner',
    company: 'Digital Commerce',
  },
  {
    quote:
      'Their architecture consulting saved us from a costly mistake. The guidance was practical and immediately applicable.',
    name: 'David Park',
    role: 'Technical Lead',
    company: 'Enterprise Software',
  },
  {
    quote:
      'We needed a partner who could handle complexity without losing sight of business goals. GalaxyLogic did exactly that.',
    name: 'Rebecca Thompson',
    role: 'Operations Leader',
    company: 'Manufacturing Corp',
  },
]

export const aboutTeam = [
  {
    name: 'James Mitchell',
    role: 'Founder, Principal Architect',
    bio: '20 years building and scaling distributed systems for Fortune 500 companies and high-growth startups.',
  },
  {
    name: 'Sarah Chen',
    role: 'VP Engineering',
    bio: 'Led platform modernization and cloud migrations across multiple regulated industries.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Senior Architect',
    bio: 'Specializes in legacy system modernization and API-first architecture for enterprise environments.',
  },
  {
    name: 'Elena Vasquez',
    role: 'Solutions Lead',
    bio: 'Translates business requirements into technical strategy for complex digital transformations.',
  },
  {
    name: 'David Park',
    role: 'Principal Engineer',
    bio: 'Oversees systems integration projects and ensures technical excellence across engagements.',
  },
  {
    name: 'Lisa Thompson',
    role: 'Consulting Engineer',
    bio: 'Brings expertise in cloud infrastructure, DevOps practices, and production reliability.',
  },
]

export const aboutStats = [
  {
    label: 'Years in business',
    value: '6',
    caption: 'Continuous operation and growth',
  },
  {
    label: 'Projects delivered',
    value: '180+',
    caption: 'Enterprise systems built and deployed',
  },
  {
    label: 'Client retention',
    value: '94%',
    caption: 'Long-term partnerships that extend beyond initial scope',
  },
  {
    label: 'Industries served',
    value: '8',
    caption: 'Financial services, healthcare, retail, and more',
  },
]

export const aboutTestimonials = [
  {
    logoText: 'Webflow',
    quote:
      "GalaxyLogic did not just build our system. They understood our business constraints and delivered something we could run at scale.",
    name: 'Michael Torres',
    role: 'CTO',
    company: 'Financial Services',
    ctaLabel: 'View case study',
  },
  {
    logoText: 'Relume',
    quote:
      'Their architects asked the right questions before writing code. The modernization took half the time we expected.',
    name: 'Jennifer Walsh',
    role: 'VP Engineering',
    company: 'Healthcare',
    ctaLabel: 'View case study',
  },
  {
    logoText: 'Webflow',
    quote:
      'We needed someone who could speak both business and technical language. GalaxyLogic did that consistently.',
    name: 'Robert Chen',
    role: 'Operations Director',
    company: 'Retail',
    ctaLabel: 'View case study',
  },
]

export const servicesPrimary = [
  {
    eyebrow: 'Strategy',
    title: 'Architecture consulting',
    description:
      'Our architects evaluate your systems and design solutions that align with business goals.',
  },
  {
    eyebrow: 'Integration',
    title: 'Systems integration',
    description:
      'We connect disparate systems and data sources to create unified, efficient workflows.',
  },
  {
    eyebrow: 'Modernization',
    title: 'Legacy systems modernization',
    description:
      'We transform outdated software into modern platforms that meet current business demands.',
  },
]

export const servicesFeatures = [
  {
    eyebrow: 'Modernization',
    title: 'Breathing new life into legacy systems',
    description:
      'Legacy software often carries technical debt that slows innovation. We modernize these systems through assessment, phased migration, and strategic refactoring.',
    bullets: ['Assessment and planning', 'Incremental migration strategies', 'Cloud readiness and deployment'],
    imageSrc: '/images/placeholders/square.svg',
  },
  {
    eyebrow: 'Evaluation',
    title: 'Technical assessments for informed decisions',
    description:
      'Before committing to major technology changes, you need clarity on risk and opportunity. We conduct thorough evaluations and architecture reviews.',
    bullets: ['Architecture reviews', 'Risk and dependency mapping', 'Decision support for leadership'],
    imageSrc: '/images/placeholders/square.svg',
  },
  {
    eyebrow: 'Delivery',
    title: 'Accelerating product launches with technical leadership',
    description:
      'Launching a digital product requires more than code. We embed our engineers and architects into your team to keep delivery predictable and high quality.',
    bullets: ['Hands-on engineering support', 'Quality assurance and release planning', 'Technical leadership for product teams'],
    imageSrc: '/images/placeholders/square.svg',
  },
]

export const servicesPartnershipCards = [
  {
    eyebrow: 'Team extension',
    title: 'Dedicated team extension',
    description: 'Augment your engineering capacity with experienced developers and architects.',
  },
  {
    eyebrow: 'Retainers',
    title: 'Continuous improvement retainers',
    description: 'Ongoing optimization and maintenance to keep systems performing at peak efficiency.',
  },
  {
    eyebrow: 'Advisory',
    title: 'Strategic advisory services',
    description: 'Access to senior architects and engineers for technical guidance and direction.',
  },
]

export const servicesFaq = [
  {
    question: "Do you sponsor work authorization for new graduates?",
    answer:
      "Yes. We work with new graduates on a range of work authorization pathways, including OPT, CPT, and H-1B, depending on the candidate’s current status, timing, and role alignment. During the initial consultation, we review your situation and explain what sponsorship support may look like at each stage so you have a clear understanding of the process.",
  },
  {
    question:
      "Can you support long-term immigration steps such as PERM, I-140, and green card processing?",
    answer:
      "Yes. For eligible candidates, we can support long-term immigration planning, including PERM, I-140, and green card pathways. The exact timing and sequencing depend on your employment situation, performance, project needs, and legal process requirements, but we are able to work with candidates who are looking beyond short-term visa sponsorship and want a more stable long-term path in the United States.",
  },
  {
    question: "How long is the training program?",
    answer:
      "Our standard training program is designed to take about one month. The goal is to help new graduates ramp up quickly with practical, job-relevant skills rather than staying in a long academic-style program. The training is structured to build both technical capability and confidence so candidates can move into interviews and client-facing opportunities as soon as they are ready.",
  },
  {
    question: "What topics are covered during training?",
    answer:
      "Training is focused on real industry preparation. Depending on your track, it can include frontend development, backend development, cloud services, and modern engineering workflows used in production environments. We also cover practical topics such as collaboration within engineering teams, code quality expectations, development lifecycle practices, and the day-to-day workflow commonly seen in real client projects.",
  },
  {
    question: "Do you provide mock interviews?",
    answer:
      "Yes. Mock interviews are part of our support process. We help candidates practice technical communication, answer common interview questions, improve clarity and structure, and build confidence in live interview settings. This includes feedback on both technical and behavioral performance so you can identify weak areas and improve before real interviews.",
  },
  {
    question: "How quickly can I expect to receive an offer?",
    answer:
      "Offer timelines can vary based on market conditions, your background, interview readiness, and project demand. In faster cases, candidates may receive an offer within one day. In other cases, the process can take up to two months. We set expectations early, keep candidates updated throughout the process, and work to move qualified candidates forward as efficiently as possible.",
  },
  {
    question:
      "Is the program suitable for new graduates without U.S. industry experience?",
    answer:
      "Yes. The program is designed with new graduates in mind, including candidates who have strong academic backgrounds but limited U.S. industry experience. Our training and interview preparation are intended to bridge that gap by helping candidates understand employer expectations, real-world project workflows, and the technical depth needed to compete in the U.S. job market.",
  },
  {
    question: "Will I learn real engineering workflow instead of just theory?",
    answer:
      "Yes. A major focus of the program is practical execution. We emphasize real-world engineering workflow, including how modern teams build, test, deploy, and collaborate on software. The objective is not only to improve your technical stack, but also to help you operate like an engineer in an actual production environment.",
  },
]

export const contactFaq = [
  {
    question: 'How long does engagement take?',
    answer:
      'Timelines vary by scope and complexity. Initial assessments typically take two to four weeks, while modernization programs can span months.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Yes. We handle confidential information as standard practice, and NDAs are part of our onboarding process when needed.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We work across finance, healthcare, manufacturing, retail, and technology sectors in both regulated and unregulated environments.',
  },
  {
    question: 'Can you work with legacy systems?',
    answer:
      'Yes. Legacy modernization is a core part of our practice. We assess existing architecture, plan migration strategies, and execute transitions safely.',
  },
  {
    question: 'What is your typical response time?',
    answer:
      'We respond to inquiries within one business day. Initial consultations are usually scheduled within one week based on availability.',
  },
]

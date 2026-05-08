import { FaBrain, FaChartBar, FaGlobe, FaRocket } from 'react-icons/fa';

export const SERVICES = [
  {
    icon: FaGlobe,
    title: 'Web Development',
    description:
      'Custom websites, web apps, and platforms built for speed and usability. From a single landing page to a full production system.',
  },
  {
    icon: FaRocket,
    title: 'Website Optimization',
    description:
      'Speed, SEO, and accessibility improvements for your existing site. Faster load times, better search rankings, better user experience.',
  },
  {
    icon: FaBrain,
    title: 'AI & Automation',
    description:
      'Chatbots, smart forms, and automated workflows that save your team hours. Real tools that solve real problems, not tech demos.',
  },
  {
    icon: FaChartBar,
    title: 'Custom Tools & Dashboards',
    description:
      'Internal tools, analytics dashboards, and reporting systems tailored to how your team actually works.',
  },
];

export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Tell me about your project',
    description:
      'Fill out the form below with what you need. A new site, a fix, a tool. Whatever it is, describe it in your own words.',
  },
  {
    number: 2,
    title: 'Get a plan',
    description:
      "I'll respond with a clear breakdown of what's needed, how long it'll take, and what it'll cost.",
  },
  {
    number: 3,
    title: 'I build, you launch',
    description:
      'I handle the technical work with regular check-ins. You get a working product, ready to go.',
  },
];

export const CASE_STUDIES = [
  {
    title: 'Urban STL Analytics',
    problem: 'St. Louis needed a way to visualize and explore civic data across neighborhoods.',
    approach: 'Built an interactive mapping platform with Mapbox GL, real-time data visualization, and an AI-powered analysis agent.',
    result: 'Grand Prize winner at HackSLU. Interactive data exploration across 800+ data points.',
    image: '/projects/urban-stl-analytics.png',
    link: '/portfolio#projects',
  },
  {
    title: 'CoRATES',
    problem: 'Teams needed a real-time collaborative rating and evaluation tool with reliable sync.',
    approach: 'Built with CRDTs over WebSockets and Cloudflare Durable Objects for conflict-free real-time collaboration.',
    result: 'Production SaaS with Stripe billing, MFA, and edge-deployed infrastructure.',
    image: '/projects/corates.png',
    link: '/portfolio#projects',
  },
  {
    title: "Where's Religion?",
    problem: 'A digital humanities research project needed a cross-platform tool for mapping and analyzing religious data.',
    approach: 'Led a team building a TanStack Start web app and React Native mobile app with shared authentication and real-time data.',
    result: 'Full-stack platform serving researchers with interactive maps and collaborative features.',
    image: '/projects/wr-home.png',
    link: '/portfolio#projects',
  },
];

export const TESTIMONIALS = [
  {
    quote: "Jacob is a high-achieving, goal-oriented individual, and he is a pleasure to work with.",
    name: "Applied Research Associates",
    role: "Project Manager",
  },
];

export const CREDENTIALS = [
  'MS in AI, Saint Louis University',
  'Applied Research Associates',
  'Founding Engineer at Syntch',
  'HackSLU Grand Prize Winner',
];

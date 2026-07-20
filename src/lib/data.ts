export const MY_STACK = {
  languages: [
    {
      name: 'Javascript',
      icon: '/logo/js.svg',
    },
    {
      name: 'Typescript',
      icon: '/logo/ts.svg',
    },
    {
      name: 'Python',
      icon: '/logo/python.svg',
    },
    // {
    //   name: "Rust",
    //   icon: "/logo/rust.svg",
    // },
    {
      name: 'C#',
      icon: '/logo/csharp.svg',
    },
    {
      name: 'C++',
      icon: '/logo/cpp.svg',
    },
    // {
    //   name: "C",
    //   icon: "/logo/c.svg",
    // },
  ],
  'systems & graphics': [
    {
      name: 'WebGL2',
      icon: '/logo/webgl.svg',
    },
    {
      name: 'WebGPU',
      icon: '/logo/webgpu.svg',
    },
    {
      name: 'Three.js',
      icon: '/logo/threejs.svg',
    },
    {
      name: 'OpenMP',
      icon: '/logo/openmp.svg',
    },
    {
      name: 'CMake',
      icon: '/logo/cmake.svg',
    },
  ],
  'ai/ml': [
    {
      name: 'PyTorch',
      icon: '/logo/pytorch.svg',
    },
    {
      name: 'NumPy',
      icon: '/logo/numpy.svg',
    },
    {
      name: 'Pandas',
      icon: '/logo/pandas.svg',
    },
    {
      name: 'Jupyter',
      icon: '/logo/jupyter.svg',
    },
    {
      name: 'scikit-learn',
      icon: '/logo/scikit-learn.svg',
    },
  ],
  frontend: [
    {
      name: 'SolidJS',
      icon: '/logo/solid.svg',
    },
    {
      name: 'React',
      icon: '/logo/react.svg',
    },
    {
      name: 'Next.js',
      icon: '/logo/next.svg',
    },
    {
      name: 'Zustand',
      icon: '/logo/zustand.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: '/logo/tailwind.svg',
    },
    {
      name: 'GSAP',
      icon: '/logo/gsap.svg',
    },
    {
      name: 'Motion',
      icon: '/logo/motion.png',
    },
    {
      name: 'React Native',
      icon: '/logo/react.svg',
    },
    {
      name: 'D3',
      icon: '/logo/d3.svg',
    },
    {
      name: 'TanStack',
      icon: '/logo/tanstack.png',
    },
    {
      name: 'Electron',
      icon: '/logo/electron.svg',
    },
  ],
  backend: [
    {
      name: '.NET Framework',
      icon: '/logo/dotnet.svg',
    },
    {
      name: 'Bun',
      icon: '/logo/bun.svg',
    },
    {
      name: 'Node.js',
      icon: '/logo/node.svg',
    },
    {
      name: 'AWS',
      icon: '/logo/aws.svg',
    },
    {
      name: 'Cloudflare',
      icon: '/logo/cloudflare.svg',
    },
    {
      name: 'Hono',
      icon: '/logo/hono.svg',
    },
    {
      name: 'FastAPI',
      icon: '/logo/fastapi.svg',
    },
  ],
  database: [
    {
      name: 'MySQL',
      icon: '/logo/mysql.svg',
    },
    {
      name: 'PostgreSQL',
      icon: '/logo/postgreSQL.png',
    },
    {
      name: 'SQLite',
      icon: '/logo/sqlite.svg',
    },
    {
      name: 'Drizzle',
      icon: '/logo/drizzle.svg',
    },
  ],
  tools: [
    {
      name: 'Git',
      icon: '/logo/git.png',
    },
    {
      name: 'Vite',
      icon: '/logo/vite.svg',
    },
    {
      name: 'Vitest',
      icon: '/logo/vitest.svg',
    },
    {
      name: 'Docker',
      icon: '/logo/docker.svg',
    },
    {
      name: 'MCP',
      icon: '/logo/mcp.svg',
    },
    {
      name: 'Terraform',
      icon: '/logo/terraform.svg',
    },
    {
      name: 'Nginx',
      icon: '/logo/nginx.svg',
    },
    {
      name: 'Traefik',
      icon: '/logo/traefik.svg',
    },
    {
      name: 'Airflow',
      icon: '/logo/airflow.svg',
    },
  ],
};

export interface ExperienceItem {
  company: string;
  title: string;
  duration: string;
  description?: string;
  highlights?: Array<string>;
  tech?: Array<string>;
}

export const MY_EXPERIENCE: Array<ExperienceItem> = [
  {
    company: 'Noise',
    title: 'Software Engineer 2',
    duration: 'July 2026 - Present',
    description:
      'Noise is a UGC platform that connects brands with thousands of creators to produce social content at scale across TikTok, YouTube, and Instagram, with view verification and pay-per-performance pricing.',
  },
  {
    company: 'Applied Research Associates',
    title: 'Junior Software Engineer',
    duration: 'May 2024 - July 2026',
    description:
      'ARA is an international research and engineering firm providing solutions to complex problems in defense, space, security, and critical infrastructure. Full-time onsite during summers in Rapid City, SD and remote during the academic year.',
    highlights: [
      'Built real-time data visualizations rendering 1M+ points at 120fps in WebGL2/WebGPU for U.S. Air Force mission planning',
      'Optimized multi-GB proprietary data parsing 60x with custom atof routines and cache-conscious layout; cut memory from 2GB+ to 130MB',
      'Optimized radar detection simulation pipeline 40x (40s to <1s) through algorithmic restructuring and OpenMP parallelization',
      'Engineered zero-copy shared-memory IPC across WebView2 windows from C++/C#, replacing JSON-over-COM to eliminate transfer ceiling',
      '"Jacob is a high-achieving, goal-oriented individual, and he is a pleasure to work with." - Project Lead Feedback',
    ],
    tech: [
      'C++',
      'C#/.NET',
      'WebGL2',
      'WebGPU',
      'OpenMP',
      'WebView2',
      'TypeScript',
      'D3.js',
      'Python',
    ],
  },
  {
    company: 'Syntch LLC',
    title: 'Founding Engineer',
    duration: 'August 2025 - Present',
    description:
      'Syntch is the company behind CoRATES, a real-time collaborative research appraisal tool for evidence synthesis.',
    highlights: [
      'Architected a real-time collaboration engine using CRDTs over WebSockets with Durable Objects for concurrent editing with automatic conflict resolution',
      'Built production infrastructure end-to-end: sub-second edge-cached pages, Stripe billing, MFA, queue-backed email, WAF, and rate limiting',
    ],
    tech: [
      'TypeScript',
      'TanStack Start',
      'Cloudflare Workers',
      'Durable Objects',
      'Yjs',
      'D1',
      'R2',
      'Stripe',
    ],
  },
  {
    company: 'University of Utah',
    title: 'Audio Manager, Student Media',
    duration: 'September 2024 - May 2025',
    highlights: [
      'This was a fun role I took during my final two semesters of undergrad between two summer internships at ARA.',
      'My experience in music production and audio engineering allowed me to manage audio equipment, assist in recording sessions, and support live broadcasts for university events.',
      'I also gave recommendations for new equipment purchases and processes to ensure the longevity of the equipment',
    ],
  },
];

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export const MY_EDUCATION: Array<EducationItem> = [
  {
    institution: 'Saint Louis University',
    degree: 'Master of Science in Artificial Intelligence',
    duration: 'August 2025 - May 2027 (Expected)',
  },
  {
    institution: 'University of Utah',
    degree: 'Bachelor of Science in Computer Science',
    duration: 'August 2021 - May 2025',
    description: 'with Certificate in Data Science',
  },
];

interface Project {
  title: string;
  description: string;
  media: string;
  mediaWidth: number;
  mediaHeight: number;
  refUrl?: string;
  source?: string;
  isVideo: boolean;
  link?: string;
  readMore?: string;
}

export const MY_PROJECTS: Array<Project> = [
  {
    title: 'CoRATES',
    description:
      'CoRATES is a Collaborative Research Appraisal Tool for Evidence Synthesis. It is a real-time, collaborative web application for conducting systematic reviews and meta-analyses, enabling multiple researchers to concurrently appraise studies with conflict-free synchronization. The platform is designed as a local-first PWA on Cloudflare Workers, using Durable Objects and Yjs (CRDTs) for real-time collaboration, with D1 and R2 for persistent storage. It features full authentication and billing flows (OAuth, magic links, optional 2FA, admin impersonation, Stripe), as well as a custom MCP server to improve agent-driven development workflows.',
    media: '/projects/corates.png',
    mediaWidth: 2360,
    mediaHeight: 1586,
    link: 'https://corates.org',
    isVideo: false,
    readMore: '/blog/corates',
  },
  {
    title: 'PaleoWaifu',
    description:
      'A prehistoric animal waifu gacha game. Collect 101 creatures spanning the Cambrian through the Pleistocene, trade with other players, and build your ultimate paleontology collection. Features gacha pulls with a full pity system, rate-up banners, an encyclopedia with real paleontology data, a trading marketplace, daily rewards, and a Discord bot with slash commands and an XP leveling system. Built with TanStack Start, React 19, Tailwind CSS v4, shadcn/ui, Drizzle ORM, Cloudflare D1, and deployed on Cloudflare Workers.',
    media: '/projects/paleowaifu.png',
    mediaWidth: 1280,
    mediaHeight: 720,
    link: 'https://paleo-waifu.jacobmaynard.dev',
    refUrl: 'https://github.com/InfinityBowman/paleo-waifu',
    source: 'Github',
    isVideo: false,
  },
  {
    title: 'HomeLab PaaS',
    description:
      'A mini Platform-as-a-Service built in Rust, running on a home server (Ubuntu Server 24.04). Features a full CI/CD pipeline via GitHub Actions with a self-hosted runner, automatic Docker container deployment, Cloudflare Tunnel networking with wildcard DNS, and Traefik reverse proxy with Docker label auto-discovery. The Rust workspace includes 7 crates covering a REST API (Axum), SQLite persistence (sqlx), Docker management (bollard), and Cloudflare integration. Also hosts services like Plausible analytics, n8n workflow automation, and Dozzle log viewer.',
    media: '/projects/homelab.png',
    mediaWidth: 2960,
    mediaHeight: 1850,
    refUrl: 'https://github.com/InfinityBowman/home-lab',
    source: 'Github',
    isVideo: false,
  },
  {
    title: 'Urban STL Analytics',
    description:
      'HackSLU Hackathon Grand Prize Winner. A unified urban data analytics platform for the City of St. Louis with an AI agent that can control the entire interface. Users ask a question about St. Louis and the agent toggles map overlays, filters datasets, builds charts, and performs RAG over the data to answer it. Combines 311 complaints, crime data, transit equity, vacancy triage, food access, census demographics, and ARPA fund expenditures into a fullscreen Map Explorer with seven toggleable Mapbox GL layers, cross-dataset analysis, custom vacancy triage scoring, transit equity algorithms, and a ChartBuilder. Built with TanStack Start, React 19, Mapbox GL JS, Recharts, and deployed on Cloudflare Workers.',
    media: '/projects/urban-stl-analytics.png',
    mediaWidth: 2976,
    mediaHeight: 1852,
    link: 'https://jacobmaynard.dev/urbanstl',
    refUrl: 'https://github.com/InfinityBowman/urban-stl-analytics',
    source: 'Github',
    isVideo: false,
  },
  {
    title: 'NetRadar',
    description:
      "A macOS desktop app that visualizes all network signals around your Mac in real time: Wi-Fi access points, LAN devices, Bluetooth devices, Bonjour/mDNS services, and active connections. Uses tshark (Wireshark CLI) for deep packet inspection, streaming live protocol dissection to color-coded arc visualizations around each node. Leverages Wireshark's OUI database for MAC vendor identification and TTL-based OS fingerprinting. Features an interactive D3.js force-directed graph with force and radial layout modes, real-time scanning, and signal-type filtering. Built with Electron, React 19, D3.js, TypeScript, Vite, and Tailwind CSS v4.",
    media: '/projects/netradar.png',
    mediaWidth: 2384,
    mediaHeight: 1590,
    refUrl: 'https://github.com/InfinityBowman/NetRadar',
    source: 'Github',
    isVideo: false,
  },
  {
    title: "Where's Religion?",
    description:
      'A digital humanities platform for ethnographers and cultural studies researchers, built in partnership with the Saint Louis University Center of Lived Religion. As tech lead, I guided a team of three undergraduate capstone students through a full-stack rebuild of both the web and React Native mobile apps. The Next.js web app on Netlify moved to TanStack Start on Cloudflare Workers, the mobile app was upgraded from Expo 53 to Expo Router 54, and both were put behind a new Hono API on AWS with Postgres and Drizzle. Firebase auth was swapped for Better Auth across both platforms, and the backend runs on blue/green Docker deployments behind Nginx and a Cloudflare proxy. RERUM, which had been the primary backend, was pulled out and is now used purely as an external publish layer to expose data explicitly marked as publicly queryable. First Contentful Paint dropped from over 10 seconds to under 1.',
    media: '/projects/wheres-religion.png',
    mediaWidth: 604,
    mediaHeight: 1238,
    link: 'https://wheresreligion.netlify.app',
    refUrl: 'https://github.com/oss-slu/lrda_mobile',
    source: 'Github',
    isVideo: false,
    readMore: '/blog/wheres-religion',
  },
  {
    title: 'This Website',
    description:
      'My portfolio website made with React, TailwindCSS, GSAP, Motion/Framer Motion, Lenis (smooth scrolling), Vite, and TypeScript.',
    media: '/projects/new-portfolio.png',
    mediaWidth: 2538,
    mediaHeight: 1746,
    refUrl: 'https://github.com/InfinityBowman/new-portfolio',
    source: 'Github',
    isVideo: false,
  },
];

export const ABOUT = {
  title: "Hi, I'm Jacob",
  description:
    "A software engineer based in Saint Louis. I'm obsessed with performance and diving into new, challenging problems, whether it's interactive data visualization, designing algorithms, training models, or pushing the limits of hardware. I want to get to a point where I can contribute things that haven't been done before. I write in C++, Python, and TypeScript, and I'm pursuing an MS in AI at Saint Louis University, and maybe a PhD to follow.",
};

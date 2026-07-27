export type CaseStudy = {
  id: string
  title: string
  clientContext: string
  purpose: string
  problem: string
  solution: string
  outcome: string
  metrics: string[]
  stack: string[]
  featured: boolean
  nda?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'loan-collection-dashboard',
    title: 'Loan Collection Dashboard',
    clientContext: 'Confidential · Banking / Collections',
    purpose:
      'Give collectors and managers one operational view of delinquent accounts, follow-ups, and recovery progress.',
    problem:
      'Collection work lived in spreadsheets and disconnected tools — hard to prioritize accounts, track agent activity, or see pipeline health in real time.',
    solution:
      'Built a full-stack collections dashboard for a banking client: account queues, agent workflows, payment/status tracking, role-based access, and management reporting. Company name withheld.',
    outcome:
      'Collectors work from a single prioritized queue; supervisors get clearer pipeline visibility. Bank identity and loan-book figures stay confidential.',
    metrics: ['Banking client', 'Agent queues', 'Ops reporting'],
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'Role-based access',
    ],
    featured: true,
  },
  {
    id: 'casino-platform',
    title: 'Full-Stack Casino Platform',
    clientContext: 'Confidential · Government-approved iGaming / Casino',
    purpose:
      'Ship a production casino web platform end-to-end — player experience, admin ops, and secure backend — for a government-approved operator.',
    problem:
      'The operator needed accounts, wallet flows, game lobbies, and management tools without relying on a fragmented vendor stack, while meeting requirements for a regulated, government-approved environment.',
    solution:
      'Full-stack delivery: React player UI, NestJS/Node APIs, PostgreSQL, auth hardening, admin dashboards, and containerized deploy. Built for a government-approved casino operator; company name stays confidential.',
    outcome:
      'Government-approved platform live in production with player and operator surfaces. Managed platform revenue ranged about ₱5M–₱20M per period (≈ $80K–$325K USD). About 10K+ users on the platform. Company name withheld.',
    metrics: ['Gov-approved', '$80K–$325K USD', '10K+ users'],
    stack: [
      'React',
      'TypeScript',
      'NestJS',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'Redis',
      'Security hardening',
    ],
    featured: true,
  },
  {
    id: 'interactive-game-client-nda',
    title: 'Interactive Game Client',
    clientContext: 'Confidential · Game / Entertainment (NDA)',
    purpose:
      'Deliver a playable 2D/3D client experience with clean controls, progression, and a shippable build pipeline.',
    problem:
      'The product team needed a Godot-based game client with reliable builds and documentation, while keeping the title and publisher confidential.',
    solution:
      'Godot (GDScript/C#) gameplay systems, UI flows, export pipeline, and technical write-ups for handoff. Title name, store links, and player metrics stay under NDA.',
    outcome:
      'Playable client builds handed off for internal testing and iteration. Public branding withheld under NDA.',
    metrics: ['NDA · Confidential', 'Godot client', 'Build + docs'],
    stack: ['Godot', 'GDScript', 'C#', 'Game UI', 'Technical writing'],
    featured: true,
    nda: true,
  },
  {
    id: 'timekeeping-assets',
    title: 'Timekeeping Kiosk & Asset Management',
    clientContext: 'BPO operations · Internal systems',
    purpose:
      'Give ops, HR, and management one place to see who is working, what they use, and where assets live.',
    problem:
      'Attendance and assets lived in separate, mostly manual workflows — hard to reconcile people, workstations, and equipment.',
    solution:
      'In-house kiosk timekeeping integrated with asset tracking, including a visual seat plan that maps people and workstations to their assets.',
    outcome:
      'Saved $43,200/year vs a subscription timekeeping product; faster onboarding accountability; clearer ownership for IT and HR.',
    metrics: ['$43,200/yr saved', 'Unified attendance + assets', 'Live seat plan'],
    stack: ['React.js', 'Ruby on Rails', 'PostgreSQL', 'Redis', 'Active Job'],
    featured: false,
  },
  {
    id: 'event-organizer',
    title: 'Event Organizer',
    clientContext: 'Large recurring workplace events',
    purpose:
      'Help ops and management run large recurring events and understand engagement — not just headcount.',
    problem:
      'Paper sign-offs and manual meal/raffle flows burned staff time and left no useful view of participation patterns.',
    solution:
      'Rails/React event system with seating, meal/raffle flows, calendar heatmaps, engagement insights, and per-user profiling.',
    outcome:
      'Supports 300+ people across multi-day weekly events; saved up to 10 hours weekly vs signature sheets.',
    metrics: ['300+ participants', '10+ hrs/week saved', 'Engagement insights'],
    stack: ['React.js', 'Ruby on Rails', 'PostgreSQL', 'Analytics'],
    featured: false,
  },
  {
    id: 'ops-web-platform-nda',
    title: 'Operations Web Platform',
    clientContext: 'Confidential · Internal ops product (NDA)',
    purpose:
      'Replace fragmented internal tools with a full-stack web app for day-to-day operations workflows.',
    problem:
      'Staff bounced between forms, chat threads, and spreadsheets — slow handoffs and no shared source of truth.',
    solution:
      'MERN / Next.js style full-stack app: authenticated users, CRUD workflows, SQL-backed records, and role-aware screens. Client and industry details stay under NDA.',
    outcome:
      'One place for core ops tasks with clearer ownership. Brand and traffic numbers confidential under NDA.',
    metrics: ['NDA · Confidential', 'Full-stack web', 'Role-aware UX'],
    stack: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Jest'],
    featured: false,
    nda: true,
  },
  {
    id: 'secure-api-platform-nda',
    title: 'Secure API & Backend Platform',
    clientContext: 'Confidential · Backend / Security (NDA)',
    purpose:
      'Stand up a scalable API layer with hardening practices suitable for production traffic.',
    problem:
      'Legacy endpoints and weak access patterns created performance and security risk as usage grew.',
    solution:
      'NestJS/Node services with PostgreSQL/Redis, container deploy, and security review pass. Customer name and exploit details stay under NDA.',
    outcome:
      'Hardened service surface with clearer API ownership. Specific vulnerability counts tied to this client remain confidential.',
    metrics: ['NDA · Confidential', 'API platform', 'Hardening pass'],
    stack: [
      'TypeScript',
      'NestJS',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Kubernetes',
    ],
    featured: false,
    nda: true,
  },
  {
    id: 'access-control',
    title: 'Access Control System',
    clientContext: 'Facility security + attendance',
    purpose: 'Secure facility entry while feeding unified attendance data.',
    problem:
      'Commercial access control was costly and disconnected from timekeeping.',
    solution:
      'Hardware/software access system integrated with the timekeeping stack.',
    outcome:
      'Saved $4,406.77 vs commercial alternatives; unified entry and attendance records.',
    metrics: ['$4,406 one-time saved', 'Unified entry records'],
    stack: ['Python 3', 'SQLite', 'Keycard Integration'],
    featured: false,
  },
  {
    id: 'server-room',
    title: 'Server Room Monitoring',
    clientContext: 'IT capacity & environmental risk',
    purpose:
      'Give management and IT planning visibility into environmental risk — not only a live temperature number.',
    problem:
      'Point-in-time sensor checks missed patterns that drive overheating risk and capacity planning.',
    solution:
      'Real-time temperature/humidity monitoring plus time-based and seasonal heatmaps for hour/day trends.',
    outcome:
      'Earlier detection of risky conditions and clearer capacity planning without commercial monitoring spend.',
    metrics: ['Real-time sensors', 'Seasonal heatmaps'],
    stack: ['Ruby on Rails', 'PostgreSQL', 'IoT', 'Heatmaps'],
    featured: false,
  },
  {
    id: 'uptime-monitoring',
    title: 'Uptime Monitoring & Alerting',
    clientContext: 'On-prem devices + production apps',
    purpose: 'Alert ops when devices and production services fail.',
    problem: 'Downtime was discovered late, slowing incident response.',
    solution:
      'Proactive availability alerting for on-prem devices and production apps.',
    outcome:
      'Faster detection and shorter resolution paths for service incidents.',
    metrics: ['Faster detection', 'Ops alerting'],
    stack: ['Monitoring', 'Alerting'],
    featured: false,
  },
]

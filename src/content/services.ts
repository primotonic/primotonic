export type Service = {
  id: string
  title: string
  summary: string
  details: string
  outcomes: string[]
}

export const services: Service[] = [
  {
    id: 'web',
    title: 'Full-Stack Web Development',
    summary:
      'End-to-end web products — UI, APIs, data, and deploy — tailored to how your team actually works.',
    details:
      'From marketing sites to Rails/React and NestJS platforms: frontend, backend, databases, and ops in one delivery. Built for clarity, ownership, and long-term maintainability.',
    outcomes: [
      'Custom sites and apps that match brand and conversion goals',
      'Internal systems that replace costly subscription tools',
      'Dashboards, APIs, and workflows that connect ops, HR, and management',
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Application',
    summary:
      'User-friendly mobile apps with straightforward installation and a seamless experience for every user.',
    details:
      'We ship practical mobile experiences — focused flows, reliable installs, and support paths that keep adoption high.',
    outcomes: [
      'Clean UX for field and office users',
      'Install and update paths that reduce friction',
      'Integration with your existing web and backend systems',
    ],
  },
 {
    id: 'game-dev',
    title: 'Game Development',
    summary:
      'Games built for any platform — mobile, desktop, web, or beyond — from concept to launch, with engaging mechanics backed by clean, maintainable code.',
    details:
      'From lightweight browser arcade titles to full desktop and mobile releases: design, core mechanics, UI/UX, and performance tuning, delivered as polished builds tailored to wherever your players are.',
    outcomes: [
      'Playable prototypes that validate mechanics fast',
      'Cross-platform builds for mobile, desktop, and web from a single codebase',
      'Monetization-ready releases with integrated ad support',
    ],
  },
  {
    id: 'support',
    title: 'Technical Support',
    summary:
      'A dedicated team to troubleshoot, resolve, and optimize tech issues so operations stay smooth.',
    details:
      'Monitoring, access, networking, and day-to-day IT reliability — so your tools stay available when people need them.',
    outcomes: [
      'Faster incident detection and resolution',
      'Hardened identity, network, and workspace hygiene',
      'Training that raises baseline independence across teams',
    ],
  },
  {
    id: 'web-pentesting',
    title: 'Web Pentesting',
    summary:
      'Find and fix real attack paths before attackers do — focused web app testing grounded in hands-on vulnerability research.',
    details:
      'Authenticated and unauthenticated assessments of your web apps and APIs: recon, exploitation proof, prioritized remediations, and clear reports your engineers can act on.',
    outcomes: [
      'Actionable findings with reproduction steps and severity',
      'Coverage of auth, access control, injection, and business logic',
      'Remediation guidance that shortens time-to-fix',
    ],
  },
]

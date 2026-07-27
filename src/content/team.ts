export type TeamMember = {
  id: string
  name: string
  role: string
  summary: string
  highlights: string[]
  skills: string[]
  image: string
  portfolioUrl: string
  portfolioLabel: string
}

export const team: TeamMember[] = [
  {
    id: 'milky',
    name: 'Melquizedek Felix',
    role: 'Full-Stack · Rails & React Systems',
    summary:
      'Builds end-to-end Rails/React systems that replace subscription tools and give ops, HR, and management clear visibility.',
    highlights: [
      'Saved $43,200/year vs subscription timekeeping',
      'Event systems supporting 300+ people weekly',
      'Access control and server-room monitoring in production',
    ],
    skills: [
      'Ruby on Rails',
      'React',
      'PostgreSQL',
      'Docker',
      'Active Directory',
      'Observability',
      'AI tooling',
      'LLM integrations',
    ],
    image: '/team/milky.png',
    portfolioUrl: 'http://milkyfelix.com/',
    portfolioLabel: 'milkyfelix.com',
  },
  {
    id: 'von',
    name: 'Von Aralar',
    role: 'Full-Stack · Backend & Security',
    summary:
      'Designs secure, scalable full-stack backends — NestJS, APIs, microservices, and hardening grounded in vulnerability research.',
    highlights: [
      'Improved backend performance with frontend partners',
      'Hardened systems through penetration testing',
      'Uncovered 500+ vulnerabilities via research and bug bounty',
    ],
    skills: [
      'TypeScript',
      'NestJS',
      'Node.js',
      'Python',
      'Flask',
      'React',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'CQRS',
      'Bug bounty',
      'AI tooling',
      'LLM integrations',
    ],
    image: '/team/von.png',
    portfolioUrl: 'https://aralar.netlify.app/about',
    portfolioLabel: 'aralar.netlify.app',
  },
  {
    id: 'rojhon',
    name: 'Rojhon Buenaventura',
    role: 'Full-Stack · Web, Games & Docs',
    summary:
      'Ships full-stack web products (MERN/Next.js), Godot games, and clear technical documentation.',
    highlights: [
      'Full-stack web apps across modern stacks',
      '2D/3D games with Godot (GDScript & C#)',
      'Technical writing for docs and tutorials',
    ],
    skills: [
      'Godot',
      'MERN',
      'Next.js',
      'SQL',
      'Git',
      'Jest',
      'Technical Writing',
      'AI tooling',
      'LLM integrations',
    ],
    image: '/team/rojhon.png',
    portfolioUrl: 'https://rojhonbuenaventura.com/',
    portfolioLabel: 'rojhonbuenaventura.com',
  },
]

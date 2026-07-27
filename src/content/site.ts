export const site = {
  name: 'Primotech',
  tagline: '@Primotech',
  description:
    'Full-stack engineering for web, apps, ops systems, and security — from idea to production — by a Philippines-based team.',
  url: 'https://primotonic.com',
  email: 'hello@primotonic.com',
  social: {
    handle: '@Primotech',
  },
  promise:
    'Full-stack web, mobile, and ops systems — plus pentesting — built end-to-end by a Philippines-based engineering team.',
  headline: 'Full-stack systems that actually run the work.',
  ctaPrimary: 'Start a project',
  ctaSecondary: 'Our services',
} as const

export const outcomes = [
  { value: '$80K–$325K', label: 'Platform revenue managed' },
  { value: '$200K+', label: 'Annual savings delivered' },
  { value: '10K+', label: 'Users supported in production' },
  { value: '500+', label: 'Vulnerabilities researched' },
] as const

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
] as const

export const serviceOptions = [
  'Full-Stack Web Development',
  'Mobile Application',
  'Technical Support',
  'Web Pentesting',
  'Internal Systems',
  'Casino / iGaming',
  'Loan collections (banking)',
  'Game development (NDA)',
  'Not sure yet',
] as const

export const budgetOptions = [
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000+',
  'Let’s discuss',
] as const

export const timelineOptions = [
  'ASAP',
  '1–2 months',
  '3–6 months',
  'Flexible',
] as const

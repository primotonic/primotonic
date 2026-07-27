export type Faq = {
  question: string
  answer: string
}

/** FAQs for on-page content + FAQPage rich results in Google. */
export const faqs: Faq[] = [
  {
    question: 'What does Primotonic build?',
    answer:
      'Primotonic is a Philippines-based full-stack engineering team. We build web platforms, mobile apps, internal ops systems, and run web pentesting — from idea through production support.',
  },
  {
    question: 'Do you work with clients outside the Philippines?',
    answer:
      'Yes. We are based in the Philippines and deliver remote full-stack development, security testing, and technical support for teams worldwide.',
  },
  {
    question: 'What stacks do you use?',
    answer:
      'Common stacks include React, TypeScript, NestJS, Node.js, Ruby on Rails, PostgreSQL, Docker, and Godot for game clients — chosen to match the product, not a fixed template.',
  },
  {
    question: 'Can you handle regulated or confidential work?',
    answer:
      'Yes. We have shipped government-approved iGaming platforms, banking collections dashboards, and NDA game clients. Company names and sensitive figures stay confidential when required.',
  },
  {
    question: 'How do we start a project?',
    answer:
      'Email hello@primotonic.com or use the project inquiry form on the Contact page. Share the problem, rough budget, and timeline — we reply with scope questions and a clear next step.',
  },
]

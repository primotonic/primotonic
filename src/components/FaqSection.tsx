import { faqs } from '#/content/faqs'

type FaqSectionProps = {
  className?: string
  title?: string
}

export function FaqSection({
  className = '',
  title = 'Frequently asked questions',
}: FaqSectionProps) {
  return (
    <section className={className} aria-labelledby="faq-heading">
      <p className="section-kicker mb-3">FAQ</p>
      <h2
        id="faq-heading"
        className="display-title m-0 max-w-2xl text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-[var(--ink)]"
      >
        {title}
      </h2>
      <div className="mt-8 flex flex-col gap-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-[var(--line)] bg-white/60 px-4 py-3 open:bg-white/90"
          >
            <summary className="cursor-pointer list-none font-semibold text-[var(--ink)] marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-3">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[var(--brand-primary)] transition group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 mb-1 max-w-2xl text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

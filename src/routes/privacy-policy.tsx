import { createFileRoute } from '@tanstack/react-router'
import { Breadcrumbs } from '#/components/Breadcrumbs'
import { pageHead } from '#/lib/seo'

export const Route = createFileRoute('/privacy-policy')({
  head: () =>
    pageHead({
      title: 'Privacy Policy',
      description:
        'How Primotonic Software Development Services collects, uses, stores, shares, and protects information across its websites, applications, and services.',
      path: '/privacy-policy',
    }),
  component: PrivacyPolicyPage,
})

function PrivacyPolicyPage() {
  return (
    <main className="section-block">
      <div className="page-wrap px-4">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            className="mb-6"
            items={[
              { name: 'Home', path: '/' },
              { name: 'Privacy Policy', path: '/privacy-policy' },
            ]}
          />
          <article className="prose prose-sm max-w-none sm:prose-base prose-headings:font-display prose-headings:text-[var(--ink)] prose-h1:text-3xl prose-h2:mt-10 prose-h2:text-xl prose-p:text-[var(--ink-soft)] prose-li:text-[var(--ink-soft)] prose-strong:text-[var(--ink)]">
            <h1>{'Privacy Policy'}</h1>
            <p>
              <strong>{'Primotonic Software Development Services'}</strong>
            </p>
            <p>
              <strong>{'Effective Date:'}</strong>
              {' October 28, 2026'}
            </p>
            <h2>{'1. Introduction'}</h2>
            <p>
              {
                'Primotonic Software Development Services ("we," "us," or "our") respects your privacy and is committed to protecting your personal information.'
              }
            </p>
            <p>
              {
                'This Privacy Policy explains how information may be collected, used, stored, shared, and protected when you use our mobile applications, websites, and related services (collectively referred to as the "Services").'
              }
            </p>
            <p>
              {
                'This policy applies to applications and services developed and published by Primotonic Software Development Services. Information handling may vary depending on the features and functionality of each application.'
              }
            </p>
            <h2>{'2. Information We Collect'}</h2>
            <p>
              {
                'Depending on the application and its functionality, we may process the following types of information:'
              }
            </p>
            <p>
              <strong>{'Personal Information'}</strong>
            </p>
            <p>
              {
                'Information voluntarily provided by users, such as names, email addresses, account details, and information submitted through our Services.'
              }
            </p>
            <p>
              <strong>{'Application Data'}</strong>
            </p>
            <p>
              {
                'Information created, entered, or stored by users while using an application, including preferences, settings, and other user-generated content.'
              }
            </p>
            <p>
              <strong>{'Device and Technical Information'}</strong>
            </p>
            <p>
              {
                'Certain applications or integrated services may collect technical information, including device type, operating system, application version, device identifiers, diagnostic data, and crash reports.'
              }
            </p>
            <p>
              <strong>{'Usage Information'}</strong>
            </p>
            <p>
              {
                'Where analytics or similar functionality is enabled, information about application interactions and performance may be processed to improve functionality and reliability.'
              }
            </p>
            <p>
              {
                "Not all applications collect these categories of information. Information stored exclusively on a user's device is not necessarily transmitted to or collected by us."
              }
            </p>
            <h2>{'3. How We Use Information'}</h2>
            <p>
              {
                'Depending on the applicable Service, information may be used to:'
              }
            </p>
            <ul>
              <li>{'Provide and maintain application functionality.'}</li>
              <li>{'Save user preferences and application data.'}</li>
              <li>{'Support account registration and authentication.'}</li>
              <li>{'Improve application performance and reliability.'}</li>
              <li>{'Diagnose technical issues and application errors.'}</li>
              <li>{'Respond to inquiries and provide customer support.'}</li>
              <li>{'Protect the security and integrity of our Services.'}</li>
              <li>{'Comply with applicable legal obligations.'}</li>
            </ul>
            <p>
              {
                'We aim to limit information processing to legitimate and disclosed purposes associated with the relevant Service.'
              }
            </p>
            <h2>{'4. Third-Party Services'}</h2>
            <p>
              {
                'Some of our applications may use third-party technologies and service providers to support features such as cloud hosting, authentication, analytics, diagnostics, notifications, and data storage.'
              }
            </p>
            <p>
              {
                'When integrated into an application, these services may process information necessary to perform their functions.'
              }
            </p>
            <p>
              {
                'Third-party providers are responsible for their own applicable privacy practices. Information processed through these services may also be subject to their privacy policies.'
              }
            </p>
            <p>
              {
                'The specific third-party services involved depend on the technologies integrated into each application.'
              }
            </p>
            <h2>{'5. Data Storage and Security'}</h2>
            <p>
              {
                "Depending on the application, user information may be stored locally on the user's device or through remote infrastructure and third-party hosting services."
              }
            </p>
            <p>
              {
                'We recognize the importance of protecting personal information and aim to use appropriate technical and organizational safeguards based on the nature of the information processed.'
              }
            </p>
            <p>
              {
                'Such safeguards may include access restrictions, secure communication methods, and other measures designed to reduce unauthorized access, disclosure, alteration, or loss.'
              }
            </p>
            <p>
              {
                'However, no method of electronic transmission or storage is completely secure.'
              }
            </p>
            <h2>{'6. Data Retention'}</h2>
            <p>
              {
                'Personal information is retained only for as long as reasonably necessary to fulfill the purposes for which it is processed, maintain the relevant Service, resolve disputes, and comply with applicable legal obligations.'
              }
            </p>
            <p>
              {
                'Retention periods may vary depending on the type of information and the functionality of the application.'
              }
            </p>
            <p>
              {
                "Information that is stored only on a user's device remains subject to the storage and deletion capabilities of that device and application."
              }
            </p>
            <p>
              {
                'When information is no longer required, it will be deleted or otherwise handled according to applicable retention and legal requirements.'
              }
            </p>
            <h2>{'7. Data Deletion Requests'}</h2>
            <p>
              {
                'Users may request deletion of personal information associated with our Services by contacting:'
              }
            </p>
            <p>
              <strong>{'hello@primotonic.com'}</strong>
            </p>
            <p>
              {
                'When submitting a deletion request, users should identify the application involved and provide sufficient information to help us locate the relevant records.'
              }
            </p>
            <p>
              {
                'We will review and process verified requests in accordance with applicable privacy laws and legal retention requirements.'
              }
            </p>
            <p>
              {
                'Where an application supports user accounts, additional account deletion options may be provided through the application or an accessible online resource.'
              }
            </p>
            <p>
              {
                'Certain information may be retained when required or permitted by applicable law.'
              }
            </p>
            <h2>{'8. Information Sharing and Disclosure'}</h2>
            <p>
              {
                "Depending on the Service, information may be disclosed to authorized technology providers, hosting providers, and other service providers when necessary to support the application's functionality."
              }
            </p>
            <p>
              {
                'Information may also be disclosed when required by applicable law, a valid legal process, or legitimate security and fraud-prevention needs.'
              }
            </p>
            <p>
              {
                'Our data-sharing practices are governed by the purposes disclosed in this Privacy Policy and applicable privacy requirements.'
              }
            </p>
            <h2>{"9. Children's Privacy"}</h2>
            <p>
              {
                'We recognize the importance of protecting the personal information of children.'
              }
            </p>
            <p>
              {
                'The intended audience and age suitability of each application may differ.'
              }
            </p>
            <p>
              {
                'For any Service designed for or used by children, applicable privacy protections, parental consent requirements, and restrictions on data processing must be observed.'
              }
            </p>
            <p>
              {
                'Parents or guardians who have concerns regarding information associated with a child may contact us at hello@primotonic.com.'
              }
            </p>
            <h2>{'10. User Rights'}</h2>
            <p>
              {
                'Subject to applicable privacy and data protection laws, users may have the right to:'
              }
            </p>
            <ul>
              <li>{'Request access to their personal information.'}</li>
              <li>
                {'Request correction of inaccurate or incomplete information.'}
              </li>
              <li>{'Request deletion of eligible personal information.'}</li>
              <li>
                {'Withdraw consent where processing is based on consent.'}
              </li>
              <li>
                {
                  'Object to or request restrictions on certain processing activities.'
                }
              </li>
              <li>
                {
                  'Submit complaints regarding the handling of personal information.'
                }
              </li>
            </ul>
            <p>
              {
                'Users may submit privacy-related inquiries or requests through our official contact email.'
              }
            </p>
            <h2>{'11. International Data Processing'}</h2>
            <p>
              {
                "Depending on the infrastructure and third-party services used by an application, information may be processed or stored outside the user's country of residence."
              }
            </p>
            <p>
              {
                'Where international data transfers occur, we aim to apply safeguards and procedures required by applicable data protection laws.'
              }
            </p>
            <h2>{'12. Changes to This Privacy Policy'}</h2>
            <p>
              {
                'We may update this Privacy Policy to reflect changes in our applications, services, technologies, operational practices, or legal obligations.'
              }
            </p>
            <p>
              {'Any updates will be published with a revised effective date.'}
            </p>
            <p>
              {
                'We encourage users to review this Privacy Policy periodically to stay informed about our information-handling practices.'
              }
            </p>
            <p>
              {
                'Where legally required, additional notice or consent will be provided for material changes.'
              }
            </p>
            <h2>{'13. Contact Us'}</h2>
            <p>
              {
                'For questions, concerns, feedback, or requests regarding this Privacy Policy, please contact us using the following information:'
              }
            </p>
            <p>
              <strong>{'Company Name:'}</strong>
              {' Primotonic Software Development Services'}
            </p>
            <p>
              <strong>{'Email Address:'}</strong>
              {' hello@primotonic.com'}
            </p>
            <p>
              <strong>{'Website:'}</strong>
              {' https://primotonic.com'}
            </p>
            <p>
              <strong>{'Country:'}</strong>
              {' Philippines'}
            </p>
            <p>
              {
                'We are committed to addressing privacy-related concerns and handling personal information responsibly.'
              }
            </p>
            <hr />
            <p>
              {
                '© 2026 Primotonic Software Development Services. All rights reserved.'
              }
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}

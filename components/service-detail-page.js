import Link from 'next/link';
import CTAsection from './cta-section';

export default function ServiceDetailPage({ service }) {
  const faqEntries = (service.faq ?? []).map((entry) => {
    if (Array.isArray(entry)) {
      return { question: entry[0], answer: entry[1] };
    }
    return entry;
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.sdiotecs.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://www.sdiotecs.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://www.sdiotecs.com/services/${service.slug}`,
      },
    ],
  };

  const sections = service.sections ?? [
    {
      heading: 'What the Scope Includes',
      list: service.scope ?? [],
    },
    {
      heading: 'Platforms We Deliver On',
      paragraphs: service.technical ? [service.technical] : [],
    },
  ];

  const ctaLink = service.cta ?? { label: 'Contact Us', href: '/contact-us' };

  return (
    <main>
      <section className="bg-linear-to-r from-sky-700 to-sky-950 px-6 pb-16 pt-32 text-white">
        <div className="container mx-auto max-w-5xl md:px-16">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-sky-200">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-white">Services</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{service.title}</li>
            </ol>
          </nav>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-200">Building Automation Services</p>
          <h1 className="max-w-5xl text-3xl font-headline font-bold md:text-5xl">{service.title}</h1>
          <p className="mt-6 max-w-5xl text-lg leading-8 text-gray-100">{service.intro}</p>
          {service.cta && (
            <Link
              href={ctaLink.href}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-sky-800 shadow-sm transition hover:bg-sky-50"
            >
              {ctaLink.label}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto grid max-w-5xl gap-12 md:px-16 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-6 text-2xl font-headline font-bold text-slate-900 md:text-3xl">{section.heading}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mb-4 leading-8 text-gray-700">{paragraph}</p>
                ))}

                {section.list && (
                  <ul className="space-y-3 text-gray-700">
                    {section.list.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-700" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.groups && (
                  <div className="space-y-6">
                    {section.groups.map((group) => (
                      <div key={group.subheading}>
                        <h3 className="mb-3 text-lg font-semibold uppercase tracking-wide text-slate-900">{group.subheading}</h3>

                        {Array.isArray(group.items) && group.items.length === 1 ? (
                          <p className="leading-8 text-gray-700">{group.items[0]}</p>
                        ) : (
                          <ul className="space-y-3 text-gray-700">
                            {group.items.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-700" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.table && (
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                    <table className="min-w-full border-collapse text-left text-sm text-slate-700">
                      <thead className="bg-sky-50 text-slate-900">
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} className="border-b border-slate-200 px-4 py-3 font-semibold">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.schema || row.title} className="align-top">
                            <td className="border-b border-slate-200 px-4 py-4 font-semibold text-slate-900">
                              {row.schema || row.title}
                            </td>
                            <td className="border-b border-slate-200 px-4 py-4 leading-7 text-gray-700">
                              {row.fits || row.when || row.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.externalLink && (
                  <a
                    href={section.externalLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block font-semibold text-sky-700 hover:text-sky-900"
                  >
                    {section.externalLink.label} <span aria-hidden="true">→</span>
                  </a>
                )}
              </section>
            ))}

            {service.externalLink && (
              <a
                href={service.externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-semibold text-sky-700 hover:text-sky-900"
              >
                {service.externalLink.label} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>

          <aside className="h-fit rounded-lg bg-sky-50 p-6 shadow-md">
            <h2 className="text-xl font-headline font-bold text-slate-900">Start a Project</h2>
            <p className="mt-3 text-sm leading-6 text-gray-700">Tell us what you are building, upgrading or trying to make measurable.</p>
            <Link
              href={ctaLink.href}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-linear-to-br from-sky-700 to-slate-900 px-5 py-3 text-center font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              {ctaLink.label}
            </Link>
          </aside>
        </div>
      </section>

      {faqEntries.length > 0 && (
        <section className="bg-gray-100 px-6 py-16">
          <div className="container mx-auto max-w-5xl md:px-16">
            <h2 className="mb-8 text-2xl font-headline font-bold text-slate-900 md:text-3xl">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqEntries.map(({ question, answer }) => (
                <article key={question}>
                  <h3 className="text-lg font-semibold text-slate-900">{question}</h3>
                  <p className="mt-2 leading-7 text-gray-700">{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAsection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}

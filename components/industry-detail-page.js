import Link from 'next/link';

export default function IndustryDetailPage({ industry }) {
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
                                <Link href="/industries" className="hover:text-white">Industries</Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li aria-current="page" className="text-white">{industry.title}</li>
                        </ol>
                    </nav>

                    <h1 className="max-w-4xl text-3xl font-headline font-bold md:text-5xl">
                        {industry.title}
                    </h1>

                    <h2 className="mt-6 max-w-4xl text-2xl font-headline font-semibold text-sky-100 md:text-4xl">
                        {industry.headline}
                    </h2>
                </div>
            </section>

            <section className="px-6 py-16">
                <div className="container mx-auto max-w-5xl md:px-16">
                    <div className="space-y-8">
                        <p className="text-lg leading-8 text-gray-700">{industry.body}</p>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                            <h3 className="mb-5 text-xl font-bold text-slate-900">Core capabilities</h3>
                            <ul className="space-y-4 text-gray-700">
                                {industry.capabilities.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-700" aria-hidden="true" />
                                        <span className="leading-7">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {industry.proof && (
                            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Proof</p>
                                <p className="mt-3 text-lg leading-8 text-slate-800">{industry.proof}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="bg-slate-900 px-6 py-16 text-white">
                <div className="container mx-auto max-w-5xl text-center md:px-16">
                    <h3 className="text-2xl font-headline font-bold md:text-4xl">
                        Need a solution for this sector?
                    </h3>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-200">
                        We can scope the right controls, data model and reporting approach for your environment.
                    </p>
                    <Link
                        href="/contact-us"
                        className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-sky-800 shadow-sm transition hover:bg-sky-50"
                    >
                        Talk to us about your project
                    </Link>
                </div>
            </section>
        </main>
    );
}

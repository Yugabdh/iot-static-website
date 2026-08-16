import React from 'react'

const IndustriesSection = () => {
    const industries = [
        {
            title: 'Pharmaceutical & Cleanroom',
            description:
                'GMP-classified environments where the reporting is as regulated as the control.',
        },
        {
            title: 'Data Centres & Hyperscale',
            description:
                'High point-count estates, strict change control, and integration to client-mandated cloud standards.',
        },
        {
            title: 'Commercial Offices & Campuses',
            description:
                'Multi-building estates where energy performance, tenant comfort and a single pane of glass all have to coexist.',
        },
        {
            title: 'Manufacturing & Industrial',
            description:
                'Utilities monitoring, plant room automation and production-adjacent environmental control.',
        },
    ]

    return (
        <section className="relative overflow-hidden bg-white my-24 sm:my-28 lg:my-32">
            <div className="container mx-auto px-6 md:px-16">
                <div className="mx-auto max-w-6xl">
                    {/* Heading */}
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-block rounded-full bg-sky-700/10 px-4 py-1 text-sm font-medium text-sky-700">
                            Industries
                        </span>

                        <h2 className="mt-3 mb-5 font-headline text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Where We Work
                        </h2>

                        <div className="flex justify-center">
                            <div className="h-1 w-16 bg-sky-700" />
                        </div>
                    </div>

                    {/* Industries */}
                    <div className="mt-14 grid gap-5 md:grid-cols-2">
                        {industries.map((industry, index) => (
                            <article
                                key={industry.title}
                                className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg sm:p-8"
                            >
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-700 text-sm font-bold text-white">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <span
                                        className="text-2xl font-light text-slate-300 transition-colors group-hover:text-sky-200"
                                        aria-hidden="true"
                                    >
                                        →
                                    </span>
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
                                    {industry.title}
                                </h3>

                                <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                                    {industry.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndustriesSection;
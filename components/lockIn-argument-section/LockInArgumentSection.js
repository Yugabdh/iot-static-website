import React from 'react'
import Link from 'next/link'

const LockInArgumentSection = () => {
    const supportingPoints = [
        {
            title: 'Open protocols by default',
            description:
                'BACnet/IP, Modbus, LonWorks, MQTT v5 and REST. Proprietary integration only where you explicitly require it.',
        },
        {
            title: 'Portable data models',
            description:
                'Your points are tagged to published schemas, so any analytics or fault-detection platform can read them without a translation project.',
        },
        {
            title: 'Complete handover',
            description:
                'Licences, backups, source files and documentation transferred in full at project close. No hostage assets.',
        },
    ]

    return (
        <section
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat my-24 sm:my-28 lg:my-32"
            style={{ backgroundImage: 'url(/images/dots.png)' }}
        >
            <div className="container relative z-10 mx-auto px-6 md:px-16">
                <div className="mx-auto max-w-6xl">
                    {/* Section heading */}
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="inline-block rounded-full bg-sky-700/30 px-4 py-1 text-sm font-medium text-sky-600">
                            The Lock-In Argument
                        </span>

                        <h2 className="mt-3 mb-5 font-headline text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Your Building Data Should Outlive Your Controls Contractor
                        </h2>

                        <div className="mb-8 flex justify-center">
                            <div className="h-1 w-16 bg-sky-700" />
                        </div>

                        <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                            Most building management systems quietly lock you in.
                            Proprietary point naming, closed drivers, licence-gated
                            integration, graphics only one contractor can open.
                            Individually, each is a small compromise made under
                            programme pressure. Together they mean that five years
                            later, changing supplier costs more than living with the
                            one you have.
                        </p>

                        <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                            We build the opposite. Open protocols, published data
                            schemas, and complete handover of everything we produce.
                            Station backups, licences, source graphics, as-built
                            documentation, tagging dictionaries and administrator
                            credentials are yours from day one. If you ever choose to
                            replace us, your system keeps running. We think that is
                            the only honest way to sell an open framework.
                        </p>
                    </div>

                    {/* Supporting points */}
                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {supportingPoints.map((point, index) => (
                            <div
                                key={point.title}
                                className="rounded-xl border border-slate-200 bg-white/90 p-7 text-left shadow-sm backdrop-blur-sm"
                            >
                                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-700 text-lg font-bold text-white">
                                    {index + 1}
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-slate-900">
                                    {point.title}
                                </h3>

                                <p className="text-base leading-relaxed text-gray-600">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/why-vendor-neutral"
                            className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-linear-to-br from-sky-700 to-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-slate-300 sm:w-auto"
                        >
                            Read: the real cost of a locked-in BMS
                            <span className="ml-2" aria-hidden="true">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LockInArgumentSection
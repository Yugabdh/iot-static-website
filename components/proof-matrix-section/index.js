import React from 'react'

const ProofMetricsSection = () => {
    const metrics = [
        {
            value: '20,000+',
            label: 'Points integrated',
        },
        {
            value: '7',
            label: 'Cities',
        },
        {
            value: '10',
            label: 'Projects delivered',
        },
    ]

    return (
        <section className="relative overflow-hidden bg-sky-700 py-16 sm:py-20 lg:py-24">
            <div className="container relative z-10 mx-auto px-6 md:px-16">
                <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="px-6 py-7 text-center first:pt-0 last:pb-0 sm:px-8 sm:py-2"
                        >
                            <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                {metric.value}
                            </div>

                            <div className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-white/80 sm:text-base">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle decorative shapes */}
            <div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
                aria-hidden="true"
            />

            <div
                className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10"
                aria-hidden="true"
            />
        </section>
    )
}

export default ProofMetricsSection;
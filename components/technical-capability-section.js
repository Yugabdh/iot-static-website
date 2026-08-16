import React from 'react'

const TechnicalCapabilitySection = () => {
    const capabilities = [
        {
            category: 'Protocols',
            items: [
                'BACnet/IP',
                'BACnet MS/TP',
                'Modbus TCP & RTU',
                'LonWorks',
                'M-Bus',
                'OPC UA',
                'MQTT v5',
                'REST / JSON',
            ],
        },
        {
            category: 'Platforms',
            items: [
                'Tridium Niagara 4',
                'LOYTEC L-INX & L-IOB',
                'EasyIO',
                'N3uron',
                'Grafana',
                'InfluxDB',
                'PostgreSQL',
            ],
        },
        {
            category: 'Data models',
            items: [
                'Project Haystack',
                'Brick Schema',
                'Google Digital Buildings',
                'UDMI',
            ],
        },
        {
            category: 'Cloud',
            items: [
                'Google Cloud Platform',
                'Microsoft Azure',
                'Amazon Web Services',
                'IQ Next',
            ],
        },
        {
            category: 'Standards',
            items: [
                'ASHRAE Guideline 36',
                'ASHRAE Guideline 0.2',
                'ASHRAE Guideline 14',
                'ISO 50001',
                'ECBC',
            ],
        },
    ]

    return (
        <section
            className="relative overflow-hidden my-24 sm:my-28 lg:my-32"
        >
            <div className="container relative z-10 mx-auto px-6 md:px-16">
                <div className="mx-auto max-w-6xl">
                    {/* Heading */}
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="inline-block rounded-full bg-sky-700/30 px-4 py-1 text-sm font-medium text-sky-600">
                            Technical Capability
                        </span>

                        <h2 className="mt-3 mb-5 font-headline text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Built on Open Standards
                        </h2>

                        <div className="mb-10 flex justify-center">
                            <div className="h-1 w-16 bg-sky-700" />
                        </div>
                    </div>

                    {/* Capability list */}
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm">
                        {capabilities.map((capability, index) => (
                            <div
                                key={capability.category}
                                className={`grid gap-5 px-6 py-7 sm:px-8 lg:grid-cols-[180px_1fr] lg:gap-10 lg:px-10 ${index !== capabilities.length - 1
                                        ? 'border-b border-slate-200'
                                        : ''
                                    }`}
                            >
                                {/* Category */}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">
                                        {capability.category}
                                    </h3>
                                </div>

                                {/* Items */}
                                <div className="flex flex-wrap gap-2.5">
                                    {capability.items.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnicalCapabilitySection;
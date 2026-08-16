import React from 'react'

const AccreditationTrustBar = () => {
    const accreditations = [
        {
            name: 'Tridium Niagara',
            caption:
                'Authorised channel partner, appointed through Tyrrell Products Ltd',
            logo: '/images/accreditations/tridium-niagara.svg',
        },
        {
            name: 'LOYTEC',
            caption: 'Certified partner and systems integrator',
            logo: '/images/accreditations/loytec.svg',
        },
        {
            name: 'EasyIO',
            caption: 'Commissioning and integration specialist',
            logo: '/images/accreditations/easyio.svg',
        },
        {
            name: 'N3uron',
            caption: 'Certified integrator',
            logo: '/images/accreditations/n3uron.svg',
        },
        {
            name: 'Delta Controls',
            caption: 'Commissioning and integration specialist',
            logo: '/images/accreditations/delta-controls.svg',
        },
    ]

    return (
        <section className="overflow-hidden my-24 sm:my-28 lg:my-32">
            <div className="container mx-auto px-6 py-10 md:px-16 lg:py-12">
                <div className="mx-auto max-w-7xl">
                    {/* Section eyebrow */}
                    <div className="mb-8 text-center">
                        <span className="inline-block text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                            Accredited By
                        </span>

                        <div className="mx-auto mt-3 h-1 w-10 bg-sky-700" />
                    </div>

                    {/* Accreditation logos */}
                    <div className="flex flex-wrap justify-center gap-y-10 lg:gap-y-0">
                        {accreditations.map((accreditation) => (
                            <div
                                key={accreditation.name}
                                className="flex w-1/2 flex-col items-center text-center lg:w-1/5"
                            >
                                {/* Logo */}
                                <div className="flex h-16 w-full items-center justify-center px-4">
                                    <img
                                        src={accreditation.logo}
                                        alt={`${accreditation.name} logo`}
                                        className="max-w-37.5 object-contain"
                                    />
                                </div>

                                {/* Caption */}
                                <p className="mt-4 max-w-52.5 text-xs leading-relaxed text-slate-500 sm:text-sm">
                                    {accreditation.caption}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccreditationTrustBar
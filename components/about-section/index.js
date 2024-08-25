import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className="relative py-32 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/images/dots.png)' }}>
            <div className="container mx-auto md:px-16 z-10">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
                        <div className="relative p-10">
                            <div className='flex justify-center'>
                                <Image src="/logo.png" alt="image" layout='responsive' width={100} height={100} />

                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="text-center lg:text-left">
                            <div className="text-center lg:text-left mb-8">
                                <span className="text-sm font-medium text-sky-600 bg-sky-700/30 py-1 px-4 rounded-full">About Us</span>
                                <h2 className="text-3xl font-headline font-bold mt-2 mb-4">Our Featured Solutions</h2>
                                <div className="flex justify-center sm:justify-start lg:justify-start">
                                    <div className="w-16 h-1 bg-sky-700 mb-4"></div>
                                </div>

                                <p className="text-gray-600">
                                    SD IoTecs excels in Intelligent Building solutions, offering a comprehensive suite of services including IBMS commissioning, cloud integration, and semantic ontology tagging.
                                </p>
                                <p className="text-gray-600">
                                    Our expert team delivers top-notch, tailored solutions to meet unique building needs, backed by innovative 3D graphics and advanced analytics. Committed to excellence and driven by the latest technologies, we provide customized, scalable solutions that enhance efficiency and innovation.
                                </p>
                            </div>
                            <div className="my-5 inline-block">
                                <Link
                                    href="/contact-us"
                                    className="text-white bg-gradient-to-br from-sky-700 to-slate-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 rounded-lg px-6 py-3 text-center me-2 mb-2"
                                >
                                    Learn more <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
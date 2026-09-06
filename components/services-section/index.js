import React from 'react';
import services from '@/util/services';
import ServiceCard from './service-card';
import Link from 'next/link';


const ServicesSection = () => {
    return (
        <section className="my-24 sm:my-28 lg:my-32">
            <div className="container mx-auto">
                <div>
                    <div className="text-center mb-8">
                        <span className="text-sm font-medium text-sky-600 bg-sky-700/30 py-1 px-4 rounded-full">What We Offer</span>
                        <h2 className="text-3xl font-headline font-bold mt-2 mb-4">Our Featured Solutions</h2>
                        <div className="w-16 h-1 bg-sky-700 mx-auto mb-4"></div>
                        <p className="text-gray-600">
                            Discover the Cutting-Edge Features of Our Intelligent Building Solutions. Everything You will ever need!
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-8 justify-center">
                        {
                            services.map((service) => (
                                <ServiceCard
                                    key={service.slug}
                                    title={service.shortTitle}
                                    img={service.icon}
                                    info={service.summary}
                                    href={`/services/${service.slug}`}
                                />
                            ))
                        }
                    </div>
                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/services"
                            className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-linear-to-br from-sky-700 to-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-slate-300 sm:w-auto"
                        >
                            See all services
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

export default ServicesSection
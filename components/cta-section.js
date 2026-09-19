import Link from 'next/link'
import React from 'react'

const CTAsection = () => {
    return (
        <section className="relative z-10 overflow-hidden bg-sky-700 px-6 py-14 sm:px-8 sm:py-16">
            <div className="container mx-auto md:px-8 lg:px-16">
                <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:text-left">
                    
                    {/* Copy */}
                    <div className="w-full max-w-2xl lg:w-1/2">
                        <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[40px] md:leading-tight">
                            Tell us about the building.
                        </h2>

                        <p className="text-base font-medium leading-relaxed text-white sm:text-lg sm:leading-relaxed">
                            Send us the specification, the point list, or just a description
                            of what is not working. You will get a reply from an engineer
                            within one working day.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex w-full max-w-md flex-col items-stretch gap-3 lg:w-auto lg:max-w-none lg:items-end">
                        <Link
                            href="/contact-us"
                            className="inline-flex min-w-[280px] items-center justify-center rounded-lg bg-white px-7 py-4 font-semibold text-sky-700 transition hover:bg-sky-50"
                        >
                            Start a Conversation <span className="ml-2">→</span>
                        </Link>

                        {/* <Link
                            href="/contact-us?enquiry=health-check"
                            className="inline-flex min-w-[280px] items-center justify-center rounded-lg border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-sky-700"
                        >
                            Request a Free Data Health Check <span className="ml-2">→</span>
                        </Link> */}
                    </div>
                </div>
            </div>

            {/* Decorative shapes */}
            <span className="absolute top-0 right-0 -z-10">
                <svg
                    width="388"
                    height="250"
                    viewBox="0 0 388 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.05"
                        d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
                        fill="url(#paint0_linear_971_6910)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_971_6910"
                            x1="60.5"
                            y1="111"
                            x2="287"
                            y2="111"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.520507" stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>

            <span className="absolute top-0 right-0 -z-10">
                <svg
                    width="324"
                    height="250"
                    viewBox="0 0 324 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.05"
                        d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
                        fill="url(#paint0_linear_971_6911)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_971_6911"
                            x1="60.5"
                            y1="111"
                            x2="287"
                            y2="111"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.520507" stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>

            <span className="absolute top-4 left-4 -z-10">
                <svg
                    width="43"
                    height="56"
                    viewBox="0 0 43 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.5">
                        <circle cx="40.9984" cy="1.49626" r="1.49626" fill="white" />
                        <circle cx="27.8304" cy="1.49626" r="1.49626" fill="white" />
                        <circle cx="14.6644" cy="1.49626" r="1.49626" fill="white" />
                        <circle cx="1.49642" cy="1.49626" r="1.49626" fill="white" />
                        <circle cx="40.9984" cy="14.6642" r="1.49626" fill="white" />
                        <circle cx="27.8304" cy="14.6642" r="1.49626" fill="white" />
                        <circle cx="14.6644" cy="14.6642" r="1.49626" fill="white" />
                        <circle cx="1.49642" cy="14.6642" r="1.49626" fill="white" />
                        <circle cx="40.9984" cy="27.8302" r="1.49626" fill="white" />
                        <circle cx="27.8304" cy="27.8302" r="1.49626" fill="white" />
                        <circle cx="14.6644" cy="27.8302" r="1.49626" fill="white" />
                        <circle cx="1.49642" cy="27.8302" r="1.49626" fill="white" />
                        <circle cx="40.9984" cy="40.9982" r="1.49626" fill="white" />
                        <circle cx="27.8304" cy="40.9963" r="1.49626" fill="white" />
                        <circle cx="14.6644" cy="40.9982" r="1.49626" fill="white" />
                        <circle cx="1.49642" cy="40.9963" r="1.49626" fill="white" />
                        <circle cx="40.9984" cy="54.1642" r="1.49626" fill="white" />
                        <circle cx="27.8304" cy="54.1642" r="1.49626" fill="white" />
                        <circle cx="14.6644" cy="54.1642" r="1.49626" fill="white" />
                        <circle cx="1.49642" cy="54.1642" r="1.49626" fill="white" />
                    </g>
                </svg>
            </span>
        </section>
    )
}

export default CTAsection;
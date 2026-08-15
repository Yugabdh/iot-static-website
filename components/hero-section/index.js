import Link from "next/link";
import React from "react";
import styles from "./Banner.module.css";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat pt-24 sm:pt-28 lg:pt-32"
            style={{
                backgroundImage: "url(/images/hero-background.png)",
            }}
        >
            <div className="container relative z-10 mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                <div className="flex flex-wrap items-center">
                    {/* Hero content */}
                    <div className="w-full lg:w-1/2">
                        <div className="text-center lg:text-left">
                            <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight font-headline sm:text-4xl lg:text-5xl">
                                <span className="bg-gradient-to-r from-sky-700 to-slate-900 bg-clip-text text-transparent">
                                    Vendor-Neutral
                                </span>{" "}
                                Building Automation, Engineered to Open
                                Standards
                            </h1>

                            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg sm:leading-8 lg:mx-0">
                                SD IoTecs designs, supplies, installs, tests
                                and commissions Building Management Systems —
                                then models the data so it belongs to you, not
                                to your controls vendor. Tridium Niagara and
                                LOYTEC accredited, delivering across Hyderabad,
                                Bengaluru and Pune.
                            </p>

                            {/* CTA buttons */}
                            <div className="mt-7 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                                <Link
                                    href="/contact-us"
                                    className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-gradient-to-br from-sky-700 to-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-slate-300 sm:w-auto"
                                    aria-label="Request a Technical Consultation"
                                >
                                    Request a Technical Consultation
                                </Link>

                                <Link
                                    href="/services"
                                    className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-gray-300 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-gray-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-600 hover:text-sky-700 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 sm:w-auto"
                                    aria-label="Explore Our Capabilities"
                                >
                                    Explore Our Capabilities
                                    <span
                                        aria-hidden="true"
                                        className="ml-2 text-base"
                                    >
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className="mt-10 w-full lg:mt-0 lg:w-1/2">
                        <div className="relative mx-auto max-w-xl">
                            <Image
                                src="/images/hero-header-side.png"
                                alt="SD IoTecs engineers commissioning a building management system control panel"
                                width={500}
                                height={500}
                                sizes="(max-width: 1024px) 90vw, 500px"
                                className="h-auto w-full"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative shapes */}
            <Image
                src="/images/svg/cross.svg"
                className={styles.shape}
                aria-hidden="true"
                alt=""
                height={30}
                width={30}
            />

            <Image
                src="/images/svg/ellipse.svg"
                className={styles.shape}
                aria-hidden="true"
                alt=""
                height={30}
                width={30}
            />

            <Image
                src="/images/svg/rectangle.svg"
                className={styles.shape}
                aria-hidden="true"
                alt=""
                height={20}
                width={20}
            />

            <Image
                src="/images/svg/cross.svg"
                className={styles.shape}
                aria-hidden="true"
                alt=""
                height={30}
                width={30}
            />

            <Image
                src="/images/svg/cross.svg"
                className={styles.shape}
                aria-hidden="true"
                alt=""
                height={30}
                width={30}
            />
        </section>
    );
};

export default HeroSection;
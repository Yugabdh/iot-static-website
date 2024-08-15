import Link from 'next/link'
import React from 'react'
import styles from './Banner.module.css';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="relative pt-32 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/images/hero-background.png)' }}>
            <div className="container mx-auto md:px-16">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-headline font-bold mb-4 leading-tight"><span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-slate-900'>SD Iotecs</span> your intelligent buildings partner</h1>
                            <p className="text-lg max-w-lg mx-auto lg:mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            <div className="my-5 inline-block">
                                <Link
                                    href="/contact-us"
                                    className="text-white bg-gradient-to-br from-sky-700 to-slate-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 rounded-lg px-6 py-3 text-center me-2 mb-2"
                                >
                                    Contact Us
                                </Link>
                                <Link href="/about-us" className="text-sm font-semibold leading-6 text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
                        <div className="relative">
                            <Image src="/images/hero-header-side.png" alt="image" layout="responsive" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
            <Image src="/images/svg/cross.svg" className={styles.shape} alt="shape" height={30} width={30} />
            <Image src="/images/svg/ellipse.svg" className={styles.shape} alt="shape" height={30} width={30} />
            <Image src="/images/svg/rectangle.svg" className={styles.shape} alt="shape" height={20} width={20} />
            <Image src="/images/svg/cross.svg" className={styles.shape} alt="shape" height={30} width={30} />
            <Image src="/images/svg/cross.svg" className={styles.shape} alt="shape" height={30} width={30} />
        </div>
    )
}

export default HeroSection
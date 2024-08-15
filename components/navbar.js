"use client"

import React, { useState } from 'react';
import Link from "next/link";
import { Dialog, DialogPanel } from '@headlessui/react'
import { MenuIcon, XIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

import navigationConfig from '@/util/navigation';
import clsx from 'clsx';

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const path = usePathname();

    return (
        <div className='container mx-auto'>
            <nav aria-label="Global" className="flex items-center justify-between py-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" aria-label="Navigate to the home page" className="flex items-center space-x-2 text-primary font-headline font-bold">
                        <img
                            alt="Logo"
                            src="/iotecs-logo.svg"
                            className="h-8 w-auto"
                        />
                        <span>SD IOTecs</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigationConfig.map((item) => (
                        <Link key={item.title} href={item.href} className="text-primary font-semibold leading-6 text-gray-900">
                            {item.title}
                        </Link>
                    ))}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="container fixed inset-y-0 right-0 py-6 z-50 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" aria-label="Navigate to the home page" className="md:hidden flex items-center space-x-2 text-primary font-headline font-bold">
                            <img
                                alt="Logo"
                                src="/iotecs-logo.svg"
                                className="h-8 w-auto"
                            />
                            <span>SD IOTecs</span>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigationConfig.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </div>
    )
}
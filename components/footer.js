import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="flex flex-col sm:flex-row">
                    <div>
                        <div>
                            <img
                                alt="Logo"
                                src="/iotecs-logo.svg"
                                className="h-8 w-auto"
                            />
                        </div>

                        <p className="mt-4 max-w-xs text-gray-500">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
                            molestias.
                        </p>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:text-sky-700"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <FaFacebookF />

                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:text-sky-700"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <FaInstagram />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:text-sky-700"
                                >
                                    <span className="sr-only">X.com</span>
                                    <FaXTwitter />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:text-sky-700"
                                >
                                    <span className="sr-only">LinkedIn</span>
                                    <FaLinkedinIn
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-8 pt-8 md:pt-0 w-full justify-end">
                        <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
                            <p className="font-medium text-gray-900">Helpful Links</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:text-sky-700">Contact</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:text-sky-700">FAQs</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:text-sky-700">Live Chat</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
                            <p className="font-medium text-gray-900">Helpful Links</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:text-sky-700">Contact</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:text-sky-700">FAQs</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:text-sky-700">Live Chat</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

                <p className="text-xs text-gray-500">&copy; 2024. SD IOTecs. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
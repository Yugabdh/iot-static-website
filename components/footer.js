import Link from "next/link";
import React, { Suspense } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import CurrentYear from "./current-year";

const services = [
    {
        title: "Supply, Installation, Testing & Commissioning",
        href: "/services/bms-supply-installation-testing-commissioning",
    },
    {
        title: "Continuous Commissioning",
        href: "/services/continuous-commissioning",
    },
    {
        title: "Data Modelling & Semantic Tagging",
        href: "/services/data-modelling-semantic-tagging",
    },
    {
        title: "Cloud & IoT Integration",
        href: "/services/cloud-iot-integration",
    },
    {
        title: "Dashboards & Reporting",
        href: "/services/dashboards-and-reporting",
    },
    {
        title: "3D Graphics & Visualisation",
        href: "/services/3d-graphics-visualisation",
    },
];

const companyLinks = [
    {
        title: "About Us",
        href: "/about-us",
    },
    // {
    //     title: "Clients & Projects",
    //     href: "/clients-projects",
    // },
    {
        title: "Technology Partners",
        href: "/technology-partners",
    },
    // {
    //     title: "Industries",
    //     href: "/industries",
    // },
    // {
    //     title: "Why Vendor-Neutral",
    //     href: "/why-vendor-neutral",
    // },
    // {
    //     title: "Insights",
    //     href: "/insights",
    // },
    {
        title: "Contact Us",
        href: "/contact-us",
    },
];

const Footer = () => {

    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                {/* Main footer columns */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {/* COLUMN 1 — IDENTITY */}
                    <div>
                        <div>
                            <img
                                alt="SD IoTecs LLP"
                                src="/iotecs-logo.svg"
                                className="h-10 w-auto"
                            />
                        </div>

                        <h2 className="mt-5 text-lg font-semibold text-gray-900">
                            SD IoTecs LLP
                        </h2>

                        <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600">
                            Vendor-neutral building automation,
                            commissioning and building data engineering.
                        </p>

                        <p className="mt-4 text-sm font-medium leading-6 text-gray-700">
                            Pune&nbsp; · &nbsp;Mumbai&nbsp; · &nbsp;Hyderabad&nbsp; · &nbsp;Bengaluru
                        </p>
                    </div>

                    {/* COLUMN 2 — SERVICES */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Services
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {services.map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="text-sm leading-6 text-gray-600 transition hover:text-sky-700"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3 — COMPANY */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {companyLinks.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm leading-6 text-gray-600 transition hover:text-sky-700"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 4 — GET IN TOUCH */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Get in Touch
                        </h3>

                        <address className="mt-5 not-italic">
                            <p className="text-sm leading-6 text-gray-600">
                                Office No. 203, Rajgruhi Business Hub,
                                Near Gokul Hotel, Kondhwa Budruk,
                                Pune 411048,
                                <br />
                                Maharashtra, India
                            </p>

                            <div className="mt-5 space-y-3">
                                <p>
                                    <a
                                        href="mailto:info@sdiotecs.com"
                                        className="text-sm text-gray-600 transition hover:text-sky-700"
                                    >
                                        info@sdiotecs.com
                                    </a>
                                </p>

                                <p>
                                    <a
                                        href="tel:+919324207852"
                                        className="text-sm text-gray-600 transition hover:text-sky-700"
                                    >
                                        +91 932 4207 852
                                    </a>
                                </p>
                            </div>
                        </address>

                        {/* LinkedIn */}
                        <div className="mt-6">
                            <a
                                href="https://www.linkedin.com/company/sd-iotecs/about/"
                                rel="noreferrer"
                                target="_blank"
                                aria-label="SD IoTecs on LinkedIn"
                                className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 transition hover:text-gray-900"
                            >
                                <FaLinkedinIn
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* LEGAL BAR */}
                <div className="mt-12 border-t border-gray-200 pt-6">
                    <div className="flex flex-col gap-3 text-xs leading-5 text-gray-500 lg:flex-row lg:items-center lg:justify-between">
                        <p>
                            ©{" "}
                            <Suspense fallback={<span></span>}>
                                <CurrentYear />
                            </Suspense>{" "}
                            SD IoTecs LLP. All rights reserved.
                        </p>

                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            <span>
                                LLPIN: ACI-1045
                            </span>

                            <span>
                                GSTIN: 27AFIFS6601N1ZI
                            </span>

                            <Link
                                href="/privacy-policy"
                                className="transition hover:text-sky-700"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms-of-use"
                                className="transition hover:text-sky-700"
                            >
                                Terms of Use
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
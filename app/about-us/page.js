import SectionTitleInfo from '@/components/section-title-info';
import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import { FaCheck } from "react-icons/fa";

import { GrUserExpert, GrTechnology, GrCubes } from "react-icons/gr";

export const metadata = {
  title: 'About SD IoTecs | Tridium Niagara & LOYTEC Accredited Integrator',
  description: 'SD IoTecs LLP is a vendor-neutral building automation integrator accredited by Tridium Niagara, LOYTEC, EasyIO, Delta Controls and N3uron, delivering across Mumbai, Pune, Hyderabad, Bengaluru',
}

const bullets = [
  {
    title: "Unparalleled Expertise",
    desc: "Our team brings together the best in the industry for IBMS commissioning and integration solutions.",
    icon: <GrUserExpert />,
  },
  {
    title: "Tailored Solutions",
    desc: "We customize our offerings to meet the unique needs of each client.",
    icon: <GrCubes />,
  },
  {
    title: "Innovation-Driven",
    desc: "We stay ahead of the curve with the latest technologies and methodologies.",
    icon: <GrTechnology />,
  },
];

const About = () => {
  return (
    <>
      <section className="py-16 mt-16 bg-gray-100" style={{ backgroundImage: 'url(/images/dots.png)' }}>
        <div className="container mx-auto md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold mb-4">A Building Automation Specialist Built by Engineers</h2>
            <div className="w-16 h-1 bg-sky-700 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700">
              SD IoTecs leads the way in Intelligent Building solutions, offering unparalleled expertise and innovation.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4 items-stretch">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h4 className="text-xl font-semibold mb-4 text-sky-700 font-headline">WHO WE ARE</h4>
                <p className="mb-4">
                  SD IoTecs LLP is a building automation systems integrator working across Pune, Mumbai, Hydrebad and Bangalore .
                  We supply, install, test and commission building management systems,
                  and we build the data layer on top of them — semantic models, cloud integration,
                  dashboards and compliance reporting. We hold accreditation from Tridium for the Niagara
                  Framework and from LOYTEC, and we commission on EasyIO. We are deliberately not tied
                  to a single manufacturer.
                </p>

                <h4 className="text-xl font-semibold mb-4 text-sky-700 font-headline">OUR EXPERTISE</h4>
                <p className="mb-4">
                  Our engineers are certified on Niagara 4 and accredited by LOYTEC, and work daily across
                  Niagara, LOYTEC L-INX, EasyIO and mixed third-party BACnet estates. We maintain a
                  written internal competency framework and assess our engineers against it before they are
                  cleared to work unsupervised on a live system. On a running cleanroom or an occupied
                  campus, “trust us” is not a qualification — so we prefer to be specific about what our people
                  are certified to do.
                </p>
                <p className="mb-4">
                  Want to know more?
                </p>
                <Link
                  href="/contact-us"
                  className="text-white bg-gradient-to-br from-sky-700 to-slate-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-slate-300 rounded-lg px-6 py-3 text-center me-2 mb-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h4 className="text-xl font-semibold mb-4 text-sky-700 font-headline">WHAT WE DO</h4>
                <p className="mb-4">We understand that each building has unique needs. That’s why we offer customized
                  solutions tailored to your specific requirements, including:</p>
                <ul className="list-none pl-0 space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-sky-700 mr-2 mt-1 text-2xl font-bold" />
                    <span className="text-gray-700">
                      IBMS Commissioning Services: Continuous commissioning focused on operational excellence.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-sky-700 mr-2 mt-1 text-2xl font-bold" />
                    <span className="text-gray-700">
                      Cloud Integration Solutions: Seamless integration of on-premises IBMS software with cloud-based platforms.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-sky-700 mr-2 mt-1 text-2xl font-bold" />
                    <span className="text-gray-700">
                      Semantic Ontology Tagging: Adhering to industry-leading standards such as Google Digital Buildings, Haystack, and Brick schema.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-sky-700 mr-2 mt-1 text-2xl font-bold" />
                    <span className="text-gray-700">
                      On-Prem Device Management via Cloud: Expertise in interfaces like UDMI for superior device management.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-sky-700 mr-2 mt-1 text-2xl font-bold" />
                    <span className="text-gray-700">
                      Advanced 3D Graphics and Layouts: Innovative visual representations that set a new standard in the industry.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16">
        <div className="container mx-auto md:px-16">
          <div className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
            <div
              className="flex items-center justify-center w-full lg:w-1/2">
              <div>
                <Image
                  src="/images/svg/about-us.svg"
                  width={400}
                  height={400}
                  alt="Benefits"
                  className={"object-cover"}
                  placeholder="blur"
                  blurDataURL="/images/svg/about-us.svg"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
            </div>

            <div className="flex flex-wrap items-center w-full lg:w-1/2">
              <div>
                <div className="flex justify-center md:justify-normal w-full mt-4">
                  <h3 className="max-w-2xl mt-3 text-3xl font-headline font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
                    Exceptional Team
                  </h3>
                </div>

                <div className="w-full mt-5 text-center md:text-start">
                  <p>
                    Our team is our greatest asset. With specialists in every key area of intelligent building
                    management, from IBMS commissioning to cloud integration, we are equipped to handle
                    even the most complex challenges.
                  </p>
                  <p>
                    Whether it&apos;s fine-tuning PID logic or developing state-of-
                    the-art 3D layouts, our team delivers results that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionTitleInfo
        preTitle="At SD IoTecs"
        title="Our Commitment"
      >
        We commit to three things on every project. That you receive complete, documented
        handover — every licence, backup, source file and credential. That we recommend the
        platform your building needs rather than the one that suits our margin. And that when we
        say a system is commissioned, it has been tested against the specified sequences and there
        is a signed record to prove it.
      </SectionTitleInfo>
      <section className="pt-16">
        <div className="container mx-auto md:px-16">
          <div className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
            <div
              className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
              <div>
                <Image
                  src="/images/svg/choose-us.svg"
                  width={400}
                  height={400}
                  alt="Benefits"
                  className={"object-cover"}
                  placeholder="blur"
                  blurDataURL="/images/svg/choose-us.svg"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
            </div>

            <div className="flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end">
              <div>
                <div className="flex justify-center md:justify-normal w-full mt-4">
                  <h3 className="max-w-2xl mt-3 text-3xl font-headline font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
                    Why choose us?
                  </h3>
                </div>

                <div className="w-full mt-5 text-center">
                  <p className="mb-4">
                    Accredited, not self-declared — Tridium Niagara and LOYTEC accreditation, held and
                    current, with certificates available on request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function Benefit(props) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center shrink-0 mt-1 bg-sky-700 rounded-md w-11 h-11">
        {React.cloneElement(props.icon, {
          className: 'w-7 h-7 text-indigo-50',
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500">
          {props.children}
        </p>
      </div>
    </div>
  );
}

export default About;

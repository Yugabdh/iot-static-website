import React from 'react';
import Image from "next/image";
import { createPageMetadata } from '@/util/seo-metadata';
import partners from '@/util/partners';

export const metadata = createPageMetadata({
  title: 'Technology Partners | Tridium Niagara, LOYTEC, EasyIO, N3uron | SD IoTecs',
  description: 'SD IoTecs holds Tridium Niagara and LOYTEC accreditation and integrates EasyIO and N3uron — selected for openness, not exclusivity.',
  path: '/technology-partners',
});

const PartnerPage = () => {
  return (
    <>
      <section className="bg-linear-to-r from-sky-700 to-sky-950 px-6 pb-16 pt-32 text-white">
        <div className="container mx-auto md:px-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-headline font-bold mb-4 text-white">Our Technology Partners</h1>
            <div className="w-16 h-1 bg-sky-700 mx-auto mb-4"></div>
            <p className="text-lg text-gray-100">
              We hold accreditation with the platform vendors we deliver on, and we choose them for the same reason our clients choose us — because they are open. Accreditation means our engineers are trained and assessed by the manufacturer, that we can supply genuine licensed product, and that we have escalation routes into their technical support when a project needs it.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto md:px-16">
          <div className="grid gap-7 lg:grid-cols-2">
            {partners.map((partner, index) => (
              <Partner
                key={index}
                name={partner.name}
                logo={partner.logo}
                logAlt={partner.logAlt}
                info={partner.info}
                url={partner.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

function Partner(props) {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 py-8 bg-white shadow-md rounded-lg">
      <div className="md:w-1/3 flex justify-center">
        <Image
          src={props.logo}
          alt={props.logAlt}
          width={150}
          height={50}
          className="object-contain"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <div className="md:w-2/3 md:pl-4 pt-8 md:pt-0">
        <h2 className="text-xl font-headline font-bold text-sky-700">{props.name}</h2>
        <p className="mt-2 text-gray-800">
          {props.info}
        </p>
        <a
          href={props.url}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-linear-to-br from-sky-700 to-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-slate-300 sm:w-auto mt-5"
          aria-label="Learn More"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default PartnerPage;

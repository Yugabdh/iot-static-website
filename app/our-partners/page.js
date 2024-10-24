import React from 'react';
import Image from 'next/image';

const PartnerPage = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-r from-sky-700 to-sky-950">
        <div className="container mx-auto md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 text-white">Our Trusted Partners</h2>
            <div className="w-16 h-1 bg-sky-700 mx-auto mb-4"></div>
            <p className="text-lg text-gray-100">
              Hear From Our Partners
            </p>
          </div>
        </div>
      </section>
      <section className="pt-16">
        <div className="container mx-auto md:px-16">
          <div className="flex flex-col gap-7">
            <Partner
              name="N3uron"
              logo="images/svg/partners/n3uron.svg"
              logAlt="n3uron Logo"
              subHeading="We Are Certified Integrator"
              info="SD IoTecs is a certified integrator for the N3uron platform, 
                    offering seamless connectivity and advanced integration solutions for intelligent buildings."
              href="https://www.example.com/contact-us"
            />
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
        />
      </div>
      <div className="md:w-2/3 md:pl-4 pt-8 md:pt-0">
        <h2 className="text-xl font-headline font-bold text-sky-700">{props.name}</h2>
        <h3 className="text-sm text-gray-600">{props.subHeading}</h3>
        <p className="mt-2 text-gray-800">
          {props.info}
        </p>
        <a
          href="https://n3uron.com/"
          className="text-white bg-gradient-to-br from-sky-700 to-slate-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-slate-300 rounded-lg px-6 py-3 text-center inline-block mt-5"
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

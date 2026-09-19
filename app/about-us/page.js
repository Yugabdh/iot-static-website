import SectionTitleInfo from '@/components/section-title-info';
import AccreditationTrustBar from '@/components/accreditation-trust-bar';
import Link from 'next/link';
import { createPageMetadata } from '@/util/seo-metadata';
import Image from 'next/image';

export const metadata = createPageMetadata({
  title: 'About SD IoTecs | Niagara & LOYTEC Accredited',
  description: 'SD IoTecs LLP is a vendor-neutral building automation integrator accredited by Tridium Niagara and LOYTEC, delivering across Hyderabad, Bengaluru and Pune.',
  path: '/about-us',
});

const About = () => {
  return (
    <>
      <section className="mt-16 bg-gray-100 py-16" style={{ backgroundImage: 'url(/images/dots.png)' }}>
        <div className="container mx-auto px-4 md:px-16">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-headline font-bold md:text-5xl">
              A Building Automation Specialist Built by Engineers
            </h1>
            <div className="mx-auto mb-4 h-1 w-16 bg-sky-700" />
            <p className="mx-auto max-w-5xl text-lg leading-8 text-gray-700">
              SD IoTecs LLP is a building automation systems integrator working across Hyderabad, Bengaluru and Pune. We supply, install, test and commission building management systems, and we build the data layer on top of them — semantic models, cloud integration, dashboards and compliance reporting.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-lg sm:p-8">
              <h2 className="mb-4 text-2xl font-headline font-bold text-sky-700">What We Are</h2>
              <p className="mb-4 leading-8 text-gray-700">
                We hold accreditation from Tridium for the Niagara Framework and from LOYTEC, and we commission on EasyIO. We are deliberately not tied to a single manufacturer, and we do not carry a manufacturer&apos;s sales target.
              </p>
              <p className="leading-8 text-gray-700">
                That independence is the whole basis of the business. A tied integrator recommends what they are contracted to sell. We recommend what the building needs, which sometimes means telling a client that the system they already own is fine and does not need replacing.
              </p>
              <p className="mt-4 leading-8 text-gray-700">
                We lose work that way. We keep clients that way.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg sm:p-8">
              <h2 className="mb-4 text-2xl font-headline font-bold text-sky-700">Our Engineers</h2>
              <p className="leading-8 text-gray-700">
                Our engineers are certified on Niagara 4 and accredited by LOYTEC, and work daily across Niagara, LOYTEC L-INX, EasyIO and mixed third-party BACnet estates. We maintain a written internal competency framework and assess against it before an engineer is cleared to work unsupervised on a live system.
              </p>
              <p className="mt-4 leading-8 text-gray-700">
                On a running cleanroom or an occupied campus, &ldquo;trust us&rdquo; is not a qualification. We would rather be specific about what our people are certified to do, and equally specific about what we would bring in a specialist for.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col py-10 bg-slate-900 items-center justify-center text-center">
        {/* Pre-title */}
        <div className="text-sm font-bold tracking-wider text-sky-400">
          At SD IoTecs
        </div>

        {/* Title */}
        <h2 className="max-w-2xl mt-3 text-3xl font-headline font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-4xl">
          What We Commit To
        </h2>

        {/* Commitments list */}
        <div className="max-w-4xl py-6 px-6 md:px-16 text-lg leading-normal text-gray-300 lg:text-xl space-y-5 text-left">
          <p>
            <strong className="font-semibold text-white">Complete handover.</strong>{" "}
            Every licence, backup, source file and credential we create on your
            project is transferred to you at project close. In writing, in the
            contract.
          </p>
          <p>
            <strong className="font-semibold text-white">Honest platform advice.</strong>{" "}
            We recommend the platform your building needs, not the one that suits
            our margin. If that is a manufacturer&apos;s own controls rather than
            an open framework, we will say so.
          </p>
          <p>
            <strong className="font-semibold text-white">Commissioned means tested.</strong>{" "}
            When we say a system is commissioned, it has been tested against the
            specified sequences of operation and there is a signed record to prove
            it. Not a walkthrough, not a demonstration — a record.
          </p>
        </div>
      </section>

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

                <div className="w-full mt-5 text-left">
                  <ul className="space-y-4 text-gray-700">
                    <li className="leading-8">
                      <strong className="font-semibold text-slate-900">Accredited, not self-declared</strong> — Tridium Niagara and LOYTEC accreditation, held and current, with certificates available on request.
                    </li>
                    <li className="leading-8">
                      <strong className="font-semibold text-slate-900">Open by default</strong> — open protocols, published data schemas and complete handover, so you are never held hostage by your own building.
                    </li>
                    <li className="leading-8">
                      <strong className="font-semibold text-slate-900">Regulated-environment experience</strong> — GMP cleanroom and hyperscale campus delivery, where documentation standards are as demanding as the engineering.
                    </li>
                    <li className="leading-8">
                      <strong className="font-semibold text-slate-900">Depth beyond controls</strong> — in-house capability in data modelling, cloud integration and reporting, so the system does not stop at the head end.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4 md:px-16">
          <AccreditationTrustBar />
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4 md:px-16">
          <Link
            href="/technology-partners"
            className="group flex w-full items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
          >
            <span className="text-xl font-semibold tracking-tight text-sky-700 sm:text-3xl">
              See our technology partners
              <span aria-hidden="true" className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;

import Link from 'next/link';
import CTAsection from '@/components/cta-section';
import { createPageMetadata } from '@/util/seo-metadata';

export const metadata = createPageMetadata({
  title: 'Why Vendor-Neutral BMS | Avoiding Lock-In | SD IoTecs',
  description: 'Proprietary BMS lock-in costs more than the original contract. How open protocols, published schemas and full handover protect your investment.',
  path: '/why-vendor-neutral',
});

const lockInSources = [
  {
    title: 'Licences held in the wrong name',
    text: "If your Niagara or supervisory licences are registered to your integrator rather than to you, you do not own your building's control system in any meaningful sense. This is the single most common form of lock-in and the easiest to avoid - ask at tender stage, and require it in the contract.",
  },
  {
    title: 'Proprietary drivers and protocols',
    text: 'Manufacturer-specific protocols mean any future integration has to go through that manufacturer, at their price and on their timeline. Sometimes there is a genuine technical reason. Frequently there is not, and an open BACnet or Modbus interface was available for the same money.',
  },
  {
    title: 'Undocumented point naming',
    text: "A point list nobody can interpret is a barrier to every future project - analytics, cloud integration, retro-commissioning, even routine maintenance. The knowledge lives in one engineer's head, and that engineer works for your contractor.",
  },
  {
    title: 'Compiled-only graphics',
    text: 'If you have the running graphics but not the source files, every change goes back to the original contractor. Over a ten-year building life that is a substantial and entirely avoidable revenue stream for someone else.',
  },
  {
    title: 'Credentials you do not hold',
    text: 'It is surprisingly common for a building owner to have no administrator account on their own system. Everything routine works fine until the day it does not.',
  },
  {
    title: 'Undocumented modifications',
    text: 'Changes made over years without a change log mean nobody - including the incumbent - fully understands the system. That uncertainty is itself a switching cost, because any new contractor has to price the risk of what they cannot see.',
  },
];

const costs = [
  'Pricing power sits with the incumbent at every renewal and every variation, because both sides know what switching would cost.',
  'Data you cannot extract, so analytics, ESG reporting and energy management projects stall before they start.',
  'Stranded capital at refurbishment, when a system that should have been extended has to be replaced instead.',
  'Delay, because integration work that should take days takes months while commercial terms are negotiated.',
  'Compounding rework, as each new contractor works around what they cannot understand rather than correcting it.',
];

const handoverStandard = [
  "All software licences registered in the client's name from purchase, not transferred later",
  'Administrator credentials issued to the client at handover',
  'Station backups and configuration files in native format',
  'Source graphics files, editable',
  'As-built drawings, panel schedules and network diagrams',
  'Points schedule, naming convention document and tag dictionary',
  'Signed point-to-point and functional test records',
  'Complete change log for any work carried out post-handover',
];

const questions = [
  'In whose name will the software licences be registered?',
  'Will we receive administrator credentials at handover, or will you retain sole admin access?',
  'Do we receive editable source graphics files, or only the compiled output?',
  'Which parts of this system use proprietary protocols, and what is the open alternative?',
  'Will you provide a written point-naming convention and tag dictionary?',
  'If we appoint a different contractor in three years, what specifically would they be unable to do?',
  'Can we export our own historical data, in bulk, in an open format, without your involvement?',
  'What exactly is in the handover pack? Please list it in the contract.',
  'Who owns any custom logic, drivers or applications written for this project?',
  'If we integrate a third-party analytics platform later, what will that cost and what will it require from you?',
];

function SectionHeading({ children }) {
  return <h2 className="mb-6 text-2xl font-headline font-bold text-slate-900 md:text-3xl">{children}</h2>;
}

export default function WhyVendorNeutralPage() {
  return (
    <main>
      <section className="bg-linear-to-r from-sky-700 to-sky-950 px-6 pb-16 pt-32 text-white">
        <div className="container mx-auto max-w-5xl md:px-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-200">Vendor-neutral building automation</p>
          <h1 className="max-w-5xl text-3xl font-headline font-bold md:text-5xl">The Real Cost of a Locked-In Building Management System</h1>
          <div className="mt-6 max-w-5xl space-y-4 text-lg leading-8 text-gray-100">
            <p>Nobody signs a contract intending to be locked in. It happens gradually.</p>
            <p>A proprietary driver here because it was quicker. An undocumented point-naming convention there because the programme was tight. Graphics saved in a format only one contractor can open. A licence registered to the integrator rather than the building owner. Individually, each is a small compromise made for a good reason at the time. Together they mean that five years later, changing supplier costs more than living with the one you have.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="container mx-auto max-w-5xl md:px-16">
          <SectionHeading>Where Lock-In Actually Comes From</SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            {lockInSources.map((source, index) => (
              <article key={source.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">{index + 1}</span>
                  <h3 className="pt-1 text-lg font-semibold text-slate-900">{source.title}</h3>
                </div>
                <p className="leading-8 text-gray-700">{source.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-16 sm:py-20">
        <div className="container mx-auto max-w-5xl md:px-16">
          <SectionHeading>What It Costs You</SectionHeading>
          <ul className="space-y-4 text-gray-700">
            {costs.map((cost) => (
              <li key={cost} className="flex items-start gap-3 leading-8">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-sky-700" aria-hidden="true" />
                <span>{cost}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-8 text-gray-700">None of this appears as a line item. It appears as a general sense that the building is expensive to run and difficult to change, which is exactly why it persists for years without being addressed.</p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="container mx-auto max-w-5xl md:px-16">
          <SectionHeading>What Open Actually Means - and What It Does Not</SectionHeading>
          <div className="space-y-4 leading-8 text-gray-700">
            <p>We should be honest about the limits. Open does not mean every component is interchangeable. Controllers are manufacturer-specific. Some equipment genuinely only speaks its own protocol. Any integrator who tells you otherwise is selling you something.</p>
            <p>What open does mean is this: the interfaces between components are published and standard, the data is described in a schema anyone can read, and everything created on your project is handed to you in a form you can use without us. The lock-in that matters is not hardware. It is knowledge and access. Those we hand over completely.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16 text-white sm:py-20">
        <div className="container mx-auto max-w-5xl md:px-16">
          <h2 className="mb-6 text-2xl font-headline font-bold text-white md:text-3xl">Our Handover Standard</h2>
          <p className="mb-8 text-lg leading-8 text-gray-300">This is contractual on every project we deliver.</p>
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {handoverStandard.map((item) => (
              <li key={item} className="flex items-start gap-3 leading-7 text-gray-200">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="container mx-auto max-w-5xl md:px-16">
          <SectionHeading>Ten Questions to Ask Your BMS Contractor Before You Sign</SectionHeading>
          <p className="mb-8 max-w-3xl text-lg leading-8 text-gray-700">Print this. Take it to your next tender interview. The answers will tell you more than the technical submission.</p>
          <ol className="space-y-4">
            {questions.map((question, index) => (
              <li key={question} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <span className="font-semibold text-sky-700">{index + 1}.</span>
                <span className="leading-7 text-gray-700">{question}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 leading-8 text-gray-700">A contractor who answers all ten comfortably is one you can work with for a decade. A contractor who gets uncomfortable around questions six and ten is telling you something important.</p>
        </div>
      </section>

      <CTAsection />
    </main>
  );
}

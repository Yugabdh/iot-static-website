import Link from 'next/link';
import CTAsection from '@/components/cta-section';
import { createPageMetadata } from '@/util/seo-metadata';

export const metadata = createPageMetadata({
  title: 'Clients & Projects | Building Automation | SD IoTecs',
  description: 'See how SD IoTecs delivers building automation, commissioning, data modelling, visualisation and industrial data engineering for clients across India.',
  path: '/clients-and-projects',
});

const clients = [
  {
    name: 'MNC Company',
    descriptor: 'We work with multiple MNC companies as a master system integrator and building automation commissioning expert.',
  },
  {
    name: 'Graylinkx',
    descriptor: 'Customized 3D graphics development for equipment and CPM.',
  },
  {
    name: 'Secutech Automation',
    descriptor: 'Automation systems integration and specialist BMS and data-layer delivery on large campus estates.',
  },
  {
    name: 'Jindal Steel',
    descriptor: 'Integrated steel manufacturing, with industrial data engineering at the Angul plant and a custom edge module for cloud data transport.',
  },
  {
    name: 'Panzer IT',
    descriptor: 'Technology services partner on building data, integration and platform delivery.',
  },
];

const projects = [
  {
    title: 'Estate data modelled to the Google Digital Buildings ontology and onboarded over UDMI',
    client: 'Multinational technology client - engaged as a data modelling vendor',
    whatWeDid: "We were appointed as the data modelling vendor for the client's building estate, mapping equipment and points to the Google Digital Buildings ontology and onboarding devices through the Universal Device Management Interface. The work covered point inventory and normalisation, entity and field mapping against the published ontology, device configuration and payload construction for UDMI, and validation of the resulting model and telemetry against the specification.",
    whyItMattered: 'Google Digital Buildings and UDMI are strict by design. Entities that do not conform and payloads that do not validate are rejected outright, so the work is as much about disciplined naming, documentation and validation as it is about tagging. It is not a schema you can approximate.',
    technology: 'Google Digital Buildings ontology · UDMI · MQTT · BACnet',
  },
  {
    title: 'Specialist Niagara commissioning against sequence of operation, with 3D facility graphics',
    client: 'Multinational client - specialist commissioning and visualisation package',
    whatWeDid: "Specialist commissioning of a Tridium Niagara building automation system, verified against the project's sequence of operation rather than against a functional walkthrough. Alongside the commissioning scope we produced a 3D graphics package for facility visualisation, giving the operations team a spatially accurate view of the plant they are responsible for.",
    whyItMattered: 'Commissioning against the written sequence - rather than confirming that equipment responds to a command - is what separates a system that works on handover day from one that keeps working. It is slower, it produces a defensible record, and it finds the sequence errors that a walkthrough does not.',
    technology: 'Tridium Niagara 4 · BACnet/IP · 3D graphics and facility visualisation',
  },
  {
    title: 'Custom N3uron module streams plant SCADA data to AWS over WebSocket, cutting cloud cost',
    client: 'Jindal Steel - Angul plant, centralised SCADA [confirm contracting entity name]',
    challenge: "Data from the plant's centralised SCADA had to reach AWS, and the client's architecture called for a WebSocket transport rather than a standard off-the-shelf connector. No existing module met the requirement.",
    whatWeDid: "We developed a custom module inside N3uron implementing the client's WebSocket specification, so plant data streams to AWS through a single persistent managed connection rather than through per-message cloud ingestion.",
    result: "The WebSocket architecture substantially reduced the client's cloud ingestion cost compared with the conventional approach, while keeping the data pipeline within a platform the plant team already operates.",
    technology: 'N3uron · custom module development · WebSocket · AWS · industrial SCADA',
  },
  {
    title: 'A single dashboard for campus-wide KPIs',
    client: 'Multinational client - multi-building campus',
    whatWeDid: "We built a custom dashboard bringing the client's campus-wide KPIs into one view, designed around the questions the facilities and operations teams actually ask rather than around the structure of the underlying systems.",
    whyItMattered: 'Campus data is almost always spread across several systems and several screens, which means the person who needs an answer has to assemble it manually and nobody looks at the whole picture regularly. Consolidating it into one intuitive view is what turns reporting from a monthly exercise into a daily habit.',
    technology: 'Grafana, Niagara · REST API · KPI set',
  },
  {
    title: 'Critical-alarm utility with audible alerting and pop-up escalation',
    client: 'Multinational client - critical facility operations',
    whatWeDid: 'We developed a custom alarming utility for extreme-critical alarms. Where a standard alarm console relies on someone watching the screen, this escalates: an audible alert plus a pop-up on the operations dashboard, so a critical condition cannot pass unnoticed on an unattended workstation.',
    whyItMattered: 'In most buildings the truly critical alarms - the handful where minutes matter - sit in the same queue as several hundred routine ones and are acknowledged with the same reflex. Separating them into their own escalation path, with an alert the room cannot ignore, is a small piece of engineering with a disproportionate consequence.',
    technology: 'Custom utility development · audible and visual escalation',
  },
];

function SectionHeading({ children }) {
  return <h2 className="mb-6 text-2xl font-headline font-bold text-slate-900 md:text-3xl">{children}</h2>;
}

function ProjectDetails({ project }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">Project</p>
        <h3 className="text-xl font-headline font-bold text-slate-900 md:text-2xl">{project.title}</h3>
        <p className="text-sm font-medium text-gray-600">{project.client}</p>
      </div>

      <div className="space-y-6 text-gray-700">
        {project.challenge && (
          <div>
            <h4 className="mb-2 font-semibold text-slate-900">The Challenge</h4>
            <p className="leading-8">{project.challenge}</p>
          </div>
        )}
        <div>
          <h4 className="mb-2 font-semibold text-slate-900">What We Did</h4>
          <p className="leading-8">{project.whatWeDid}</p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-slate-900">{project.result ? 'The Result' : 'Why It Mattered'}</h4>
          <p className="leading-8">{project.result || project.whyItMattered}</p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-slate-900">Technology</h4>
          <p className="leading-8 text-sky-800">{project.technology}</p>
        </div>
      </div>
    </article>
  );
}

export default function ClientsAndProjectsPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 px-6 pb-20 pt-32 sm:pb-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-sky-100/70 lg:block" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-sky-600" aria-hidden="true" />
        <div className="container relative mx-auto max-w-6xl md:px-16">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-sky-600" aria-hidden="true" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Clients &amp; Projects</p>
              </div>
              <h1 className="max-w-4xl text-4xl font-headline font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Trusted on Projects That Need Engineering Depth
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-700 sm:text-xl">
                A selection of the clients we work with and the building automation, data engineering and visualisation projects we deliver.
              </p>
            </div>

            <div className="border-l-2 border-sky-600 pl-5 text-sm leading-6 text-slate-600">
              <p className="font-semibold uppercase tracking-wider text-slate-900">Field record</p>
              <p className="mt-2">Controls, data and visualisation delivered in operating environments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="container mx-auto max-w-5xl md:px-16">
          <SectionHeading>Who We Work For</SectionHeading>
          <div className="max-w-4xl space-y-4 text-gray-700">
            <p className="leading-8">Our work divides roughly into two. Some of it is delivered directly for the organisation that owns the building. The rest is delivered as a specialist partner to automation contractors and integrators who need Niagara, data-layer or edge capability on a specific project.</p>
            <p className="leading-8">Both matter to us, and the second is not a lesser category - being the company another integrator calls when a project needs capability they do not hold in-house is a reasonable measure of technical standing.</p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {clients.map((client) => (
              <article key={client.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{client.name}</h3>
                <p className="mt-2 leading-7 text-gray-700">{client.descriptor}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 border-l-4 border-sky-300 bg-sky-50 px-5 py-4 leading-8 text-gray-700">Some of our work sits under confidentiality agreements and is described here without naming the client. We are happy to discuss those projects in more detail under NDA.</p>
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-16 sm:py-20">
        <div className="container mx-auto max-w-5xl md:px-16">
          <SectionHeading>Projects</SectionHeading>
          <p className="mb-8 max-w-4xl text-lg leading-8 text-gray-700">A selection of projects showing how we apply controls engineering, data modelling, cloud integration and visualisation to real operating environments.</p>

          <div className="mb-12 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm text-gray-700">
              <caption className="border-b border-slate-200 px-6 py-4 text-left text-lg font-semibold text-slate-900">Project overview</caption>
              <thead className="bg-sky-50 text-slate-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Project</th>
                  <th className="px-4 py-3 font-semibold">Client</th>
                  <th className="px-4 py-3 font-semibold">Year</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.title} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-4 font-medium text-slate-900">{project.title}</td>
                    <td className="px-4 py-4">{project.client}</td>
                    <td className="whitespace-nowrap px-4 py-4">[Confirm year]</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-8">
            {projects.map((project) => <ProjectDetails key={project.title} project={project} />)}
          </div>
        </div>
      </section>

      <CTAsection />
    </main>
  );
}

import services from '@/util/services';
import ServiceCard from '@/components/services-section/service-card';
import { createPageMetadata } from '@/util/seo-metadata';

export const metadata = createPageMetadata({
  title: 'BMS Services | Integration & Commissioning | SD IoTecs',
  description: 'BMS installation and commissioning, continuous Cx, data modelling, cloud integration, dashboards and 3D graphics. Vendor-neutral delivery across India.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-linear-to-r from-sky-700 to-sky-950 px-6 pb-16 pt-32 text-white">
        <div className="container mx-auto max-w-5xl md:px-16">
          <h1 className="max-w-5xl text-3xl font-headline font-bold md:text-5xl">Building Automation Services, End to End</h1>
          <p className="mt-6 max-w-5xl text-lg leading-8 text-gray-100">
            We work across the full life of a building automation system — from the first design review and panel schedule, through installation and functional testing, to the data model, the cloud connection and the reports your compliance team actually needs. You can engage us for the whole scope or for any single stage of it. Most clients start with one and add the others once they see what the data can do.
          </p>
        </div>
      </section>

      <section className="my-16 px-6 sm:my-20 lg:my-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <h2 className="mb-4 text-2xl font-headline font-bold text-slate-900 md:text-3xl">Choose Where to Start</h2>
            <p className="text-lg leading-8 text-gray-700">
              If you are building or refurbishing, start with supply, installation, testing and commissioning. If the system is already installed but not performing, start with continuous commissioning. If the system works but the data is unusable, start with data modelling.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.shortTitle}
                img={service.icon}
                info={service.summary}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-16">
        <div className="container mx-auto max-w-5xl md:px-16">
          <h2 className="mb-8 text-2xl font-headline font-bold text-slate-900 md:text-3xl">How We Work</h2>
          <div className="space-y-6 text-gray-700">
            <p><strong>Survey before scope.</strong> We do not price work we have not looked at. On existing buildings that means a site survey and a review of what is actually installed against what the drawings say.</p>
            <p><strong>Fixed scope, written down.</strong> You get a scope document that says what is included, what is excluded and what we need from you. Ambiguity at tender stage becomes a variation at handover, and nobody enjoys that conversation.</p>
            <p><strong>One engineer accountable.</strong> Every project has a named lead who is technically responsible from kick-off to defects liability. You will always know who to call.</p>
            <p><strong>Documentation as a deliverable, not an afterthought.</strong> Test records are produced as the tests happen, not reconstructed the week before handover.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
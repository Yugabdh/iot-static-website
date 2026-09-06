import services from '@/util/services';
import ServiceCard from '@/components/services-section/service-card';
import { createPageMetadata } from '@/util/seo-metadata';

export const metadata = createPageMetadata({
  title: 'Building Automation Services | BMS Integration & Commissioning | SD IoTecs',
  description: 'BMS installation and commissioning, continuous Cx, semantic data modelling, cloud integration, dashboards and 3D graphics. Vendor-neutral delivery across India.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-linear-to-r from-sky-700 to-sky-950 px-6 pb-16 pt-32 text-white">
        <div className="container mx-auto max-w-5xl md:px-16">
          <h1 className="max-w-5xl text-3xl font-headline font-bold md:text-5xl">Building Automation Services, End to End</h1>
          <p className="mt-6 max-w-5xl text-lg leading-8 text-gray-100">
            We work across the full life of a building automation system — from the first design review 
            and panel schedule, through installation and functional testing, to the data model, the cloud 
            connection and the reports your compliance team actually needs. You can engage us for the 
            whole scope or for any single stage of it.
          </p>
        </div>
      </section>

      <section className="my-16 px-6 sm:my-20 lg:my-24">
        <div className="container mx-auto max-w-7xl">
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
    </main>
  );
}
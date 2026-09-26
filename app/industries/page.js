import Link from 'next/link';
import industries from '@/util/industries';
import { createPageMetadata } from '@/util/seo-metadata';

export const metadata = createPageMetadata({
  title: 'Industries | SD IoTecs',
  description: 'Commercial buildings, industrial data, data centres, pharmaceutical cleanrooms, healthcare and hotels. Vendor-neutral automation and data solutions across sectors.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <main>
      <section className="bg-linear-to-r from-sky-700 to-sky-950 px-6 pb-16 pt-32 text-white">
        <div className="container mx-auto max-w-5xl md:px-16">
          <h1 className="max-w-4xl text-3xl font-headline font-bold md:text-5xl">Where We Work</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-sky-100">
            Six sectors. Each judged on a different definition of done.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto max-w-6xl md:px-16">
          <div className="grid gap-5 md:grid-cols-2">
            {industries.map((industry, index) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg sm:p-8"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-700 text-sm font-bold text-white">
                    {industry.eyebrow}
                  </span>

                  <span
                    className="text-2xl font-light text-slate-300 transition-colors group-hover:text-sky-200"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>

                <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
                  {industry.title}
                </h2>

                <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                  {industry.indexDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import IndustryDetailPage from '@/components/industry-detail-page';
import industries from '@/util/industries';
import { createPageMetadata } from '@/util/seo-metadata';

const industry = industries.find(({ slug }) => slug === 'industrial-data');

export const metadata = createPageMetadata({
  title: industry.metaTitle,
  description: industry.metaDescription,
  path: '/industries/industrial-data',
});

export default function IndustrialDataPage() {
  return <IndustryDetailPage industry={industry} />;
}

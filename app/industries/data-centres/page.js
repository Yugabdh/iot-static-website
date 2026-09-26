import IndustryDetailPage from '@/components/industry-detail-page';
import industries from '@/util/industries';
import { createPageMetadata } from '@/util/seo-metadata';

const industry = industries.find(({ slug }) => slug === 'data-centres');

export const metadata = createPageMetadata({
  title: industry.metaTitle,
  description: industry.metaDescription,
  path: '/industries/data-centres',
});

export default function DataCentresPage() {
  return <IndustryDetailPage industry={industry} />;
}

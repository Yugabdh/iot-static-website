import IndustryDetailPage from '@/components/industry-detail-page';
import industries from '@/util/industries';
import { createPageMetadata } from '@/util/seo-metadata';

const industry = industries.find(({ slug }) => slug === 'commercial-buildings');

export const metadata = createPageMetadata({
  title: industry.metaTitle,
  description: industry.metaDescription,
  path: '/industries/commercial-buildings',
});

export default function CommercialBuildingsPage() {
  return <IndustryDetailPage industry={industry} />;
}

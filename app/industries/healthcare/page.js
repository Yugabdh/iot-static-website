import IndustryDetailPage from '@/components/industry-detail-page';
import industries from '@/util/industries';
import { createPageMetadata } from '@/util/seo-metadata';

const industry = industries.find(({ slug }) => slug === 'healthcare');

export const metadata = createPageMetadata({
  title: industry.metaTitle,
  description: industry.metaDescription,
  path: '/industries/healthcare',
});

export default function HealthcarePage() {
  return <IndustryDetailPage industry={industry} />;
}

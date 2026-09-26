import IndustryDetailPage from '@/components/industry-detail-page';
import industries from '@/util/industries';
import { createPageMetadata } from '@/util/seo-metadata';

const industry = industries.find(({ slug }) => slug === 'hotels-resorts');

export const metadata = createPageMetadata({
  title: industry.metaTitle,
  description: industry.metaDescription,
  path: '/industries/hotels-resorts',
});

export default function HotelsResortsPage() {
  return <IndustryDetailPage industry={industry} />;
}

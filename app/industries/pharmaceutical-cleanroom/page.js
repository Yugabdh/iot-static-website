import IndustryDetailPage from '@/components/industry-detail-page';
import industries from '@/util/industries';
import { createPageMetadata } from '@/util/seo-metadata';

const industry = industries.find(({ slug }) => slug === 'pharmaceutical-cleanroom');

export const metadata = createPageMetadata({
  title: industry.metaTitle,
  description: industry.metaDescription,
  path: '/industries/pharmaceutical-cleanroom',
});

export default function PharmaceuticalCleanroomPage() {
  return <IndustryDetailPage industry={industry} />;
}

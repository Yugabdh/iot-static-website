import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';
import { createPageMetadata } from '@/util/seo-metadata';

const service = services.find(({ slug }) => slug === 'continuous-commissioning');

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: '/services/continuous-commissioning',
});

export default function ContinuousCommissioningPage() {
  return <ServiceDetailPage service={service} />;
}

import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';
import { createPageMetadata } from '@/util/seo-metadata';

const service = services.find(({ slug }) => slug === 'fdd-predictive-maintenance');

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: '/services/fdd-predictive-maintenance',
});

export default function FddPredictiveMaintenancePage() {
  return <ServiceDetailPage service={service} />;
}

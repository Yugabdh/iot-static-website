import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';
import { createPageMetadata } from '@/util/seo-metadata';

const service = services.find(({ slug }) => slug === 'cloud-iot-integration');

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: '/services/cloud-iot-integration',
});

export default function CloudIotIntegrationPage() {
  return <ServiceDetailPage service={service} />;
}

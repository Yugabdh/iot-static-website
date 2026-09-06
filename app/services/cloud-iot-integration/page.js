import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';

const service = services.find(({ slug }) => slug === 'cloud-iot-integration');

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function CloudIotIntegrationPage() {
  return <ServiceDetailPage service={service} />;
}

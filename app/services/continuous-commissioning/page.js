import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';

const service = services.find(({ slug }) => slug === 'continuous-commissioning');

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function ContinuousCommissioningPage() {
  return <ServiceDetailPage service={service} />;
}

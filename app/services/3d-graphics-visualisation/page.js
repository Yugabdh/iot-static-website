import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';

const service = services.find(({ slug }) => slug === '3d-graphics-visualisation');

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function ThreeDGraphicsVisualisationPage() {
  return <ServiceDetailPage service={service} />;
}

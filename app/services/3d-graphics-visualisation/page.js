import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';
import { createPageMetadata } from '@/util/seo-metadata';

const service = services.find(({ slug }) => slug === '3d-graphics-visualisation');

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: '/services/3d-graphics-visualisation',
});

export default function ThreeDGraphicsVisualisationPage() {
  return <ServiceDetailPage service={service} />;
}

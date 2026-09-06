import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';
import { createPageMetadata } from '@/util/seo-metadata';

const service = services.find(({ slug }) => slug === 'dashboards-and-reporting');

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: '/services/dashboards-and-reporting',
});

export default function DashboardsAndReportingPage() {
  return <ServiceDetailPage service={service} />;
}

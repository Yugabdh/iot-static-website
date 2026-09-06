import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';

const service = services.find(({ slug }) => slug === 'dashboards-and-reporting');

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function DashboardsAndReportingPage() {
  return <ServiceDetailPage service={service} />;
}

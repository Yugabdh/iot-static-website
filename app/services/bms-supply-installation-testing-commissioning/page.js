import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';
import { createPageMetadata } from '@/util/seo-metadata';

const service = services.find(({ slug }) => slug === 'bms-supply-installation-testing-commissioning');

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: '/services/bms-supply-installation-testing-commissioning',
});

export default function BmsSupplyInstallationTestingCommissioningPage() {
  return <ServiceDetailPage service={service} />;
}

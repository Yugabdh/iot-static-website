import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';

const service = services.find(({ slug }) => slug === 'bms-supply-installation-testing-commissioning');

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function BmsSupplyInstallationTestingCommissioningPage() {
  return <ServiceDetailPage service={service} />;
}

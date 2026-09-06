import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';

const service = services.find(({ slug }) => slug === 'data-modelling-semantic-tagging');

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function DataModellingSemanticTaggingPage() {
  return <ServiceDetailPage service={service} />;
}

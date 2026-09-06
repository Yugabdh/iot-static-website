import ServiceDetailPage from '@/components/service-detail-page';
import services from '@/util/services';
import { createPageMetadata } from '@/util/seo-metadata';

const service = services.find(({ slug }) => slug === 'data-modelling-semantic-tagging');

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: '/services/data-modelling-semantic-tagging',
});

export default function DataModellingSemanticTaggingPage() {
  return <ServiceDetailPage service={service} />;
}

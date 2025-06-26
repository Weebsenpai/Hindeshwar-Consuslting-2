
import { ServiceDetailPage } from '@/components/services/service-detail-page';

export default function ThirdPartyManufacturingPage() {
  const serviceDetails = {
    title: "Third Party Manufacturing of FMCG Products",
    price: "49,999.00",
    description: "Leverage our state-of-the-art infrastructure and expertise for your FMCG product manufacturing. We offer end-to-end third-party manufacturing services, from raw material sourcing to packaging and quality control. Partner with us to scale your production, reduce operational overhead, and ensure your products meet the highest quality standards, all while you focus on branding and marketing.",
    imageSrc: "https://placehold.co/600x600.png",
    imageHint: "factory production line"
  };

  return <ServiceDetailPage {...serviceDetails} />;
}


import { ServiceDetailPage } from '@/components/services/service-detail-page';

export default function FoodCommodityAdvisoryPage() {
  const serviceDetails = {
    title: "Food Commodity Market Advisory Services",
    price: "15,999.00",
    description: "Navigate the volatile food commodity market with our expert advisory services. We provide data-driven insights, risk management strategies, and market forecasts to help you make informed procurement and trading decisions. Our services empower agribusinesses, food processors, and investors to optimize their positions and enhance profitability in the complex world of agricultural commodities.",
    imageSrc: "https://placehold.co/600x600.png",
    imageHint: "market chart analysis"
  };

  return <ServiceDetailPage {...serviceDetails} />;
}

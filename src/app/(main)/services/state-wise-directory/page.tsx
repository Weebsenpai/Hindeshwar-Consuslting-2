
import { ServiceDetailPage } from '@/components/services/service-detail-page';

export default function StateWiseDirectoryPage() {
  const serviceDetails = {
    title: "State Wise Directory Data Providing Services",
    price: "9,999.00",
    description: "Access curated databases of business listings organized by geographic location. Our services furnish accurate and up-to-date information on businesses, including contact details, addresses, and services offered within a particular state. By accessing these directories, you can efficiently target local markets, streamline marketing efforts, and enhance your online presence, connecting with potential customers in specific geographic areas.",
    imageSrc: "https://placehold.co/600x600.png",
    imageHint: "data directory list"
  };

  return <ServiceDetailPage {...serviceDetails} />;
}

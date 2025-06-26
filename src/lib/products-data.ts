
export interface Product {
  id: number;
  name: string;
  slug: string;
  brand: string;
  image: string;
  aiHint?: string;
  moq: string;
  details: {
    businessType: string;
    application: string;
    packagingType: string;
    packagingSize: string;
    countryOfOrigin: string;
    madeFrom: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: '1 Kg Smart Rawa',
    slug: '1-kg-smart-rawa',
    brand: 'Smart',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'rawa packet',
    moq: '2 Ton',
    details: {
      businessType: 'Manufacturer, Exporter, Supplier, Trader',
      application: 'Used for Making Idli, Laddu Etc.',
      packagingType: 'Plastic Pack',
      packagingSize: '1 Kg',
      countryOfOrigin: 'India',
      madeFrom: '100% MP Wheat',
    },
  },
  {
    id: 2,
    name: '500g Smart Poha',
    slug: '500g-smart-poha',
    brand: 'Smart',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'poha packet',
    moq: '1.5 Ton',
    details: {
      businessType: 'Manufacturer, Supplier',
      application: 'Breakfast preparations',
      packagingType: 'Plastic Pack',
      packagingSize: '500g',
      countryOfOrigin: 'India',
      madeFrom: 'Flattened Rice',
    },
  },
  {
    id: 3,
    name: '5 Kg FreshFarms Basmati Rice',
    slug: '5-kg-freshfarms-basmati-rice',
    brand: 'FreshFarms',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'rice bag',
    moq: '5 Ton',
    details: {
      businessType: 'Supplier, Trader',
      application: 'Cooking, Pulao, Biryani',
      packagingType: 'Woven Sack',
      packagingSize: '5 Kg',
      countryOfOrigin: 'India',
      madeFrom: 'Basmati Rice',
    },
  },
  {
    id: 4,
    name: '200g FreshFarms Turmeric Powder',
    slug: '200g-freshfarms-turmeric-powder',
    brand: 'FreshFarms',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'spice packet',
    moq: '500 Kg',
    details: {
      businessType: 'Exporter, Supplier',
      application: 'Spices, Cooking',
      packagingType: 'Pouch',
      packagingSize: '200g',
      countryOfOrigin: 'India',
      madeFrom: 'Dried Turmeric',
    },
  },
  {
    id: 5,
    name: '1 Kg OrganiCo Quinoa',
    slug: '1-kg-organico-quinoa',
    brand: 'OrganiCo',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'quinoa packet',
    moq: '1 Ton',
    details: {
      businessType: 'Manufacturer, Importer',
      application: 'Healthy meals, Salads',
      packagingType: 'Cardboard Box',
      packagingSize: '1 Kg',
      countryOfOrigin: 'Peru',
      madeFrom: 'Organic Quinoa Seeds',
    },
  },
  {
    id: 6,
    name: '500g OrganiCo Raw Honey',
    slug: '500g-organico-raw-honey',
    brand: 'OrganiCo',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'honey jar',
    moq: '250 Kg',
    details: {
      businessType: 'Manufacturer, Supplier',
      application: 'Food, Health Supplement',
      packagingType: 'Glass Jar',
      packagingSize: '500g',
      countryOfOrigin: 'India',
      madeFrom: 'Natural Bee Honey',
    },
  },
];

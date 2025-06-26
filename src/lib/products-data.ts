
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
    "id": 1,
    "name": "Aaharshri Atta",
    "slug": "aaharshri-atta",
    "brand": "Aaahar Shri India Agro Pvt Ltd",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "atta packet",
    "moq": "2.3 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Used for Making Roti, Chapati, etc.",
      "packagingType": "Plastic Pouch",
      "packagingSize": "1kg, 5kg, 10kg",
      "countryOfOrigin": "India",
      "madeFrom": "Whole Wheat"
    }
  },
  {
    "id": 2,
    "name": "Aaharshri Maida",
    "slug": "aaharshri-maida",
    "brand": "Aaahar Shri India Agro Pvt Ltd",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "maida packet",
    "moq": "2.8 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Baking, Snacks",
      "packagingType": "Plastic Pouch",
      "packagingSize": "500g, 1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Refined Wheat"
    }
  },
  {
    "id": 3,
    "name": "Ruby Gold Maida",
    "slug": "ruby-gold-maida",
    "brand": "Aaahar Shri India Agro Pvt Ltd",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "maida packet",
    "moq": "4.1 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Baking, Snacks",
      "packagingType": "Plastic Pouch",
      "packagingSize": "500g, 1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Refined Wheat"
    }
  },
  {
    "id": 4,
    "name": "Aaharshri Bran",
    "slug": "aaharshri-bran",
    "brand": "Aaahar Shri India Agro Pvt Ltd",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "food product",
    "moq": "3.2 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking and Food Preparation",
      "packagingType": "Varies",
      "packagingSize": "Varies",
      "countryOfOrigin": "India",
      "madeFrom": "Varies"
    }
  },
  {
    "id": 5,
    "name": "Super Coin Atta",
    "slug": "super-coin-atta",
    "brand": "Abhani Foods",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "atta packet",
    "moq": "1.5 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Used for Making Roti, Chapati, etc.",
      "packagingType": "Plastic Pouch",
      "packagingSize": "1kg, 5kg, 10kg",
      "countryOfOrigin": "India",
      "madeFrom": "Whole Wheat"
    }
  },
  {
    "id": 6,
    "name": "Kesari Nadan Besan",
    "slug": "kesari-nadan-besan",
    "brand": "Bajrangi Product",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "besan packet",
    "moq": "0.7 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking, Snacks, Batter",
      "packagingType": "Plastic Pouch",
      "packagingSize": "500g, 1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Gram Flour (Chana Dal)"
    }
  },
  {
    "id": 7,
    "name": "Salasar Gold Besan",
    "slug": "salasar-gold-besan",
    "brand": "Bhavya Industries",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "besan packet",
    "moq": "4.9 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking, Snacks, Batter",
      "packagingType": "Plastic Pouch",
      "packagingSize": "500g, 1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Gram Flour (Chana Dal)"
    }
  },
  {
    "id": 8,
    "name": "Canada Mattar Flour",
    "slug": "canada-mattar-flour",
    "brand": "Bhavya Industries",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "food product",
    "moq": "3.5 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking and Food Preparation",
      "packagingType": "Varies",
      "packagingSize": "Varies",
      "countryOfOrigin": "India",
      "madeFrom": "Varies"
    }
  },
  {
    "id": 9,
    "name": "Gajraj Golden Dalia",
    "slug": "gajraj-golden-dalia",
    "brand": "Gajraj Agro Daliya",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "dalia box",
    "moq": "1.8 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Breakfast, Porridge",
      "packagingType": "Cardboard Box",
      "packagingSize": "500g",
      "countryOfOrigin": "India",
      "madeFrom": "Cracked Wheat"
    }
  },
  {
    "id": 10,
    "name": "Gajraj Kesari Rawa",
    "slug": "gajraj-kesari-rawa",
    "brand": "Gajraj Agro Daliya",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "rawa packet",
    "moq": "1.1 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Used for Making Idli, Laddu etc.",
      "packagingType": "Plastic Pouch",
      "packagingSize": "500g, 1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Semolina"
    }
  },
  {
    "id": 11,
    "name": "Gajraj Lapsi",
    "slug": "gajraj-lapsi",
    "brand": "Gajraj Agro Daliya",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "food product",
    "moq": "2.0 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking and Food Preparation",
      "packagingType": "Varies",
      "packagingSize": "Varies",
      "countryOfOrigin": "India",
      "madeFrom": "Varies"
    }
  },
  {
    "id": 12,
    "name": "Soya Chunks",
    "slug": "soya-chunks",
    "brand": "House Of Taste",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "soya chunks",
    "moq": "2.5 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "High-protein meals, Curries",
      "packagingType": "Pouch",
      "packagingSize": "200g, 1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Soybeans"
    }
  },
  {
    "id": 13,
    "name": "Chakki Fresh Atta",
    "slug": "chakki-fresh-atta",
    "brand": "House Of Taste",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "atta packet",
    "moq": "4.5 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Used for Making Roti, Chapati, etc.",
      "packagingType": "Plastic Pouch",
      "packagingSize": "1kg, 5kg, 10kg",
      "countryOfOrigin": "India",
      "madeFrom": "Whole Wheat"
    }
  },
  {
    "id": 14,
    "name": "Compound Hing",
    "slug": "compound-hing",
    "brand": "House Of Taste",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "food product",
    "moq": "2.9 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking and Food Preparation",
      "packagingType": "Varies",
      "packagingSize": "Varies",
      "countryOfOrigin": "India",
      "madeFrom": "Varies"
    }
  },
  {
    "id": 15,
    "name": "Madhuri Cold-Pressed-Non-Refined-Groundnut-Oil",
    "slug": "madhuri-cold-pressed-non-refined-groundnut-oil",
    "brand": "Madhuri Oil",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "oil bottle",
    "moq": "1.3 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking Oil",
      "packagingType": "Plastic Bottle, Tin",
      "packagingSize": "1L, 5L, 15L",
      "countryOfOrigin": "India",
      "madeFrom": "Groundnuts"
    }
  },
  {
    "id": 16,
    "name": "Madhuri Refined-Soybean-Oil",
    "slug": "madhuri-refined-soybean-oil",
    "brand": "Madhuri Oil",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "oil bottle",
    "moq": "4.7 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking Oil",
      "packagingType": "Plastic Bottle, Tin",
      "packagingSize": "1L, 5L, 15L",
      "countryOfOrigin": "India",
      "madeFrom": "Soybeans"
    }
  },
  {
    "id": 17,
    "name": "Madhuri-Filtered-Mustard-Oil",
    "slug": "madhuri-filtered-mustard-oil",
    "brand": "Madhuri Oil",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "oil bottle",
    "moq": "0.6 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking Oil",
      "packagingType": "Plastic Bottle, Tin",
      "packagingSize": "1L, 5L, 15L",
      "countryOfOrigin": "India",
      "madeFrom": "Mustard Seeds"
    }
  },
  {
    "id": 18,
    "name": "Heera Moti Atta",
    "slug": "heera-moti-atta",
    "brand": "Malwa Agro Foods",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "atta packet",
    "moq": "3.3 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Used for Making Roti, Chapati, etc.",
      "packagingType": "Plastic Pouch",
      "packagingSize": "1kg, 5kg, 10kg",
      "countryOfOrigin": "India",
      "madeFrom": "Whole Wheat"
    }
  },
  {
    "id": 19,
    "name": "Heera Moti Bran",
    "slug": "heera-moti-bran",
    "brand": "Malwa Agro Foods",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "food product",
    "moq": "3.8 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking and Food Preparation",
      "packagingType": "Varies",
      "packagingSize": "Varies",
      "countryOfOrigin": "India",
      "madeFrom": "Varies"
    }
  },
  {
    "id": 20,
    "name": "Smart Atta",
    "slug": "smart-atta",
    "brand": "Malwa Agro Foods",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "atta packet",
    "moq": "1.0 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Used for Making Roti, Chapati, etc.",
      "packagingType": "Plastic Pouch",
      "packagingSize": "1kg, 5kg, 10kg",
      "countryOfOrigin": "India",
      "madeFrom": "Whole Wheat"
    }
  },
  {
    "id": 21,
    "name": "Silver Coin Besan",
    "slug": "silver-coin-besan",
    "brand": "Sanghvi Food Pvt Ltd",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "besan packet",
    "moq": "2.4 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking, Snacks, Batter",
      "packagingType": "Plastic Pouch",
      "packagingSize": "500g, 1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Gram Flour (Chana Dal)"
    }
  },
  {
    "id": 22,
    "name": "Silver Coin Maida",
    "slug": "silver-coin-maida",
    "brand": "Sanghvi Food Pvt Ltd",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "maida packet",
    "moq": "2.2 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Baking, Snacks",
      "packagingType": "Plastic Pouch",
      "packagingSize": "500g, 1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Refined Wheat"
    }
  },
  {
    "id": 23,
    "name": "Silver Coin Atta",
    "slug": "silver-coin-atta",
    "brand": "Sanghvi Food Pvt Ltd",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "atta packet",
    "moq": "4.3 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Used for Making Roti, Chapati, etc.",
      "packagingType": "Plastic Pouch",
      "packagingSize": "1kg, 5kg, 10kg",
      "countryOfOrigin": "India",
      "madeFrom": "Whole Wheat"
    }
  },
  {
    "id": 24,
    "name": "Kohinoor Heera Atta",
    "slug": "kohinoor-heera-atta",
    "brand": "Sanghvi Food Pvt Ltd",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "atta packet",
    "moq": "1.7 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Used for Making Roti, Chapati, etc.",
      "packagingType": "Plastic Pouch",
      "packagingSize": "1kg, 5kg, 10kg",
      "countryOfOrigin": "India",
      "madeFrom": "Whole Wheat"
    }
  },
  {
    "id": 25,
    "name": "Sarvottam Chana Daal",
    "slug": "sarvottam-chana-daal",
    "brand": "Shreeji Protein",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "lentils packet",
    "moq": "3.0 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Indian Cuisine, Curries",
      "packagingType": "Plastic Pouch",
      "packagingSize": "1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Gram Lentils"
    }
  },
  {
    "id": 26,
    "name": "Sarvottam Chana Besan",
    "slug": "sarvottam-chana-besan",
    "brand": "Shreeji Protein",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "besan packet",
    "moq": "3.7 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking, Snacks, Batter",
      "packagingType": "Plastic Pouch",
      "packagingSize": "500g, 1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Gram Flour (Chana Dal)"
    }
  },
  {
    "id": 27,
    "name": "Shreeji Pashu Aahar Churi Toor",
    "slug": "shreeji-pashu-aahar-churi-toor",
    "brand": "Shreeji Protein",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "food product",
    "moq": "4.6 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking and Food Preparation",
      "packagingType": "Varies",
      "packagingSize": "Varies",
      "countryOfOrigin": "India",
      "madeFrom": "Varies"
    }
  },
  {
    "id": 28,
    "name": "Shreeji Pashu Aahar Churi Chana",
    "slug": "shreeji-pashu-aahar-churi-chana",
    "brand": "Shreeji Protein",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "food product",
    "moq": "0.5 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking and Food Preparation",
      "packagingType": "Varies",
      "packagingSize": "Varies",
      "countryOfOrigin": "India",
      "madeFrom": "Varies"
    }
  },
  {
    "id": 29,
    "name": "Shreeji Toor Daal",
    "slug": "shreeji-toor-daal",
    "brand": "Shreeji Protein",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "lentils packet",
    "moq": "2.1 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Indian Cuisine, Curries",
      "packagingType": "Plastic Pouch",
      "packagingSize": "1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Toor Lentils"
    }
  },
  {
    "id": 30,
    "name": "Shreeji Chana Besan",
    "slug": "shreeji-chana-besan",
    "brand": "Shreeji Protein",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "besan packet",
    "moq": "1.2 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Cooking, Snacks, Batter",
      "packagingType": "Plastic Pouch",
      "packagingSize": "500g, 1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Gram Flour (Chana Dal)"
    }
  },
  {
    "id": 31,
    "name": "Pasta",
    "slug": "pasta",
    "brand": "Ss Food Industries",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "pasta packet",
    "moq": "4.8 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "Italian cuisine",
      "packagingType": "Plastic Pack",
      "packagingSize": "500g",
      "countryOfOrigin": "India",
      "madeFrom": "Durum Wheat Semolina"
    }
  },
  {
    "id": 32,
    "name": "Soya Chunks",
    "slug": "soya-chunks",
    "brand": "Ss Food Industries",
    "image": "https://placehold.co/600x600.png",
    "aiHint": "soya chunks",
    "moq": "1.4 Ton",
    "details": {
      "businessType": "Manufacturer, Supplier, Exporter",
      "application": "High-protein meals, Curries",
      "packagingType": "Pouch",
      "packagingSize": "200g, 1kg",
      "countryOfOrigin": "India",
      "madeFrom": "Soybeans"
    }
  }
];

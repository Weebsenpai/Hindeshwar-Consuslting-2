
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceSupplyChainPage() {
  const pageTitle = "Supply Chain Management";
  const serviceCategory = "Operational Excellence";

  return (
    <div className="container py-12 md:py-16 text-foreground">
      <Button variant="outline" asChild className="mb-8 group hover:bg-primary/10">
        <Link href="/services">
          <span className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to All Services
          </span>
        </Link>
      </Button>
      <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
        {pageTitle}
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Optimizing flow with our <span className="font-semibold text-primary">{serviceCategory}</span> expertise at Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            Effective {pageTitle} is critical for controlling costs, improving service levels, and enhancing resilience. We help organizations design, optimize, and manage their supply chains for competitive advantage.
          </p>
          <p>
            Our services cover a wide range of areas, from procurement and inventory management to logistics and distribution, utilizing data analytics and best practices to drive efficiency and visibility across your supply network.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Supply Chain Solutions:</h3>
          <ul>
            <li>Supply chain strategy and network design.</li>
            <li>Procurement and strategic sourcing.</li>
            <li>Inventory optimization and demand forecasting.</li>
            <li>Warehouse and logistics management.</li>
            <li>Supply chain visibility and analytics.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="supply chain"
            />
        </div>
      </div>
    </div>
  );
}

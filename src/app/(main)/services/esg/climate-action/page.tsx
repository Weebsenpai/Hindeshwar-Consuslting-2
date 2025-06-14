
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceClimateActionPage() {
  const pageTitle = "Climate Action & Decarbonisation";
  const serviceCategory = "ESG";

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
        Critical focus within our <span className="font-semibold text-primary">{serviceCategory}</span> services at Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            Addressing climate change and pursuing decarbonisation are paramount for businesses aiming for resilience and long-term value creation. We support organizations in developing and implementing strategies to reduce their carbon footprint and adapt to climate-related risks.
          </p>
          <p>
            Our expertise covers carbon accounting, setting science-based targets, identifying renewable energy opportunities, and implementing energy efficiency measures, helping you transition towards a low-carbon economy.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Decarbonisation Pathways:</h3>
          <ul>
            <li>Greenhouse gas (GHG) emissions inventory and footprinting.</li>
            <li>Setting Science-Based Targets (SBTs).</li>
            <li>Renewable energy transition strategies.</li>
            <li>Energy efficiency and operational improvements.</li>
            <li>Climate risk assessment and adaptation planning.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="climate renewable"
            />
        </div>
      </div>
    </div>
  );
}

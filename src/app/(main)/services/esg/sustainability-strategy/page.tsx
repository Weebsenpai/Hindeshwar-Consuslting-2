
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceSustainabilityStrategyPage() {
  const pageTitle = "Sustainability Strategy";
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
        A key pillar of our <span className="font-semibold text-primary">{serviceCategory} (Environmental, Social, and Governance)</span> offerings at Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            Developing a comprehensive {pageTitle} is no longer optional but a core component of long-term business success. We help organizations integrate sustainability into their core business strategy, operations, and value chains.
          </p>
          <p>
            Our services include materiality assessments, goal setting, framework alignment (e.g., GRI, SASB, TCFD), and developing roadmaps for achieving sustainability targets, enhancing brand reputation, and creating stakeholder value.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Strategic Elements:</h3>
          <ul>
            <li>Materiality assessments to identify key ESG issues.</li>
            <li>Stakeholder engagement and dialogue.</li>
            <li>Development of ESG goals and KPIs.</li>
            <li>Integration of sustainability into business processes.</li>
            <li>ESG reporting and communication strategies.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="sustainability future"
            />
        </div>
      </div>
    </div>
  );
}

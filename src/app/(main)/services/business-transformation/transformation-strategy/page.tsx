
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceTransformationStrategyPage() {
  const pageTitle = "Transformation Strategy";
  const serviceCategory = "Business Transformation";

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
        Part of our <span className="font-semibold text-primary">{serviceCategory}</span> offerings at Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            Navigating change requires a clear and robust {pageTitle}. We partner with organizations to define comprehensive strategies that align with their long-term vision, ensuring sustainable growth and adaptation in dynamic markets.
          </p>
          <p>
            Our approach involves a thorough assessment of your current state, identification of key transformation levers, and the development of a prioritized roadmap. We focus on creating strategies that are agile, measurable, and impactful.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Core Components:</h3>
          <ul>
            <li>Vision and goal alignment for transformation.</li>
            <li>Capability assessment and gap analysis.</li>
            <li>Roadmap development with clear milestones.</li>
            <li>Change management and communication planning.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="business vision"
            />
        </div>
      </div>
    </div>
  );
}

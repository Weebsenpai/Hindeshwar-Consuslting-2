
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceOrgEffectivenessOperatingModelPage() {
  const pageTitle = "Operating Model (Organisational Effectiveness)";
  const serviceCategory = "Organisational Effectiveness";

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
        Enhancing performance through <span className="font-semibold text-primary">{serviceCategory}</span> with Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            A fit-for-purpose {pageTitle.replace(' (Organisational Effectiveness)', '')} is central to achieving {serviceCategory}. We work with organizations to design and refine their operating models, ensuring alignment between strategy, structure, processes, people, and technology.
          </p>
          <p>
            This involves clarifying how value is created and delivered, optimizing workflows, defining roles and responsibilities, and establishing governance mechanisms that support agility and efficiency.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Model Optimisation:</h3>
          <ul>
            <li>Alignment of operating model with strategic goals.</li>
            <li>Process streamlining and efficiency gains.</li>
            <li>Structural adjustments for improved collaboration.</li>
            <li>Technology integration to support operations.</li>
            <li>Performance metrics and continuous improvement.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="organizational gears"
            />
        </div>
      </div>
    </div>
  );
}

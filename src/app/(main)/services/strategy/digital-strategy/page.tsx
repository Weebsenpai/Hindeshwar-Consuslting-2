
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceDigitalStrategyPage() {
  const pageTitle = "Digital Strategy";
  const serviceCategory = "Strategy";

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
        Navigating the digital landscape with our <span className="font-semibold text-primary">{serviceCategory}</span> expertise at Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            In today's hyper-connected world, a coherent {pageTitle} is crucial for leveraging technology to achieve business objectives. We help organizations develop strategies that harness digital capabilities to enhance customer experiences, optimize operations, and create new value propositions.
          </p>
          <p>
            Our services include assessing digital maturity, identifying key digital initiatives, and creating a roadmap for digital transformation that aligns with your overall business strategy.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Digital Pillars:</h3>
          <ul>
            <li>Digital maturity and capability assessment.</li>
            <li>Customer journey mapping and digital experience design.</li>
            <li>Data and analytics strategy for digital insights.</li>
            <li>Technology platform and ecosystem strategy.</li>
            <li>Digital operating model and governance.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="digital tech"
            />
        </div>
      </div>
    </div>
  );
}

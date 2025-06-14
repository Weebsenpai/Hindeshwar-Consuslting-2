
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedSection } from "@/components/effects/animated-section";

const pageData = {
  mainTitle: "Digital Transformation Services",
  mainDescription: "Navigate the digital landscape with innovative strategies and expert delivery for lasting impact.",
  subServices: [
    {
      id: "strategy-analysis-digital",
      title: "Strategy & Analysis (Digital)",
      category: "Digital Transformation",
      content: (
        <>
          <p>
            In the realm of Digital Transformation, a robust Strategy & Analysis framework is essential. We help organizations assess their digital maturity, identify opportunities for digital innovation, and formulate strategies that align technology with business objectives.
          </p>
          <p>
            Our analysis delves into market trends, competitive digital landscapes, and internal capabilities to create a clear roadmap for digital evolution, ensuring investments are targeted and outcomes are maximized.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Focus Areas:</h3>
          <ul>
            <li>Digital maturity assessment and benchmarking.</li>
            <li>Analysis of emerging digital technologies and trends.</li>
            <li>Development of digital-first business models.</li>
            <li>Crafting customer-centric digital experience strategies.</li>
          </ul>
        </>
      ),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Digital Strategy & Analysis - Hindeshwar Consulting",
      imageHint: "digital interface"
    },
    {
      id: "innovation",
      title: "Innovation",
      category: "Digital Transformation",
      content: (
        <>
          <p>
            Fostering a culture of Innovation is key to thriving in the digital age. We assist organizations in building innovation frameworks, identifying emerging technologies, and developing new digital products, services, and business models.
          </p>
          <p>
            Our services range from ideation workshops and proof-of-concept development to scaling innovative solutions across the enterprise, helping you stay ahead of the curve and meet evolving customer demands.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Innovation Services:</h3>
          <ul>
            <li>Ideation and design thinking workshops.</li>
            <li>Rapid prototyping and MVP development.</li>
            <li>Incubation and acceleration programs for new ventures.</li>
            <li>Building internal innovation capabilities and culture.</li>
          </ul>
        </>
      ),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Innovation - Hindeshwar Consulting",
      imageHint: "lightbulb idea"
    },
    {
      id: "digital-transformation-delivery",
      title: "Digital Transformation Delivery",
      category: "Digital Transformation",
      content: (
        <>
          <p>
            Successful Digital Transformation Delivery hinges on effective execution. We provide expert program and project management to ensure your digital initiatives are delivered on time, within budget, and to the highest quality standards.
          </p>
          <p>
            Our team employs agile methodologies and robust governance frameworks to manage complex digital projects, from system implementations and platform migrations to the rollout of new digital experiences.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Delivery Expertise:</h3>
          <ul>
            <li>Agile and Waterfall project management.</li>
            <li>Program management for large-scale digital initiatives.</li>
            <li>Vendor selection and management.</li>
            <li>Quality assurance and testing.</li>
            <li>Change management and user adoption strategies.</li>
          </ul>
        </>
      ),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Digital Transformation Delivery - Hindeshwar Consulting",
      imageHint: "project team"
    }
  ]
};

export default function DigitalTransformationPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{pageData.mainTitle}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            {pageData.mainDescription}
          </p>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <div className="mb-12">
          <Button variant="outline" asChild className="group hover:bg-primary/10">
            <Link href="/services">
              <span className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to All Services
              </span>
            </Link>
          </Button>
        </div>

        <div className="space-y-16 md:space-y-24">
          {pageData.subServices.map((service, idx) => {
            const isTextLeft = idx % 2 === 0;
            return (
              <section id={service.id} key={service.id} className="scroll-mt-28">
                <AnimatedSection animationType="fadeIn" delay={50}>
                  <div className="mb-8">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                      Part of our <span className="font-semibold text-primary">{service.category}</span> offerings.
                    </p>
                  </div>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <AnimatedSection
                    animationType={isTextLeft ? "slideInFromLeft" : "slideInFromRight"}
                    delay={150}
                    className={!isTextLeft ? "md:order-last" : ""}
                  >
                    <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
                      {service.content}
                    </div>
                  </AnimatedSection>
                  <AnimatedSection
                    animationType={isTextLeft ? "slideInFromRight" : "slideInFromLeft"}
                    delay={150}
                    className={!isTextLeft ? "md:order-first" : ""}
                  >
                    <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        data-ai-hint={service.imageHint}
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}


import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import strategyImg from "@/assets/images/strategy.jpg"
import architectureImg from "@/assets/images/architecture.jpg"
import dataVisualizationImg from "@/assets/images/dataVisualZtn.jpg"
import { AnimatedSection } from "@/components/effects/animated-section";

const pageData = {
  mainTitle: "Data & Analytics Services",
  mainDescription: "Unlock the power of your data with our comprehensive analytics solutions, from strategy to visualization.",
  subServices: [
    {
      id: "strategy-analysis",
      title: "Strategy & Analysis",
      category: "Data & Analytics",
      content: (
        <>
          <p>
            Our Strategy & Analysis services are designed to empower your organization with actionable insights derived from robust data examination. We help you navigate complex business landscapes by identifying key trends, opportunities, and potential challenges.
          </p>
          <p>
            We specialize in transforming raw data into strategic assets. Our approach combines advanced analytical techniques with deep industry expertise to deliver clear, concise, and impactful recommendations that drive decision-making and foster growth.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Key Benefits:</h3>
          <ul>
            <li>Data-driven decision-making capabilities.</li>
            <li>Enhanced understanding of market dynamics and customer behavior.</li>
            <li>Identification of new revenue streams and optimization opportunities.</li>
            <li>Improved strategic planning and resource allocation.</li>
          </ul>
        </>
      ),
      imageSrc: strategyImg,
      imageAlt: "Data Strategy & Analysis - Hindeshwar Consulting",
      imageHint: "analytics strategy charts"
    },
    {
      id: "architecture-modelling",
      title: "Architecture Centralization & Modelling",
      category: "Data & Analytics",
      content: (
        <>
          <p>
            Effective Architecture Centralization & Modelling is crucial for modern enterprises seeking to streamline operations and enhance data integrity. We assist in designing and implementing centralized data architectures that improve accessibility, security, and governance.
          </p>
          <p>
            Our services include creating comprehensive data models that reflect your business processes, ensuring that your data architecture supports your strategic objectives. This leads to more efficient data management and more reliable analytics.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Our Approach:</h3>
          <ul>
            <li>Assessment of current data architecture and systems.</li>
            <li>Design of scalable and secure centralized architectures.</li>
            <li>Development of detailed data models and governance frameworks.</li>
            <li>Guidance on technology selection and implementation.</li>
          </ul>
        </>
      ),
      imageSrc: architectureImg,
      imageAlt: "Data Architecture & Modelling - Hindeshwar Consulting",
      imageHint: "data architecture network"
    },
    {
      id: "data-visualization",
      title: "Data Visualisation",
      category: "Data & Analytics",
      content: (
        <>
          <p>
            Unlock the power of your data with compelling Data Visualisation. We help you transform complex datasets into intuitive and interactive visual stories that facilitate understanding and drive action.
          </p>
          <p>
            Our experts utilize leading-edge tools and design principles to create dashboards and reports that are not only aesthetically pleasing but also highly functional, enabling stakeholders at all levels to grasp key insights quickly.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Services Include:</h3>
          <ul>
            <li>Custom dashboard design and development.</li>
            <li>Interactive reporting solutions.</li>
            <li>Data storytelling and presentation.</li>
            <li>Training on visualization best practices and tools.</li>
          </ul>
        </>
      ),
      imageSrc: dataVisualizationImg,
      imageAlt: "Data Visualisation - Hindeshwar Consulting",
      imageHint: "charts dashboard visualization"
    }
  ]
};

export default function DataAnalyticsPage() {
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

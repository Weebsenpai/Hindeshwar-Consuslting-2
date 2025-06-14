
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedSection } from "@/components/effects/animated-section";

const pageData = {
  mainTitle: "Operational Excellence Services",
  mainDescription: "Streamline processes, enhance productivity, and drive efficiency across your organization.",
  subServices: [
    {
      id: "process-reengineering",
      title: "Business Process Re-engineering",
      category: "Operational Excellence",
      content: (
        <>
          <p>
            Our Business Process Re-engineering (BPR) services focus on fundamentally rethinking and redesigning your core business processes to achieve dramatic improvements in critical, contemporary measures of performance, such as cost, quality, service, and speed.
          </p>
          <p>
            We help you identify inefficiencies, eliminate non-value-added activities, and leverage technology to create streamlined, agile, and customer-focused operations.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Re-engineering Approach:</h3>
          <ul>
            <li>Current state process analysis and mapping.</li>
            <li>Identification of bottlenecks and inefficiencies.</li>
            <li>Future state process design and modeling.</li>
            <li>Technology enablement and automation strategies.</li>
            <li>Implementation support and performance monitoring.</li>
          </ul>
        </>
      ),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Business Process Re-engineering - Hindeshwar Consulting",
      imageHint: "workflow optimization"
    },
    {
      id: "operating-model",
      title: "Operating Model Design",
      category: "Operational Excellence",
      content: (
        <>
          <p>
            An effective Operating Model Design defines how your organization delivers value to its customers and stakeholders. We assist in designing and implementing operating models that align your structure, processes, people, and technology with your strategic objectives.
          </p>
          <p>
            Whether you're looking to improve efficiency, enhance agility, or support new growth initiatives, our tailored approach ensures your operating model is fit for purpose and future-ready.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Model Components:</h3>
          <ul>
            <li>Organizational structure and governance.</li>
            <li>Core process definition and optimization.</li>
            <li>Roles, responsibilities, and skill requirements.</li>
            <li>Technology and systems architecture.</li>
            <li>Performance management and metrics.</li>
          </ul>
        </>
      ),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Operating Model Design - Hindeshwar Consulting",
      imageHint: "operating model"
    },
    {
      id: "organisation-design",
      title: "Organisation Design",
      category: "Operational Excellence",
      content: (
        <>
          <p>
            Effective Organisation Design ensures that your organizational structure supports your strategy and enables your people to perform at their best. We help you design structures that are agile, efficient, and aligned with your business objectives.
          </p>
          <p>
            Our services include analyzing current structures, defining roles and responsibilities, designing reporting lines, and facilitating the change management process to implement new organizational designs.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Design Principles:</h3>
          <ul>
            <li>Alignment with strategic priorities.</li>
            <li>Clarity of roles, responsibilities, and accountabilities.</li>
            <li>Facilitation of collaboration and communication.</li>
            <li>Scalability and adaptability for future growth.</li>
            <li>Empowerment and development of talent.</li>
          </ul>
        </>
      ),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Organisation Design - Hindeshwar Consulting",
      imageHint: "organization design"
    }
  ]
};

export default function OperationalExcellencePage() {
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

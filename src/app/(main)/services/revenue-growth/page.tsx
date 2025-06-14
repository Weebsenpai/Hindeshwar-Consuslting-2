
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedSection } from "@/components/effects/animated-section";

const pageData = {
  mainTitle: "Revenue Growth Services",
  mainDescription: "Unlock new revenue streams and maximize your market potential with our expert strategies.",
  subServices: [
    {
      id: "sales-channel-management",
      title: "Sales & Channel Management",
      category: "Revenue Growth",
      content: (
        <>
          <p>
            Effective Sales & Channel Management is essential for maximizing market penetration and driving revenue. We help organizations design, optimize, and manage their sales channels, whether direct, indirect, or digital.
          </p>
          <p>
            Our services include channel strategy development, sales process optimization, partner program design, and sales force effectiveness, ensuring your channels are aligned and performing optimally.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Channel Strategies:</h3>
          <ul>
            <li>Go-to-market and channel strategy.</li>
            <li>Sales process design and optimization.</li>
            <li>Partner relationship management (PRM) strategies.</li>
            <li>Sales team structuring and incentivization.</li>
            <li>Digital sales channel development.</li>
          </ul>
        </>
      ),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Sales & Channel Management - Hindeshwar Consulting",
      imageHint: "sales team"
    },
    {
      id: "product-portfolio-management",
      title: "Product & Portfolio Management",
      category: "Revenue Growth",
      content: (
        <>
          <p>
            Strategic Product & Portfolio Management ensures your offerings align with market needs and business objectives. We assist in analyzing market trends, managing the product lifecycle, and optimizing your portfolio for maximum profitability and growth.
          </p>
          <p>
            Our approach involves data-driven decision-making for new product development, product line rationalization, and pricing strategies, ensuring your portfolio remains competitive and valuable.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Portfolio Management:</h3>
          <ul>
            <li>Market research and opportunity analysis.</li>
            <li>New product development (NPD) process optimization.</li>
            <li>Product lifecycle management (PLM).</li>
            <li>Portfolio rationalization and optimization.</li>
            <li>Pricing and monetization strategies.</li>
          </ul>
        </>
      ),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Product & Portfolio Management - Hindeshwar Consulting",
      imageHint: "product portfolio"
    },
    {
      id: "b2b-go-to-market",
      title: "B2B Go-To-Market Strategy",
      category: "Revenue Growth",
      content: (
        <>
          <p>
            A well-defined B2B Go-To-Market Strategy is critical for successfully launching and scaling B2B products and services. We help businesses develop comprehensive strategies that identify target markets, define value propositions, and select optimal sales and marketing channels.
          </p>
          <p>
            Our expertise includes market segmentation, competitive analysis, content strategy, lead generation, and sales enablement to ensure your B2B offerings achieve market traction and revenue targets.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Go-To-Market Pillars:</h3>
          <ul>
            <li>Target audience definition and persona development.</li>
            <li>Value proposition crafting and messaging.</li>
            <li>Channel selection and sales strategy.</li>
            <li>Content marketing and lead generation.</li>
            <li>Sales enablement and training.</li>
          </ul>
        </>
      ),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "B2B Go-To-Market Strategy - Hindeshwar Consulting",
      imageHint: "b2b market"
    }
  ]
};

export default function RevenueGrowthPage() {
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

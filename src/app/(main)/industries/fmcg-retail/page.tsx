
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Zap, LineChart, Users, Settings, Lightbulb, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/effects/animated-section";

export default function FmcgRetailPage() {
  const solutions = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Supply Chain Optimization",
      description: "Enhancing visibility, reducing costs, and improving responsiveness across your supply chain, from sourcing to last-mile delivery."
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Data Analytics & Consumer Insights",
      description: "Leveraging data to understand consumer behavior, personalize experiences, optimize pricing, and improve demand forecasting."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Digital Transformation & E-commerce Strategy",
      description: "Developing and implementing robust digital strategies to enhance online presence, streamline e-commerce operations, and create seamless omnichannel experiences."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Operational Excellence in Retail",
      description: "Improving in-store operations, inventory management, and workforce productivity to enhance customer satisfaction and profitability."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Merchandising & Category Management",
      description: "Optimizing product assortment, placement, and promotion strategies to maximize sales and margin."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Customer Experience & Loyalty",
      description: "Designing and implementing strategies to build lasting customer relationships and foster brand loyalty in a competitive market."
    }
  ];

  return (
    <div className="bg-background text-foreground">
      <AnimatedSection animationType="fadeIn">
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container text-center">
            <div className="inline-block p-4 mb-6 rounded-full bg-primary/10 text-primary">
              <ShoppingCart className="h-12 w-12" />
            </div>
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">FMCG & Retail Solutions</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
              Empowering Fast-Moving Consumer Goods and Retail businesses to thrive in a dynamic marketplace with Hindeshwar Consulting.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <div className="container py-12 md:py-16">
        <Button variant="outline" asChild className="mb-10 group hover:bg-primary/10">
          <Link href="/industries">
            <span className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to All Industries
            </span>
          </Link>
        </Button>

        <section className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animationType="slideInFromLeft" delay={100}>
              <div>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Navigating the Evolving FMCG & Retail Landscape</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert space-y-4">
                  <p>
                    The FMCG and Retail sectors are characterized by rapid shifts in consumer behavior, intense competition, and the increasing importance of digital channels. Success hinges on agility, customer-centricity, and operational efficiency.
                  </p>
                  <p>
                    Hindeshwar Consulting partners with FMCG companies and retailers to develop and implement strategies that drive growth, optimize operations, and enhance customer engagement. We understand the unique pressures of managing perishable goods, fluctuating demand, and multi-channel environments.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="slideInFromRight" delay={150}>
              <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Modern retail environment"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  data-ai-hint="retail store"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <AnimatedSection animationType="fadeIn" delay={50}>
            <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">How We Empower FMCG & Retail Businesses</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, index) => (
              <AnimatedSection key={item.title} animationType="slideInFromBottom" delay={100 + index * 100}>
                <div className="p-6 rounded-lg border border-border bg-secondary shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-center gap-4 mb-3">
                    {item.icon}
                    <h3 className="font-headline text-xl font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <AnimatedSection animationType="slideInFromBottom" delay={200}>
          <section className="py-12 text-center bg-primary/5 rounded-lg border border-primary/20">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">Ready to Elevate Your FMCG or Retail Business?</h2>
            <p className="max-w-xl mx-auto text-muted-foreground mb-8">
              Let's discuss how Hindeshwar Consulting can tailor solutions to meet your specific challenges and growth ambitions in the FMCG and Retail sectors.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 text-lg px-8 py-3 rounded-lg">
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}

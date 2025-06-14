
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, ArrowRight, BarChart3, Settings, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "data-analytics",
    icon: <BarChart3 className="h-12 w-12 text-primary" />,
    title: "Data & Analytics",
    shortDescription: "Leverage data for strategic insights and robust planning.",
    longDescription: "Our data analysis services help you define your vision, set clear goals, and create actionable roadmaps. We analyze market trends, competitive landscapes, and internal capabilities to formulate strategies that drive sustainable growth and competitive advantage.",
    features: ["Market Analysis & Research", "Competitive Benchmarking", "Data-driven Insights", "Roadmap Creation", "Performance Metrics"],
    image: "https://placehold.co/600x400.png",
    imageAlt: "Business professionals analyzing charts for data and analytics",
    aiHint: "data analytics charts",
    href: "/services/data-analytics"
  },
  {
    id: "operational-excellence",
    icon: <Settings className="h-12 w-12 text-primary" />,
    title: "Operational Excellence",
    shortDescription: "Optimize your operations for efficiency, productivity, and cost-effectiveness.",
    longDescription: "We help streamline your processes, enhance productivity, and reduce operational costs. Our experts identify bottlenecks, implement lean methodologies, and leverage technology to transform your operations into a high-performing engine for growth.",
    features: ["Process Optimization", "Lean Six Sigma", "Supply Chain Management", "Cost Reduction", "Technology Integration"],
    image: "https://placehold.co/600x400.png",
    imageAlt: "Gears turning to show operational efficiency",
    aiHint: "gears efficiency",
    href: "/services/operational-excellence"
  },
  {
    id: "digital-transformation",
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: "Digital Transformation",
    shortDescription: "Foster innovation and identify new growth avenues through digital solutions.",
    longDescription: "In a rapidly evolving business environment, digital transformation and innovation are key. We assist you in cultivating a culture of innovation, exploring new market opportunities, and developing products or services that meet emerging customer needs, ensuring you remain a leader in your industry.",
    features: ["Digital Strategy", "Innovation Workshops", "New Market Entry", "Product Development", "Change Management"],
    image: "https://placehold.co/600x400.png",
    imageAlt: "Abstract digital connections and a lightbulb for innovation",
    aiHint: "digital innovation network",
    href: "/services/digital-transformation"
  },
  {
    id: "revenue-growth",
    icon: <TrendingUp className="h-12 w-12 text-primary" />,
    title: "Revenue Growth Strategies",
    shortDescription: "Unlock new revenue streams and maximize market potential.",
    longDescription: "Our revenue growth services focus on identifying and capturing market opportunities. We help refine your sales strategies, optimize product portfolios, and develop effective go-to-market plans to accelerate growth and profitability.",
    features: ["Sales Channel Optimization", "Product Portfolio Management", "B2B Go-To-Market Strategy", "Market Expansion", "Pricing Strategies"],
    image: "https://placehold.co/600x400.png",
    imageAlt: "Upward trending graph symbolizing revenue growth",
    aiHint: "growth graph revenue",
    href: "/services/revenue-growth"
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Our Services</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Comprehensive solutions to empower your business and drive lasting success with Hindeshwar Consulting.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16`}>
                <div className={`aspect-video overflow-hidden rounded-lg shadow-2xl ${index % 2 !== 0 ? "lg:order-last" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    data-ai-hint={service.aiHint}
                  />
                </div>
                <div className={`${index % 2 !== 0 ? "lg:order-first" : ""}`}>
                  <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{service.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{service.longDescription}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="mr-3 h-6 w-6 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                  ))}
                  </ul>
                  <div className="mt-8">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-lg">
                      <Link href={service.href}>
                        <span className="inline-flex items-center">
                          Explore {service.title} <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Business?</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg">
              Contact Hindeshwar Consulting today to learn how our tailored services can help you achieve your strategic goals.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-background text-primary hover:bg-muted/80 rounded-lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
  );
}

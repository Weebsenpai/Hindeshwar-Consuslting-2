
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Apple, Factory, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "FMCG & Retail",
    description: "Navigating the fast-paced world of consumer goods and retail with strategic insights and operational excellence.",
    href: "/industries/fmcg-retail",
    aiHint: "retail store modern"
  },
  {
    icon: <Apple className="h-10 w-10 text-primary" />,
    title: "Food & Beverage",
    description: "Cultivating growth and innovation in the dynamic food and beverage industry, from production to plate.",
    href: "/industries/food",
    aiHint: "food production facility"
  },
  {
    icon: <Factory className="h-10 w-10 text-primary" />,
    title: "Manufacturing",
    description: "Transforming manufacturing operations for enhanced efficiency, quality, and future-readiness.",
    href: "/industries/manufacturing",
    aiHint: "modern factory interior"
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Industries We Serve</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Hindeshwar Consulting provides expert guidance across diverse sectors, helping businesses overcome challenges and seize opportunities.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card key={industry.title} className="flex flex-col bg-background text-foreground overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg border-border">
                <CardHeader className="items-center text-center p-8">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                    {industry.icon}
                  </div>
                  <CardTitle className="mt-2 text-2xl font-headline text-foreground">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-6 text-center">
                  <CardDescription className="text-base text-muted-foreground">{industry.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0 text-center">
                   <Button asChild variant="link" className="text-primary hover:text-accent font-semibold">
                    <Link href={industry.href}>
                      <span className="inline-flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Partner with Industry Experts</h2>
          <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl">
            No matter your industry, Hindeshwar Consulting has the expertise to help you achieve your strategic objectives.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-muted/80 text-lg px-8 py-6 rounded-lg">
              <Link href="/contact">Discuss Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

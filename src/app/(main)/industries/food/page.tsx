
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Apple, ShieldCheck, Leaf, PackageSearch, Lightbulb, Settings, LineChart } from "lucide-react";

export default function FoodPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <div className="inline-block p-4 mb-6 rounded-full bg-primary/10 text-primary">
            <Apple className="h-12 w-12" />
          </div>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Food & Beverage Industry Solutions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Partnering with the Food & Beverage sector to foster innovation, ensure quality, and achieve sustainable growth with Hindeshwar Consulting.
          </p>
        </div>
      </section>

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
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Nourishing Growth in a Complex Sector</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert space-y-4">
                <p>
                  The Food & Beverage industry operates under stringent quality standards, evolving consumer preferences for health and sustainability, and complex global supply chains. Navigating these challenges requires strategic foresight and operational agility.
                </p>
                <p>
                  Hindeshwar Consulting offers specialized expertise to food and beverage manufacturers, distributors, and retailers. We help you enhance food safety, optimize your supply network, drive product innovation, and meet the growing demand for sustainable practices.
                </p>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Fresh produce or food processing facility"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="produce market"
              />
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">Our Expertise in Food & Beverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                title: "Food Safety & Quality Assurance",
                description: "Implementing robust systems and processes to ensure product safety, meet regulatory compliance, and maintain the highest quality standards."
              },
              {
                icon: <PackageSearch className="h-8 w-8 text-primary" />,
                title: "Supply Chain Resilience & Traceability",
                description: "Building resilient and transparent supply chains, from farm to fork, to ensure product integrity and manage risks effectively."
              },
              {
                icon: <Leaf className="h-8 w-8 text-primary" />,
                title: "Sustainability & Ethical Sourcing",
                description: "Developing and implementing sustainability strategies, reducing environmental impact, and promoting ethical sourcing practices."
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-primary" />,
                title: "Product Innovation & Development",
                description: "Supporting new product development, market entry strategies, and adapting portfolios to changing consumer tastes and dietary trends."
              },
              {
                icon: <Settings className="h-8 w-8 text-primary" />,
                title: "Operational Efficiency in Production",
                description: "Optimizing manufacturing processes, reducing waste, and improving throughput in food and beverage production facilities."
              },
              {
                icon: <LineChart className="h-8 w-8 text-primary" />,
                title: "Market Analysis & Growth Strategy",
                description: "Providing market intelligence, identifying growth opportunities, and developing strategies for market expansion and penetration."
              }
            ].map(item => (
              <div key={item.title} className="p-6 rounded-lg border border-border bg-secondary shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  {item.icon}
                  <h3 className="font-headline text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 text-center bg-primary/5 rounded-lg border border-primary/20">
          <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">Advance Your Food & Beverage Business</h2>
          <p className="max-w-xl mx-auto text-muted-foreground mb-8">
            Connect with Hindeshwar Consulting to explore how our tailored solutions can help your Food & Beverage enterprise achieve new levels of success and sustainability.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 text-lg px-8 py-3 rounded-lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}

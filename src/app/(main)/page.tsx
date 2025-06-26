
import Link from "next/link";
import Image from "next/image";
import heroImage from '@/assets/images/bg.png'
import ideaImage from '@/assets/images/ideaImg.png'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Brain, BarChart3, Lightbulb } from "lucide-react";
import { AnimatedSection } from "@/components/effects/animated-section";

export default function HomePage() {
  const heroImageDataUri = heroImage; 
  const heroImagePrompt = "abstract cityscape";

  const serviceCards = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Strategic Advisory",
      description: "Develop robust strategies to navigate market complexities and achieve long-term objectives.",
      href: "/services/strategy/business-strategy",
      aiHint: "strategic planning"
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Operational Excellence",
      description: "Optimize your operations for efficiency, productivity, and cost-effectiveness.",
      href: "/services/operational-excellence/operating-model",
      aiHint: "gears efficiency"
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Digital Transformation",
      description: "Foster innovation and identify new growth avenues to stay ahead of the curve.",
      href: "/services/digital-transformation/innovation",
      aiHint: "digital innovation"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-background text-foreground">
        <div className="absolute inset-0">
          <Image
            src={heroImageDataUri}
            alt="Global business strategy for Hindeshwar Consulting"
            fill
            className="opacity-60 mix-blend-multiply dark:opacity-50 dark:mix-blend-normal object-cover object-[center_20%]"
            data-ai-hint={heroImagePrompt} 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Drive Change. Deliver Excellence. <br className="hidden md:block" /> <span className="text-primary">Hindeshwar Consulting</span>.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
            We partner with organizations to deliver exceptional outcomes and sustainable change through strategic insights and expert execution.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-7 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 w-full sm:w-auto">
              <Link href="/services">
                <span className="inline-flex items-center">
                  Explore Our Expertise <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-7 rounded-lg border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto">
              <Link href="/contact">
                 <span className="inline-flex items-center">Read Insights</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container">
          <AnimatedSection animationType="slideInFromBottom" className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Our Core Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions designed to address your unique challenges and drive transformative growth.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animationType="slideInFromBottom"
                delay={index * 150} // Staggered delay
                as="div" // Ensure Card can be a child, AnimatedSection renders a div
              >
                <Card className="flex flex-col h-full bg-background text-foreground overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg border-border">
                  <CardHeader className="items-center text-center p-8">
                    <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                      {service.icon}
                    </div>
                    <CardTitle className="mt-2 text-2xl font-headline text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-6 text-center">
                    <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0 text-center">
                    <Button asChild variant="link" className="text-primary hover:text-accent font-semibold">
                      <Link href={service.href}>
                        <span className="inline-flex items-center">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Snippet Section */}
      <section className="py-16 md:py-24 bg-background text-foreground">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection animationType="slideInFromLeft" className="order-last lg:order-first">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">About Hindeshwar Consulting</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  At Hindeshwar Consulting, we are passionate about helping businesses thrive. Our team of experienced consultants brings a wealth of knowledge and a commitment to delivering measurable results. We partner with you to understand your vision and challenges, crafting bespoke solutions that drive success.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg" className="text-lg rounded-lg bg-primary text-primary-foreground hover:bg-primary/80">
                    <Link href="/about">
                      <span className="inline-flex items-center">Discover More About Us</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="slideInFromRight">
              <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src={ideaImage}
                  alt="Team working collaboratively at Hindeshwar Consulting"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  data-ai-hint="professionals collaborating"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <AnimatedSection animationType="slideInFromBottom" className="container text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Ready to Reach New Heights?</h2>
          <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl">
            Let Hindeshwar Consulting be your partner in success. Contact us today for a consultation and let's discuss how we can help your business soar.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-muted/80 text-lg px-8 py-6 rounded-lg">
              <Link href="/contact">
                <span className="inline-flex items-center">Schedule a Consultation</span>
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

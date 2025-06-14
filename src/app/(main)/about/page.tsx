
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Award, Lightbulb } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/effects/animated-section";

const teamMembers = [
  {
    name: "Dr. Eleanor Vance",
    role: "Founder & CEO",
    image: "https://placehold.co/300x300.png",
    bio: "Visionary leader with 20+ years of experience in strategic consulting and business transformation.",
    aiHint: "ceo professional"
  },
  {
    name: "Marcus Chen",
    role: "Lead Strategist",
    image: "https://placehold.co/300x300.png",
    bio: "Expert in market analysis and operational excellence, driving impactful results for clients.",
    aiHint: "strategist business"
  },
  {
    name: "Aisha Khan",
    role: "Senior Consultant, Innovation",
    image: "https://placehold.co/300x300.png",
    bio: "Specializes in fostering innovation and guiding companies through digital transformation.",
    aiHint: "consultant innovation"
  },
];

const values = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Client-Centric",
    description: "Our clients' success is our primary focus. We build lasting partnerships based on trust and mutual respect."
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, delivering quality and impactful solutions."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical principles in all our engagements."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Innovation",
    description: "We embrace creative thinking and continuous learning to provide cutting-edge solutions."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedSection animationType="fadeIn">
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">About Hindeshwar Consulting</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
              Your trusted partner in navigating the complexities of modern business.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection animationType="slideInFromLeft" delay={100} className="order-last lg:order-first">
              <div>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Story</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Hindeshwar Consulting was founded with a singular vision: to empower businesses to reach their full potential. We recognized that in an ever-changing global market, organizations need more than just advice; they need a strategic partner who understands their unique challenges and can deliver tailored, actionable solutions.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Over the years, we've built a reputation for excellence, integrity, and a client-centric approach. Our team comprises seasoned experts from diverse industries, bringing a wealth of knowledge and practical experience to every project. We are committed to driving sustainable growth and creating lasting value for our clients.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="slideInFromRight" delay={150}>
              <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Hindeshwar Consulting office or team meeting"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  data-ai-hint="office meeting"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection animationType="slideInFromBottom" delay={100}>
              <div className="rounded-lg border border-border bg-card text-card-foreground p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Eye className="h-10 w-10 text-primary" />
                  <h3 className="font-headline text-2xl font-semibold text-card-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">To be the leading consulting firm recognized for transforming businesses and shaping a future of sustainable success and innovation.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="slideInFromBottom" delay={150}>
              <div className="rounded-lg border border-border bg-card text-card-foreground p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Target className="h-10 w-10 text-primary" />
                  <h3 className="font-headline text-2xl font-semibold text-card-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">To provide expert, data-driven consulting services that empower our clients to overcome challenges, seize opportunities, and achieve peak performance.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection animationType="fadeIn" delay={50}>
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">The principles that guide our work and relationships.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animationType="slideInFromBottom" delay={100 + index * 100}>
                <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-secondary shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-3 bg-primary/20 rounded-full mb-4 inline-block">
                    {value.icon}
                  </div>
                  <h4 className="mt-2 font-headline text-xl font-semibold text-foreground">{value.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <AnimatedSection animationType="fadeIn" delay={50}>
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Meet Our Team</h2>
              <p className="mt-4 text-lg text-muted-foreground">Experienced professionals dedicated to your success.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} animationType="slideInFromBottom" delay={100 + index * 100}>
                <div className="rounded-lg border border-border bg-background p-6 text-center shadow-xl hover:shadow-2xl transition-shadow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="mx-auto mb-6 rounded-full object-cover border-4 border-primary/50"
                    data-ai-hint={member.aiHint}
                  />
                  <h3 className="font-headline text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="mt-3 text-xs text-muted-foreground">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <AnimatedSection animationType="slideInFromBottom" delay={200}>
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Partner with Hindeshwar Consulting</h2>
            <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl">
              Let's build a brighter future for your business together. Reach out to our team to discuss your needs.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-muted/80 text-lg px-8 py-6 rounded-lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

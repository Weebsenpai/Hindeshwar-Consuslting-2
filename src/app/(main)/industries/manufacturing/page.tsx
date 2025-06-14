
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Factory, Cog, Activity, Layers, ShieldCheck, Leaf, Users } from "lucide-react";

export default function ManufacturingPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <div className="inline-block p-4 mb-6 rounded-full bg-primary/10 text-primary">
            <Factory className="h-12 w-12" />
          </div>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Manufacturing Industry Excellence</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Driving innovation, efficiency, and resilience in the Manufacturing sector with Hindeshwar Consulting's expert solutions.
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
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Transforming Manufacturing for the Future</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert space-y-4">
                <p>
                  The Manufacturing industry is at the forefront of technological advancement and global competition. Success requires continuous improvement, adoption of smart technologies, and resilient supply chains.
                </p>
                <p>
                  Hindeshwar Consulting empowers manufacturers to navigate complexities such as Industry 4.0 adoption, supply chain disruptions, sustainability pressures, and workforce development. We help optimize operations, enhance productivity, and build future-ready manufacturing enterprises.
                </p>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Advanced manufacturing facility or robotic arm"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="robotic factory"
              />
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">Our Solutions for Manufacturing Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cog className="h-8 w-8 text-primary" />,
                title: "Operational Excellence & Lean Manufacturing",
                description: "Implementing lean principles and process improvements to boost productivity, reduce waste, and enhance overall equipment effectiveness (OEE)."
              },
              {
                icon: <Activity className="h-8 w-8 text-primary" />,
                title: "Digital Transformation & Industry 4.0",
                description: "Guiding the adoption of smart factory technologies, IoT, AI, and data analytics to create connected, intelligent manufacturing ecosystems."
              },
              {
                icon: <Layers className="h-8 w-8 text-primary" />,
                title: "Supply Chain Management & Resilience",
                description: "Designing agile and resilient supply chains, optimizing inventory, and improving visibility to mitigate risks and ensure continuity."
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                title: "Quality Management Systems",
                description: "Developing and refining quality control processes to meet stringent industry standards and enhance customer satisfaction."
              },
              {
                icon: <Leaf className="h-8 w-8 text-primary" />,
                title: "Sustainable Manufacturing",
                description: "Implementing strategies to reduce environmental impact, optimize resource usage, and build sustainable manufacturing operations."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Workforce Development & Skills Training",
                description: "Assisting in upskilling and reskilling the manufacturing workforce to adapt to new technologies and operational demands."
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
          <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">Engineer Your Manufacturing Success</h2>
          <p className="max-w-xl mx-auto text-muted-foreground mb-8">
            Partner with Hindeshwar Consulting to unlock new efficiencies, drive innovation, and secure a competitive edge in the global manufacturing landscape.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 text-lg px-8 py-3 rounded-lg">
            <Link href="/contact">Consult Our Manufacturing Specialists</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}

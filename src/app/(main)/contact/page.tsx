
import { ContactForm } from "@/components/forms/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/effects/animated-section";

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedSection animationType="fadeIn">
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
              We're here to help. Reach out to us with any questions or to discuss your project.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <AnimatedSection animationType="slideInFromLeft" delay={100}>
              <div className="rounded-lg border border-border bg-background p-8 shadow-xl">
                <h2 className="font-headline text-2xl font-semibold text-foreground mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="slideInFromRight" delay={150}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline text-2xl font-semibold text-foreground mb-4">Our Contact Details</h2>
                  <p className="text-muted-foreground mb-6">
                    Feel free to contact us through any of the following channels. We look forward to hearing from you!
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-md bg-primary/20 p-3 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">123 Hindeshwar Avenue, Growth City, ST 54321</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-md bg-primary/20 p-3 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-md bg-primary/20 p-3 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@hindeshwarconsulting.com</p>
                  </div>
                </div>
                <div className="pt-4">
                   <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                   <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                   <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AnimatedSection animationType="slideInFromBottom" delay={200}>
        <section className="h-[400px] md:h-[500px] bg-secondary relative">
          <Image
              src="https://placehold.co/1200x500.png"
              alt="Map to Hindeshwar Consulting"
              fill
              className="opacity-30 object-cover"
              data-ai-hint="city map"
          />
          <div className="container h-full py-8 relative z-10 flex items-center justify-center">
              <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl text-center">
                  <h3 className="text-2xl font-headline text-foreground mb-3">Visit Us</h3>
                  <p className="text-muted-foreground mb-4">Find our office location on the map.</p>
                   <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d-0.1234567890123456!3d51.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDcnMjQuNCJTIDDDsDA3JzIzLjYiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                      width="100%" 
                      height="250" 
                      style={{border:0}} 
                      allowFullScreen={true} 
                      loading="lazy"
                      title="Google Maps Placeholder"
                      className="rounded-lg shadow-md max-w-lg mx-auto"
                  ></iframe>
              </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

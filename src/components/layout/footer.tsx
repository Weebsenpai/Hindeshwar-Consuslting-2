
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 items-start">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
              <Mountain className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-bold text-foreground">Hindeshwar Consulting</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Delivering exceptional outcomes and sustainable change for businesses worldwide.
            </p>
             <div className="mt-6">
                <h4 className="font-headline text-md font-semibold mb-3 text-foreground">Stay Connected</h4>
                <div className="flex space-x-3">
                  <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
                    <Link href="#" aria-label="Facebook" prefetch={false}><Facebook className="h-5 w-5" /></Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
                    <Link href="#" aria-label="Twitter" prefetch={false}><Twitter className="h-5 w-5" /></Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
                    <Link href="#" aria-label="LinkedIn" prefetch={false}><Linkedin className="h-5 w-5" /></Link>
                  </Button>
                </div>
            </div>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Services</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Contact</Link></li>
              <li><Link href="/cta-generator" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>AI Tools</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold mb-4 text-foreground">Our Expertise</h4>
            <ul className="space-y-3">
              <li><Link href="/services/data-analytics/strategy-analysis" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Data & Analytics</Link></li>
              <li><Link href="/services/operational-excellence/process-reengineering" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Operational Excellence</Link></li>
              <li><Link href="/services/digital-transformation/strategy-analysis" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Digital Transformation</Link></li>
              <li><Link href="/services/revenue-growth/sales-channel-management" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Revenue Growth</Link></li>
            </ul>
          </div>
           <div>
            <h4 className="font-headline text-lg font-semibold mb-4 text-foreground">Contact Info</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-3">
                <p>123 Hindeshwar Ave,<br/>Growth City, ST 54321</p>
                <p>Email: <Link href="mailto:info@hindeshwarconsulting.com" className="hover:text-primary">info@hindeshwarconsulting.com</Link></p>
                <p>Phone: <Link href="tel:+11234567890" className="hover:text-primary">(123) 456-7890</Link></p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Hindeshwar Consulting. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link> | <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

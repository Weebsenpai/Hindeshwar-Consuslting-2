
"use client";

import Link from "next/link";
import { Menu, Mountain, Search, BarChart3, Settings, Lightbulb, TrendingUp, ShoppingCart, Apple, Factory, Package, ClipboardPen, Database } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks, type NavItem } from "./nav-links";
import { ThemeSwitcher } from "@/components/theme-switcher";

const serviceItemsForMegaMenu: NavItem['serviceItems'] = [
  {
    icon: BarChart3,
    title: "Data & Analytics",
    href: "/services/data-analytics",
    subServices: [
      { label: "Strategy & Analysis", href: "/services/data-analytics#strategy-analysis" },
      { label: "Architecture & Modelling", href: "/services/data-analytics#architecture-modelling" },
      { label: "Data Visualisation", href: "/services/data-analytics#data-visualization" },
    ]
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    href: "/services/operational-excellence",
    subServices: [
      { label: "Process Re-engineering", href: "/services/operational-excellence#process-reengineering" },
      { label: "Operating Model", href: "/services/operational-excellence#operating-model" },
      { label: "Organisation Design", href: "/services/operational-excellence#organisation-design" },
    ]
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    href: "/services/digital-transformation",
    subServices: [
      { label: "Strategy & Analysis (Digital)", href: "/services/digital-transformation#strategy-analysis-digital" },
      { label: "Innovation", href: "/services/digital-transformation#innovation" },
      { label: "Digital Transformation Delivery", href: "/services/digital-transformation#digital-transformation-delivery" },
    ]
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    href: "/services/revenue-growth",
    subServices: [
      { label: "Sales & Channel Management", href: "/services/revenue-growth#sales-channel-management" },
      { label: "Product & Portfolio Management", href: "/services/revenue-growth#product-portfolio-management" },
      { label: "B2B Go-To-Market", href: "/services/revenue-growth#b2b-go-to-market" },
    ]
  },
];

const industryItemsForMegaMenu: NavItem['serviceItems'] = [
  {
    icon: ShoppingCart,
    title: "FMCG & Retail",
    description: "Driving growth in fast-moving consumer goods and retail.",
    href: "/industries/fmcg-retail",
  },
  {
    icon: Apple,
    title: "Food & Beverage",
    description: "Innovating for the food and beverage sector.",
    href: "/industries/food",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimizing manufacturing processes for the future.",
    href: "/industries/manufacturing",
  },
];

const flagshipServiceItems: NavItem['serviceItems'] = [
  {
    icon: ClipboardPen,
    title: "Food Commodity Market Advisory",
    description: "Expert advisory for the dynamic food commodity market.",
    href: "/services/food-commodity-advisory",
  },
  {
    icon: Factory,
    title: "Third Party Manufacturing (FMCG)",
    description: "End-to-end third-party manufacturing solutions.",
    href: "/services/third-party-manufacturing",
  },
  {
    icon: Database,
    title: "State Wise Directory Data Services",
    description: "Curated state-wise business directory data.",
    href: "/services/state-wise-directory",
  },
];


const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "Industries",
    href: "/industries",
    serviceItems: industryItemsForMegaMenu,
    isIndustriesMenu: true, 
  },
  {
    label: "Services",
    href: "/services", 
    serviceItems: serviceItemsForMegaMenu,
    flagshipItems: flagshipServiceItems,
  },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm shadow-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Mountain className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">Hindeshwar Consulting</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-1 md:flex"> {/* Reduced gap from 2 to 1 */}
            <NavLinks items={navItems} />
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Search" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <ThemeSwitcher />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden text-foreground hover:text-primary border-border hover:border-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground border-border">
             <SheetHeader className="mb-4 border-b border-border pb-4">
                <SheetTitle asChild>
                  <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <Mountain className="h-6 w-6 text-primary" />
                    <span className="font-headline text-xl font-bold text-foreground">Hindeshwar Consulting</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 p-0"> 
                <nav className="grid gap-2">
                  <NavLinks items={navItems} isMobile={true} />
                </nav>
                <div className="mt-4 flex flex-col gap-2">
                   <Button variant="ghost" size="lg" aria-label="Search" className="text-foreground hover:text-primary justify-start">
                    <Search className="mr-2 h-5 w-5" /> Search
                  </Button>
                  <div className="flex items-center justify-between rounded-lg border p-2">
                    <span className="text-sm font-medium text-foreground">Switch Theme</span>
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

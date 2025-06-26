
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react"; 

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50">
        <Button asChild size="lg" className="rounded-full p-3 shadow-lg sm:rounded-lg sm:px-6 sm:py-3 bg-foreground text-background hover:bg-foreground/90 dark:bg-primary-foreground dark:text-primary dark:hover:bg-primary-foreground/90 active:scale-[0.97] transition-all">
          <Link href="/contact" aria-label="Talk to a consultant">
            <span className="inline-flex items-center justify-center">
              <MessageCircle className="h-6 w-6 sm:mr-2" />
              <span className="hidden sm:inline">Talk to Consultant</span>
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

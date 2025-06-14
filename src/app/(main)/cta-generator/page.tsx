import { CtaGeneratorForm } from "@/components/forms/cta-generator-form";

export default function CtaGeneratorPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">AI Tools by Hindeshwar Consulting</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Craft compelling calls to action with the power of AI.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <CtaGeneratorForm />
        </div>
      </section>
    </div>
  );
}


'use client';

import { useState } from 'react';
import { products } from '@/lib/products-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AnimatedSection } from '@/components/effects/animated-section';
import { Phone, Mail, Share2, Package } from 'lucide-react';
import Link from 'next/link';
import { EnquiryModal } from '@/components/products/enquiry-modal';

type Props = {
  params: { slug: string };
};

// This function is still valid for client components that need to generate static paths
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

function DetailRow({ label, value }: { label: string; value: string | undefined }) {
  if (!value) return null;
  return (
    <>
      <div className="grid grid-cols-2 items-center gap-4 py-3">
        <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
        <dd className="text-sm text-foreground">{value}</dd>
      </div>
      <Separator />
    </>
  );
}


export default function ProductDetailPage({ params }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="bg-secondary py-12 md:py-20">
        <div className="container">
          <AnimatedSection animationType="fadeIn">
            <Card className="overflow-hidden border-border bg-background shadow-2xl">
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                  {/* Image Section */}
                  <div className="group relative h-96 overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105 p-4"
                      data-ai-hint={product.aiHint}
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                      Hover to zoom
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <h1 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
                          {product.name}
                        </h1>
                        {product.moq && (
                          <p className="mt-2 text-lg font-semibold text-primary">
                            {product.moq} (MOQ)
                          </p>
                        )}
                      </div>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-5 w-5" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>

                    <div className="mt-6">
                      <Separator />
                      <DetailRow label="Business Type" value={product.details.businessType} />
                      <DetailRow label="Brand Name" value={product.brand} />
                      <DetailRow label="Application" value={product.details.application} />
                      <DetailRow label="Packaging Type" value={product.details.packagingType} />
                    </div>

                    <div className="mt-auto space-y-4 pt-8">
                      <Button size="lg" className="w-full bg-primary/90 text-primary-foreground hover:bg-primary" onClick={() => setIsModalOpen(true)}>
                          <Mail className="mr-2 h-5 w-5" /> Send Enquiry
                        </Button>
                        <Button size="lg" variant="secondary" className="w-full" onClick={() => setIsModalOpen(true)}>
                          <Phone className="mr-2 h-5 w-5" /> Request to Call
                        </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection animationType="slideInFromBottom" delay={150}>
              <Card className="mt-12 border-border bg-background shadow-2xl">
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl flex items-center">
                          <Package className="mr-3 h-6 w-6 text-primary" /> Product Details
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                          <div className="rounded-lg bg-secondary/50 p-4">
                              <p className="text-sm font-medium text-muted-foreground">Packaging Size</p>
                              <p className="font-semibold text-foreground">{product.details.packagingSize}</p>
                          </div>
                          <div className="rounded-lg bg-secondary/50 p-4">
                              <p className="text-sm font-medium text-muted-foreground">Country of Origin</p>
                              <p className="font-semibold text-foreground">{product.details.countryOfOrigin}</p>
                          </div>
                          <div className="rounded-lg bg-secondary/50 p-4">
                              <p className="text-sm font-medium text-muted-foreground">Made From</p>
                              <p className="font-semibold text-foreground">{product.details.madeFrom}</p>
                          </div>
                      </div>
                      <div className="mt-8 text-center">
                          <Button asChild size="lg" className="text-lg px-8 py-7 rounded-lg">
                              <Link href="/contact">Yes! I am interested</Link>
                          </Button>
                      </div>
                  </CardContent>
              </Card>
          </AnimatedSection>

        </div>
      </div>
      <EnquiryModal product={product} isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}

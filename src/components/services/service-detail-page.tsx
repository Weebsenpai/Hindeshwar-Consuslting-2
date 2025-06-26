
'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Share2, Mail } from 'lucide-react';
import { ServiceEnquiryModal } from './service-enquiry-modal';

interface ServiceDetailPageProps {
  title: string;
  price: string;
  description: string;
  imageSrc: StaticImageData | string;
  imageHint: string;
}

export function ServiceDetailPage({ title, price, description, imageSrc, imageHint }: ServiceDetailPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-secondary py-12 md:py-20">
        <div className="container">
          <Card className="overflow-hidden border-border bg-background shadow-2xl">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image Section */}
                <div className="group relative h-96 min-h-[300px] overflow-hidden bg-muted p-4 md:h-auto">
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={imageHint}
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Hover to zoom
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex flex-col p-6 md:p-8">
                  <div className="flex items-start justify-between">
                    <h1 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
                      {title}
                    </h1>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-5 w-5" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">₹ {price}</span>
                    <Button variant="outline" className="ml-4" onClick={() => setIsModalOpen(true)}>Get Best Price</Button>
                  </div>

                  <p className="mt-6 text-muted-foreground leading-relaxed flex-grow">
                    {description}
                  </p>

                  <div className="mt-auto pt-8">
                    <Button size="lg" className="w-full" onClick={() => setIsModalOpen(true)}>
                      <Mail className="mr-2 h-5 w-5" /> Send Enquiry
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <ServiceEnquiryModal serviceName={title} isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}


'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ServiceEnquiryForm } from '@/components/forms/service-enquiry-form';

interface ServiceEnquiryModalProps {
  serviceName: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ServiceEnquiryModal({ serviceName, isOpen, onOpenChange }: ServiceEnquiryModalProps) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline font-bold text-primary">Enquiry for: {serviceName}</DialogTitle>
          <DialogDescription className="pt-2">
            Please fill out the form below and one of our consultants will get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ServiceEnquiryForm serviceName={serviceName} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Product } from '@/lib/products-data';
import Image from 'next/image';
import { X, Pencil } from 'lucide-react';

interface EnquiryModalProps {
  product: Product;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function EnquiryModal({ product, isOpen, onOpenChange }: EnquiryModalProps) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 border-none gap-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Product Info */}
          <div className="p-6 flex flex-col bg-secondary/30 rounded-l-lg">
            <h2 className="text-lg font-semibold text-foreground mb-4">{product.name}</h2>
            <div className="relative aspect-square w-full max-w-sm mx-auto">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                data-ai-hint={product.aiHint}
              />
            </div>
            <div className="mt-auto pt-4">
              <p className="text-sm text-muted-foreground">MOQ: <span className="font-bold text-foreground">{product.moq}</span></p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-6 flex flex-col bg-card">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold text-orange-500">Get a Quick Quote</DialogTitle>
            </DialogHeader>
            
            <form action="#" className="space-y-6 flex-grow flex flex-col">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="quantity" className="text-xs">Quantity</Label>
                  <Input id="quantity" placeholder="Quantity" className="bg-background"/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="units" className="text-xs">Measurement Units</Label>
                   <div className="relative">
                    <Input id="units" value="Ton" readOnly className="pr-12 bg-background" />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-orange-500 cursor-pointer">
                        <Pencil className="h-3 w-3 mr-1" />
                        Edit
                    </div>
                   </div>
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="mobile" className="text-xs">Mobile No.</Label>
                <div className="flex items-center">
                   <div className="flex h-10 items-center justify-center gap-2 rounded-l-md border border-r-0 border-input bg-background px-3">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" className="h-4 w-6 flex-shrink-0"><path fill="#f93" d="M0 0h21v5H0z"/><path fill="#fff" d="M0 5h21v5H0z"/><path fill="#128807" d="M0 10h21v5H0z"/><g transform="translate(10.5 7.5)"><circle r="2" fill="#000080"/><circle r="1.75" fill="#fff"/><path fill="#000080" d="M0-1.75a.175.175 0 0 0 0 3.5.175.175 0 0 0 0-3.5zm0 .175a1.575 1.575 0 1 1 0 3.15 1.575 1.575 0 0 1 0-3.15z"/><g id="d"><g id="c"><g id="b"><g id="a"><path d="M0-1.75-.054.175.108 0z" transform="rotate(7.5)"/><path d="M0-1.75-.108.175.216 0z" transform="rotate(15)"/></g><use xlinkHref="#a" transform="rotate(15)"/></g><use xlinkHref="#b" transform="rotate(30)"/></g><use xlinkHref="#c" transform="rotate(60)"/></g><use xlinkHref="#d" transform="rotate(120)"/><use xlinkHref="#d" transform="rotate(240)"/></g></svg>
                     <span className="text-sm font-medium text-foreground">+91</span>
                   </div>
                   <Input id="mobile" placeholder="Enter Mobile No." className="rounded-l-none bg-background" />
                </div>
              </div>
              
              <div className="mt-auto pt-4">
                <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3">Send Enquiry</Button>
              </div>
            </form>
          </div>
        </div>
        <DialogClose className="absolute right-[-10px] top-[-10px] rounded-full bg-slate-700 p-1.5 text-white opacity-100 ring-offset-background transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-800">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

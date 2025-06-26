
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/products-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden border-border bg-background shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <CardHeader className="relative h-56 w-full p-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.aiHint}
          />
        </CardHeader>
        <CardContent className="flex flex-1 flex-col p-4">
          <CardTitle className="font-headline text-lg text-foreground">
            {product.name}
          </CardTitle>
          <CardDescription className="mt-1 text-sm text-muted-foreground">
            Brand: {product.brand}
          </CardDescription>
          <div className="mt-auto pt-4">
             <p className="inline-flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

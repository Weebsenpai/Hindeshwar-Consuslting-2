
'use client';

import { useState } from 'react';
import { products, Product } from '@/lib/products-data';
import { ProductCard } from '@/components/products/product-card';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/effects/animated-section';
import { LayoutGrid, List } from 'lucide-react';

const brands = ['All Brands', ...Array.from(new Set(products.map((p) => p.brand)))];

export default function ProductsPage() {
  const [selectedBrand, setSelectedBrand] = useState('All Brands');

  const filteredProducts =
    selectedBrand === 'All Brands'
      ? products
      : products.filter((p) => p.brand === selectedBrand);

  return (
    <div className="bg-background text-foreground">
      <AnimatedSection animationType="fadeIn">
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
              Explore our range of high-quality products.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <aside className="md:col-span-3">
            <AnimatedSection animationType="slideInFromLeft" delay={100}>
              <div className="sticky top-24 rounded-lg border border-border bg-background p-4 shadow-lg">
                <h2 className="mb-4 font-headline text-xl font-semibold text-foreground">
                  Filter by Brand
                </h2>
                <div className="flex flex-col space-y-2">
                  {brands.map((brand) => (
                    <Button
                      key={brand}
                      variant={selectedBrand === brand ? 'default' : 'ghost'}
                      onClick={() => setSelectedBrand(brand)}
                      className="justify-start"
                    >
                      {brand}
                    </Button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </aside>

          <main className="md:col-span-9">
            <AnimatedSection animationType="slideInFromRight" delay={150}>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product, index) => (
                     <AnimatedSection key={product.id} animationType="slideInFromBottom" delay={100 + index * 50}>
                        <ProductCard product={product} />
                     </AnimatedSection>
                  ))}
                </div>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed border-border bg-secondary">
                  <p className="text-lg font-medium text-muted-foreground">
                    No products found for this brand.
                  </p>
                </div>
              )}
            </AnimatedSection>
          </main>
        </div>
      </div>
    </div>
  );
}

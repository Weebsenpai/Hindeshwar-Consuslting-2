
import { products } from '@/lib/products-data';
import { notFound } from 'next/navigation';
import { ProductDetailClient } from '@/components/products/product-detail-client';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

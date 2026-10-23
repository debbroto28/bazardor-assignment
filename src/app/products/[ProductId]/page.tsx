
import { notFound } from "next/navigation";
import ProductDetails from "@/app/components/ProductDetails";

const API_URL =
  "https://api.abcz.workers.dev/api/bazardor/products";

interface PageProps {
  params: Promise<{
    ProductId: string;
  }>;
}

export default async function ProductDetailsPage({
  params,
}: PageProps) {
  const { ProductId } = await params;
  const productId = Number(ProductId);

  if (!Number.isInteger(productId) || productId <= 0) {
    notFound();
  }

  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("পণ্যের তথ্য লোড করা যায়নি।");
  }

  const products = await response.json();

  if (!Array.isArray(products)) {
    throw new Error("API response সঠিক নয়।");
  }

  const product = products.find(
    (item) => item.id === productId
  );

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}

"use client"; // 👈 энэ мөрийг хамгийн эхэнд нэмнэ

import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  const { products, isLoading, error } = useProducts();
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Онцлох бүтээгдэхүүн</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            100% цэвэр Монгол кашмераас хийсэн дэлхийн жишигт нийцсэн бүтээгдэхүүн
          </p>
        </div>

        {isLoading ? (
          <div className="text-center text-gray-500">Бүтээгдэхүүн ачаалж байна...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

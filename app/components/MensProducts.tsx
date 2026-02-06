'use client';
import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';

interface MensProductsProps {
  onProductClick: (productId: number) => void;
}

export function MensProducts({ onProductClick }: MensProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Бүгд');
  const [priceRange, setPriceRange] = useState<string>('Бүгд');
  const [sortBy, setSortBy] = useState<string>('Шинэ');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Бүгд', 'Цамц', 'Өмд', 'Жилэт', 'Кардиган', 'Хүрэм'];
  const priceRanges = ['Бүгд', '₮100,000 - ₮300,000', '₮300,000 - ₮500,000', '₮500,000+'];
  const sortOptions = ['Шинэ', 'Үнэ: Багаас их', 'Үнэ: Ихээс бага', 'Алдартай'];

  const { products, isLoading, error } = useProducts();
  const allProducts = products.filter((product) =>
    product.gender ? product.gender === 'Эрэгтэй' : true
  );

  // Filter products
  let filteredProducts = [...allProducts];

  // Filter by category
  if (selectedCategory !== 'Бүгд') {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  // Filter by price range
  if (priceRange !== 'Бүгд') {
    if (priceRange === '₮100,000 - ₮300,000') {
      filteredProducts = filteredProducts.filter(
        (product) => (product.priceValue ?? 0) >= 100000 && (product.priceValue ?? 0) < 300000
      );
    } else if (priceRange === '₮300,000 - ₮500,000') {
      filteredProducts = filteredProducts.filter(
        (product) => (product.priceValue ?? 0) >= 300000 && (product.priceValue ?? 0) < 500000
      );
    } else if (priceRange === '₮500,000+') {
      filteredProducts = filteredProducts.filter(
        (product) => (product.priceValue ?? 0) >= 500000
      );
    }
  }

  // Sort products
  if (sortBy === 'Үнэ: Багаас их') {
    filteredProducts.sort((a, b) => (a.priceValue ?? 0) - (b.priceValue ?? 0));
  } else if (sortBy === 'Үнэ: Ихээс бага') {
    filteredProducts.sort((a, b) => (b.priceValue ?? 0) - (a.priceValue ?? 0));
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl text-gray-900 mb-2">Эрэгтэй хувцас</h1>
          <p className="text-gray-600">
            Эрэгтэй хүмүүст зориулсан өндөр чанарын кашмер бүтээгдэхүүн
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-6 border-b border-gray-200">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-900 hover:bg-gray-50"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Шүүлтүүр
          </button>

          {/* Desktop Filters */}
          <div className={`flex-1 ${showFilters ? 'block' : 'hidden sm:block'}`}>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Category Filter */}
              <div className="relative flex-1">
                <label className="block text-xs text-gray-600 mb-1">Ангилал</label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 appearance-none cursor-pointer hover:border-gray-400 transition-colors"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Price Filter */}
              <div className="relative flex-1">
                <label className="block text-xs text-gray-600 mb-1">Үнэ</label>
                <div className="relative">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 appearance-none cursor-pointer hover:border-gray-400 transition-colors"
                  >
                    {priceRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Sort By */}
              <div className="relative flex-1">
                <label className="block text-xs text-gray-600 mb-1">Эрэмбэлэх</label>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 appearance-none cursor-pointer hover:border-gray-400 transition-colors"
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-end">
            <p className="text-sm text-gray-600">
              {filteredProducts.length} бүтээгдэхүүн
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="text-center py-16">
            <p className="text-gray-600">Бүтээгдэхүүнүүдийг уншиж байна...</p>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-gray-600">{error}</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} onClick={() => onProductClick(product.id)}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600">Таны хайсан шалгуурт нийцэх бүтээгдэхүүн олдсонгүй</p>
          </div>
        )}
      </div>
    </div>
  );
}

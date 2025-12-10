'use client';
import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

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

  const allProducts = [
    {
      id: 5,
      name: 'Кашмер кардиган - Цэнхэр',
      price: '₮410,000',
      image: 'https://images.unsplash.com/photo-1603906650843-b58e94d9df4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzY0Nzg2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Кардиган',
      priceValue: 410000
    },
    {
      id: 7,
      name: 'Кашмер жилэт - Улаан',
      price: '₮580,000',
      image: 'https://images.unsplash.com/photo-1759326739735-fd2b783c763d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBrbml0d2VhcnxlbnwxfHx8fDE3NjQ3ODYzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Жилэт',
      priceValue: 580000
    },
    {
      id: 9,
      name: 'Кашмер цамц - Хар',
      price: '₮450,000',
      image: 'https://images.unsplash.com/photo-1603906650843-b58e94d9df4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzY0Nzg2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Цамц',
      priceValue: 450000
    },
    {
      id: 10,
      name: 'Кашмер өмд - Саарал',
      price: '₮380,000',
      image: 'https://images.unsplash.com/photo-1759326739735-fd2b783c763d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBrbml0d2VhcnxlbnwxfHx8fDE3NjQ3ODYzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Өмд',
      priceValue: 380000
    },
    {
      id: 11,
      name: 'Кашмер хүрэм - Бор',
      price: '₮620,000',
      image: 'https://images.unsplash.com/photo-1553808373-b2c5b7ddb117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmYXNoaW9ufGVufDF8fHx8MTc2NDc3MzM2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Хүрэм',
      priceValue: 620000
    },
    {
      id: 12,
      name: 'Кашмер цамц - Ногоон',
      price: '₮440,000',
      image: 'https://images.unsplash.com/photo-1603906650843-b58e94d9df4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzY0Nzg2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Цамц',
      priceValue: 440000
    },
    {
      id: 13,
      name: 'Кашмер кардиган - Цагаан',
      price: '₮395,000',
      image: 'https://images.unsplash.com/photo-1759326739735-fd2b783c763d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBrbml0d2VhcnxlbnwxfHx8fDE3NjQ3ODYzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Кардиган',
      priceValue: 395000
    },
    {
      id: 14,
      name: 'Кашмер өмд - Хар',
      price: '₮390,000',
      image: 'https://images.unsplash.com/photo-1603906650843-b58e94d9df4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzY0Nzg2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Өмд',
      priceValue: 390000
    }
  ];

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
        (product) => product.priceValue >= 100000 && product.priceValue < 300000
      );
    } else if (priceRange === '₮300,000 - ₮500,000') {
      filteredProducts = filteredProducts.filter(
        (product) => product.priceValue >= 300000 && product.priceValue < 500000
      );
    } else if (priceRange === '₮500,000+') {
      filteredProducts = filteredProducts.filter(
        (product) => product.priceValue >= 500000
      );
    }
  }

  // Sort products
  if (sortBy === 'Үнэ: Багаас их') {
    filteredProducts.sort((a, b) => a.priceValue - b.priceValue);
  } else if (sortBy === 'Үнэ: Ихээс бага') {
    filteredProducts.sort((a, b) => b.priceValue - a.priceValue);
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
        {filteredProducts.length > 0 ? (
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

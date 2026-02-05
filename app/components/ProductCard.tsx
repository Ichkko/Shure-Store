"use client"; // 👈 энэ мөрийг хамгийн эхэнд нэмнэ
import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white border border-gray-200 overflow-hidden transition-shadow hover:shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        />

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-white px-3 py-1 text-xs text-gray-900">
          {product.category}
        </div>

        {/* Add to Cart Button - Shows on hover */}
        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
            <button 
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-white text-gray-900 py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Сагслах
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-900">{product.price}</p>
      </div>
    </div>
  );
}

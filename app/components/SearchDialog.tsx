'use client';
import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types/product';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onProductClick: (productId: number) => void;
}

export function SearchDialog({ isOpen, onClose, onProductClick }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const { products } = useProducts();
  const allProducts = products;

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
    setSearchResults(filtered);
  }, [searchQuery, allProducts]);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [isOpen]);

  const handleProductClick = (productId: number) => {
    onProductClick(productId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-2xl mx-4 shadow-2xl max-h-[80vh] flex flex-col">
        {/* Search Input */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Бүтээгдэхүүн хайх..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-gray-900 placeholder-gray-400"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto flex-1">
          {searchQuery.trim() === '' ? (
            <div className="p-8 text-center">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Бүтээгдэхүүн хайхын тулд текст оруулна уу</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {searchResults.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 truncate">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <div className="text-gray-900">{product.price}</div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-500">
                &ldquo;{searchQuery}&rdquo; хайлтад тохирох бүтээгдэхүүн олдсонгүй
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {searchResults.length > 0 && (
          <div className="p-3 border-t border-gray-200 bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              {searchResults.length} бүтээгдэхүүн олдлоо
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

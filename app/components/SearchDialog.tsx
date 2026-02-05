'use client';
import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onProductClick: (productId: number) => void;
}

export function SearchDialog({ isOpen, onClose, onProductClick }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const allProducts: Product[] = [
    {
      id: 1,
      name: 'Кашмер цамц - Бор',
      price: '₮450,000',
      image: 'https://images.unsplash.com/photo-1603906650843-b58e94d9df4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzY0Nzg2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Эмэгтэй'
    },
    {
      id: 2,
      name: 'Кашмер өмд - Цагаан',
      price: '₮380,000',
      image: 'https://images.unsplash.com/photo-1759326739735-fd2b783c763d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBrbml0d2VhcnxlbnwxfHx8fDE3NjQ3ODYzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Эмэгтэй'
    },
    {
      id: 3,
      name: 'Кашмер ороолт - Саарал',
      price: '₮280,000',
      image: 'https://images.unsplash.com/photo-1551381912-4e2e29c7fd17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHNjYXJmfGVufDF8fHx8MTc2NDgzMzA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Нэмэлт хэрэгсэл'
    },
    {
      id: 4,
      name: 'Кашмер хүрэм - Хар',
      price: '₮520,000',
      image: 'https://images.unsplash.com/photo-1553808373-b2c5b7ddb117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmYXNoaW9ufGVufDF8fHx8MTc2NDc3MzM2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Эмэгтэй'
    },
    {
      id: 5,
      name: 'Кашмер кардиган - Цэнхэр',
      price: '₮410,000',
      image: 'https://images.unsplash.com/photo-1603906650843-b58e94d9df4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzY0Nzg2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Эрэгтэй'
    },
    {
      id: 6,
      name: 'Кашмер малгай - Ногоон',
      price: '₮150,000',
      image: 'https://images.unsplash.com/photo-1643313260651-9c335822ecde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29sJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ4MzY3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Нэмэлт хэрэгсэл'
    },
    {
      id: 7,
      name: 'Кашмер жилэт - Улаан',
      price: '₮580,000',
      image: 'https://images.unsplash.com/photo-1759326739735-fd2b783c763d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBrbml0d2VhcnxlbnwxfHx8fDE3NjQ3ODYzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Эрэгтэй'
    },
    {
      id: 8,
      name: 'Кашмер бээлий - Хөх',
      price: '₮120,000',
      image: 'https://images.unsplash.com/photo-1551381912-4e2e29c7fd17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHNjYXJmfGVufDF8fHx8MTc2NDgzMzA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Нэмэлт хэрэгсэл'
    },
    {
      id: 9,
      name: 'Кашмер свитер - Ягаан',
      price: '₮390,000',
      image: 'https://images.unsplash.com/photo-1603906650843-b58e94d9df4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzY0Nzg2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Эмэгтэй'
    },
    {
      id: 10,
      name: 'Кашмер пальто - Бараан хүрэн',
      price: '₮650,000',
      image: 'https://images.unsplash.com/photo-1553808373-b2c5b7ddb117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmYXNoaW9ufGVufDF8fHx8MTc2NDc3MzM2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Эрэгтэй'
    },
    {
      id: 11,
      name: 'Кашмер өмд - Хар',
      price: '₮420,000',
      image: 'https://images.unsplash.com/photo-1759326739735-fd2b783c763d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBrbml0d2VhcnxlbnwxfHx8fDE3NjQ3ODYzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Эрэгтэй'
    },
    {
      id: 12,
      name: 'Кашмер халбага - Шар',
      price: '₮180,000',
      image: 'https://images.unsplash.com/photo-1551381912-4e2e29c7fd17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHNjYXJmfGVufDF8fHx8MTc2NDgzMzA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Нэмэлт хэрэгсэл'
    }
  ];

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
  }, [searchQuery]);

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

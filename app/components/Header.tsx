'use client';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { useState } from 'react';
import { SearchDialog } from './SearchDialog';

interface HeaderProps {
  onNavigate: (page: 'home' | 'cart' | 'profile' | 'products' | 'mens' | 'productDetail') => void;
  currentPage: string;
  onProductClick?: (productId: number) => void;
}

export function Header({ onNavigate, currentPage, onProductClick }: HeaderProps) {
  const [cartCount] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleProductClick = (productId: number) => {
    if (onProductClick) {
      onProductClick(productId);
    }
  };

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => onNavigate('home')} className="text-2xl tracking-tight text-gray-900">
              Shur Store
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('home')} className={`text-gray-700 hover:text-gray-900 transition-colors ${currentPage === 'home' ? 'border-b-2 border-gray-900' : ''}`}>
              Нүүр
            </button>
            <button onClick={() => onNavigate('products')} className={`text-gray-700 hover:text-gray-900 transition-colors ${currentPage === 'products' ? 'border-b-2 border-gray-900' : ''}`}>
              Бүтээгдэхүүн
            </button>
            <button onClick={() => onNavigate('mens')} className={`text-gray-700 hover:text-gray-900 transition-colors ${currentPage === 'mens' ? 'border-b-2 border-gray-900' : ''}`}>
              Эрэгтэй
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Эмэгтэй
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Холбоо барих
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('profile')} className={`p-2 text-gray-700 hover:text-gray-900 transition-colors ${currentPage === 'profile' ? 'bg-gray-100 rounded-full' : ''}`}>
              <User className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('cart')} className={`p-2 text-gray-700 hover:text-gray-900 transition-colors relative ${currentPage === 'cart' ? 'bg-gray-100 rounded-full' : ''}`}>
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="text-left text-gray-700 hover:text-gray-900 transition-colors">
                Нүүр
              </button>
              <button onClick={() => { onNavigate('products'); setIsMenuOpen(false); }} className="text-left text-gray-700 hover:text-gray-900 transition-colors">
                Бүтээгдэхүүн
              </button>
              <button onClick={() => { onNavigate('mens'); setIsMenuOpen(false); }} className="text-left text-gray-700 hover:text-gray-900 transition-colors">
                Эрэгтэй
              </button>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Эмэгтэй
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Холбоо барих
              </a>
            </div>
          </nav>
        )}
      </div>

      {/* Search Dialog */}
      <SearchDialog 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onProductClick={handleProductClick}
      />
    </header>
  );
}
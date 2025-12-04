'use client';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { useState } from 'react';


export function Header() {
  const [cartCount] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl tracking-tight text-gray-900">Shur Store</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Нүүр
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Бүтээгдэхүүн
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Эрэгтэй
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Эмэгтэй
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Холбоо барих
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative">
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
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Нүүр
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Бүтээгдэхүүн
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Эрэгтэй
              </a>
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
    </header>
  );
}

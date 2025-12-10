'use client';
import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Profile } from './components/Profile';
import { AllProducts } from './components/AllProducts';
import { MensProducts } from './components/MensProducts';
import { ProductDetail } from './components/ProductDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'cart' | 'profile' | 'products' | 'mens' | 'productDetail'>('home');
  const [selectedProductId, setSelectedProductId] = useState<number>(1);

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentPage('productDetail');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onNavigate={setCurrentPage} 
        currentPage={currentPage}
        onProductClick={handleProductClick}
      />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <Features />
          <ProductGrid onProductClick={handleProductClick} />
        </>
      )}
      
      {currentPage === 'cart' && <Cart />}
      
      {currentPage === 'profile' && <Profile />}
      
      {currentPage === 'products' && <AllProducts onProductClick={handleProductClick} />}
      
      {currentPage === 'mens' && <MensProducts onProductClick={handleProductClick} />}
      
      {currentPage === 'productDetail' && (
        <ProductDetail productId={selectedProductId} onNavigate={setCurrentPage} />
      )}
      
      <Footer />
    </div>
  );
}
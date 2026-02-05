'use client';
import { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
  color: string;
}

export function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Кашмер цамц - Бор',
      price: 450000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1603906650843-b58e94d9df4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzY0Nzg2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'M',
      color: 'Бор'
    },
    {
      id: 2,
      name: 'Кашмер ороолт - Саарал',
      price: 280000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1551381912-4e2e29c7fd17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHNjYXJmfGVufDF8fHx8MTc2NDgzMzA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'One Size',
      color: 'Саарал'
    },
    {
      id: 3,
      name: 'Кашмер хүрэм - Хар',
      price: 520000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1553808373-b2c5b7ddb117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmYXNoaW9ufGVufDF8fHx8MTc2NDc3MzM2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'L',
      color: 'Хар'
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 100000 ? 0 : 10000;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4">
        <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-2xl text-gray-900 mb-2">Таны сагс хоосон байна</h2>
        <p className="text-gray-600 mb-6">Худалдан авалт хийхийн тулд бүтээгдэхүүн нэмнэ үү</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl mb-8 text-gray-900">Сагс</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white p-4 sm:p-6 border border-gray-200 flex gap-4">
                {/* Image */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-gray-100 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    sizes="(min-width: 640px) 128px, 96px"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-gray-600">
                          Өнгө: {item.color} | Хэмжээ: {item.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 border border-gray-300">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-gray-900">₮{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 border border-gray-200 sticky top-24">
              <h2 className="text-xl mb-6 text-gray-900">Захиалгын дүн</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Нийт дүн</span>
                  <span>₮{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Хүргэлт</span>
                  <span>{shipping === 0 ? 'Үнэгүй' : `₮${shipping.toLocaleString()}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-500">
                    ₮{(100000 - subtotal).toLocaleString()}-ын бүтээгдэхүүн нэмвэл хүргэлт үнэгүй
                  </p>
                )}
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="text-gray-900">Нийт</span>
                  <span className="text-gray-900">₮{total.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-3 px-6 hover:bg-gray-800 transition-colors mb-3">
                Төлбөр төлөх
              </button>

              <button className="w-full border border-gray-300 text-gray-900 py-3 px-6 hover:bg-gray-50 transition-colors">
                Үргэлжлүүлэх
              </button>

              {/* Accepted Payments */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-3">Зөвшөөрөгдсөн төлбөр</p>
                <div className="flex gap-2">
                  <div className="border border-gray-300 px-2 py-1 text-xs">Visa</div>
                  <div className="border border-gray-300 px-2 py-1 text-xs">МастерКард</div>
                  <div className="border border-gray-300 px-2 py-1 text-xs">QPay</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"; // 👈 энэ мөрийг хамгийн эхэнд нэмнэ

import { ProductCard } from './ProductCard';

export function ProductGrid() {
  const products = [
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
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Онцлох бүтээгдэхүүн</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            100% цэвэр Монгол кашмераас хийсэн дэлхийн жишигт нийцсэн бүтээгдэхүүн
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

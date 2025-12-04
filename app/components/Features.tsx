"use client"; // 👈 энэ мөрийг хамгийн эхэнд нэмнэ

import { Truck, Shield, Star, RefreshCw } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Truck,
      title: 'Үнэгүй хүргэлт',
      description: '₮100,000-аас дээш худалдан авалтад'
    },
    {
      icon: Shield,
      title: 'Баталгаатай чанар',
      description: '100% жинхэнэ Монгол кашмер'
    },
    {
      icon: Star,
      title: 'Өндөр үнэлгээ',
      description: '5000+ сэтгэл хангалуун үйлчлүүлэгч'
    },
    {
      icon: RefreshCw,
      title: 'Буцаах баталгаа',
      description: '30 хоногийн буцаах эрх'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client"; // 👈 энэ мөрийг хамгийн эхэнд нэмнэ

import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-[600px] bg-gray-100">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1486776396733-b352f7608a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjB3aW50ZXJ8ZW58MXx8fHwxNzY0NzUxMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Hero"
        className="w-full h-full object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/20 bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-5xl md:text-6xl mb-4 tracking-tight">
            Монгол Кашмер
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Дэлхийн хамгийн зөөлөн, дулаахан кашмер бүтээгдэхүүн
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors">
            Худалдан авах
          </button>
        </div>
      </div>
    </section>
  );
}

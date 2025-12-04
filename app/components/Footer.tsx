"use client"; // 👈 энэ мөрийг хамгийн эхэнд нэмнэ

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Shur Store</h2>
            <p className="text-gray-400 mb-4">
              Монгол кашмерийн шилдэг чанарыг дэлхийд хүргэж буй манай брэнд таны итгэлийг үнэлж байна.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav>
            <h2 className="mb-4 text-lg font-semibold">Холбоос</h2>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">Бидний тухай</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Бүтээгдэхүүн</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Блог</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Холбоо барих</a></li>
            </ul>
          </nav>

          {/* Customer Service */}
          <nav>
            <h2 className="mb-4 text-lg font-semibold">Үйлчлүүлэгч</h2>
            <ul className="space-y-2">
              <li><a href="/shipping" className="text-gray-400 hover:text-white transition-colors">Хүргэлтийн мэдээлэл</a></li>
              <li><a href="/returns" className="text-gray-400 hover:text-white transition-colors">Буцаах бодлого</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Үйлчилгээний нөхцөл</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Нууцлалын бодлого</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Холбоо барих</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Улаанбаатар хот, Сүхбаатар дүүрэг</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>+976 7000-0000</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>info@shurstore.mn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shur Store. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
}
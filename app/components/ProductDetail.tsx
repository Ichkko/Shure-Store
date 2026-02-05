'use client';
import { Heart, ShoppingCart, Minus, Plus, Star, Truck, RefreshCcw, Shield } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailProps {
  productId: number;
  onNavigate: (page: string) => void;
}

export function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Хар');
  const [selectedSize, setSelectedSize] = useState('M');
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: productId,
    name: 'Кашмер цамц эрэгтэй',
    price: '₮450,000',
    description: 'Монгол кашмераас бүрэн бүтээсэн өндөр чанарын цамц. Зөөлөн, дулаахан, гоёмсог загвартай. Өдөр тутмын хэрэглээнд тохиромжтой бөгөөд урт хугацаанд хадгалагдана.',
    category: 'Эрэгтэй',
    colors: ['Хар', 'Саарал', 'Цэнхэр', 'Бор'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1603906650843-b58e94d9df4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzY0Nzg2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1759326739735-fd2b783c763d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBrbml0d2VhcnxlbnwxfHx8fDE3NjQ3ODYzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1553808373-b2c5b7ddb117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmYXNoaW9ufGVufDF8fHx8MTc2NDc3MzM2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    rating: 4.8,
    reviews: 127,
    inStock: true,
    features: [
      '100% цэвэр Монгол кашмер',
      'Гар урлалын өндөр чанар',
      'Угаалга хялбар',
      'Монголд үйлдвэрлэсэн'
    ],
    details: {
      material: '100% Кашмер',
      care: 'Гараар зөөлөн угаах эсвэл хими угаалгад өгөх',
      origin: 'Монгол Улс',
      weight: '350г'
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} ${product.name} (${selectedColor}, ${selectedSize}) to cart`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-gray-900">Нүүр</button>
          <span>/</span>
          <button onClick={() => onNavigate('mens')} className="hover:text-gray-900">{product.category}</button>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
                  }`}
                />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-gray-100 overflow-hidden border-2 ${
                    selectedImage === index ? 'border-gray-900' : 'border-transparent'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                    sizes="(min-width: 1024px) 12vw, 20vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <h1 className="text-3xl text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} үнэлгээ)
                  </span>
                </div>
              </div>
              <p className="text-3xl text-gray-900">{product.price}</p>
            </div>

            {/* Description */}
            <div className="border-t border-b border-gray-200 py-6">
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm text-gray-900 mb-3">
                Өнгө: <span>{selectedColor}</span>
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border ${
                      selectedColor === color
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'
                    } transition-colors`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm text-gray-900 mb-3">
                Хэмжээ: <span>{selectedSize}</span>
              </label>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border ${
                      selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'
                    } transition-colors`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <label className="block text-sm text-gray-900 mb-3">Тоо ширхэг</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {product.inStock && (
                  <span className="text-sm text-green-600">Нөөцөд байгаа</span>
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gray-900 text-white py-4 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Сагслах
            </button>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm text-gray-900 mb-4">Онцлог</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Icons */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-gray-900" />
                <p className="text-xs text-gray-600">Үнэгүй хүргэлт</p>
              </div>
              <div className="text-center">
                <RefreshCcw className="w-8 h-8 mx-auto mb-2 text-gray-900" />
                <p className="text-xs text-gray-600">30 хоног буцаалт</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-gray-900" />
                <p className="text-xs text-gray-600">Чанарын баталгаа</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm text-gray-900 mb-4">Дэлгэрэнгүй</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex">
                  <dt className="text-gray-600 w-32">Материал:</dt>
                  <dd className="text-gray-900">{product.details.material}</dd>
                </div>
                <div className="flex">
                  <dt className="text-gray-600 w-32">Арчилгаа:</dt>
                  <dd className="text-gray-900">{product.details.care}</dd>
                </div>
                <div className="flex">
                  <dt className="text-gray-600 w-32">Гарал үүсэл:</dt>
                  <dd className="text-gray-900">{product.details.origin}</dd>
                </div>
                <div className="flex">
                  <dt className="text-gray-600 w-32">Жин:</dt>
                  <dd className="text-gray-900">{product.details.weight}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

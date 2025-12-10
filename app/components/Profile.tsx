"use client"; 
import { useState } from 'react';
import { User, Package, MapPin, Settings, LogOut, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type TabType = 'info' | 'orders' | 'addresses' | 'settings';

export function Profile() {
  const [activeTab, setActiveTab] = useState<TabType>('info');

  const orders = [
    {
      id: '#12345',
      date: '2024-12-01',
      status: 'Хүргэгдсэн',
      total: '₮730,000',
      items: 2,
      image: 'https://images.unsplash.com/photo-1603906650843-b58e94d9df4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzY0Nzg2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: '#12344',
      date: '2024-11-20',
      status: 'Хүргэлтэнд',
      total: '₮450,000',
      items: 1,
      image: 'https://images.unsplash.com/photo-1551381912-4e2e29c7fd17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHNjYXJmfGVufDF8fHx8MTc2NDgzMzA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: '#12343',
      date: '2024-11-10',
      status: 'Хүргэгдсэн',
      total: '₮820,000',
      items: 3,
      image: 'https://images.unsplash.com/photo-1553808373-b2c5b7ddb117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmYXNoaW9ufGVufDF8fHx8MTc2NDc3MzM2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const addresses = [
    {
      id: 1,
      name: 'Гэрийн хаяг',
      address: 'Баянзүрх дүүрэг, 16-р хороо, 23-р байр',
      phone: '+976 9999-9999',
      isDefault: true
    },
    {
      id: 2,
      name: 'Ажлын хаяг',
      address: 'Чингэлтэй дүүрэг, Сүхбаатарын талбай 3',
      phone: '+976 8888-8888',
      isDefault: false
    }
  ];

  const tabs = [
    { id: 'info' as TabType, label: 'Хувийн мэдээлэл', icon: User },
    { id: 'orders' as TabType, label: 'Захиалгууд', icon: Package },
    { id: 'addresses' as TabType, label: 'Хаягууд', icon: MapPin },
    { id: 'settings' as TabType, label: 'Тохиргоо', icon: Settings }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl mb-8 text-gray-900">Миний профайл</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 p-6 mb-4">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                  <User className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="text-gray-900 mb-1">Болд Батаа</h3>
                <p className="text-gray-600">bold@email.com</p>
              </div>

              <nav className="space-y-1">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                      activeTab === tab.id
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span>Гарах</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Personal Info */}
            {activeTab === 'info' && (
              <div className="bg-white border border-gray-200 p-6">
                <h2 className="text-xl mb-6 text-gray-900">Хувийн мэдээлэл</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Овог</label>
                      <input
                        type="text"
                        defaultValue="Болд"
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Нэр</label>
                      <input
                        type="text"
                        defaultValue="Батаа"
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Имэйл</label>
                    <input
                      type="email"
                      defaultValue="bold@email.com"
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Утасны дугаар</label>
                    <input
                      type="tel"
                      defaultValue="+976 9999-9999"
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Төрсөн өдөр</label>
                    <input
                      type="date"
                      defaultValue="1990-01-01"
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button className="bg-gray-900 text-white px-6 py-2 hover:bg-gray-800 transition-colors">
                      Хадгалах
                    </button>
                    <button className="border border-gray-300 text-gray-900 px-6 py-2 hover:bg-gray-50 transition-colors">
                      Цуцлах
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Orders */}
            {activeTab === 'orders' && (
              <div className="bg-white border border-gray-200 p-6">
                <h2 className="text-xl mb-6 text-gray-900">Миний захиалгууд</h2>
                <div className="space-y-4">
                  {orders.map(order => (
                    <div
                      key={order.id}
                      className="border border-gray-200 p-4 hover:border-gray-400 transition-colors"
                    >
                      <div className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 flex-shrink-0 overflow-hidden">
                          <ImageWithFallback
                            src={order.image}
                            alt="Order"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="text-gray-900 mb-1">Захиалгын дугаар: {order.id}</p>
                              <p className="text-gray-600">{order.date}</p>
                            </div>
                            <span
                              className={`px-3 py-1 text-xs ${
                                order.status === 'Хүргэгдсэн'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-gray-600">{order.items} бүтээгдэхүүн</p>
                              <p className="text-gray-900">{order.total}</p>
                            </div>
                            <button className="flex items-center gap-1 text-gray-900 hover:gap-2 transition-all">
                              Дэлгэрэнгүй
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses */}
            {activeTab === 'addresses' && (
              <div className="bg-white border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl text-gray-900">Миний хаягууд</h2>
                  <button className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                    + Хаяг нэмэх
                  </button>
                </div>
                <div className="space-y-4">
                  {addresses.map(address => (
                    <div
                      key={address.id}
                      className="border border-gray-200 p-4 relative"
                    >
                      {address.isDefault && (
                        <span className="absolute top-4 right-4 bg-gray-900 text-white text-xs px-2 py-1">
                          Үндсэн
                        </span>
                      )}
                      <h3 className="text-gray-900 mb-2">{address.name}</h3>
                      <p className="text-gray-600 mb-1">{address.address}</p>
                      <p className="text-gray-600 mb-4">{address.phone}</p>
                      <div className="flex gap-3">
                        <button className="text-gray-900 hover:underline">
                          Засах
                        </button>
                        <button className="text-red-600 hover:underline">
                          Устгах
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings */}
            {activeTab === 'settings' && (
              <div className="bg-white border border-gray-200 p-6">
                <h2 className="text-xl mb-6 text-gray-900">Тохиргоо</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-gray-900">Нууц үг солих</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Одоогийн нууц үг</label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Шинэ нууц үг</label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Нууц үг баталгаажуулах</label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                        />
                      </div>
                      <button className="bg-gray-900 text-white px-6 py-2 hover:bg-gray-800 transition-colors">
                        Нууц үг солих
                      </button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="mb-4 text-gray-900">Мэдэгдлийн тохиргоо</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span className="text-gray-700">Имэйл мэдэгдэл авах</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span className="text-gray-700">Урамшууллын мэдээлэл авах</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-gray-700">SMS мэдэгдэл авах</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <button className="text-red-600 hover:underline">
                      Данс устгах
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

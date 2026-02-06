'use client';

import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Product } from '../types/product';

const DEFAULT_API_URL = 'http://localhost:8080/api/products';

const parsePriceValue = (value: unknown): number => {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    const cleaned = value.replace(/[^\d.-]/g, '');
    return Number(cleaned) || 0;
  }

  return 0;
};

const normalizeProducts = (items: unknown): Product[] => {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.map((raw, index) => {
    if (typeof raw !== 'object' || raw === null) {
      return {
        id: index + 1,
        name: 'Бүтээгдэхүүн',
        price: '₮0',
        image: '',
        category: 'Бусад',
        priceValue: 0
      };
    }

    const record = raw as Record<string, unknown>;
    const priceValue = parsePriceValue(record.priceValue ?? record.price);

    return {
      id: Number(record.id ?? index + 1),
      name: String(record.name ?? 'Бүтээгдэхүүн'),
      price: typeof record.price === 'string'
        ? record.price
        : `₮${priceValue.toLocaleString('mn-MN')}`,
      image: String(record.image ?? record.imageUrl ?? ''),
      category: String(record.category ?? 'Бусад'),
      priceValue,
      gender: record.gender ? String(record.gender) : undefined
    };
  });
};

export function useProducts() {
  const apiUrl = useMemo(
    () => process.env.NEXT_PUBLIC_PRODUCTS_API_URL ?? DEFAULT_API_URL,
    []
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(apiUrl);
        const normalized = normalizeProducts(response.data);

        if (isActive) {
          setProducts(normalized);
        }
      } catch (fetchError) {
        if (isActive) {
          setError('Бүтээгдэхүүний мэдээлэл татахад алдаа гарлаа.');
          setProducts([]);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isActive = false;
    };
  }, [apiUrl]);

  return {
    products,
    isLoading,
    error,
    apiUrl
  };
}

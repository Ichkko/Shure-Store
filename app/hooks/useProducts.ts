'use client';

import { useEffect, useMemo, useState } from 'react';
import { fallbackProducts } from '../data/fallbackProducts';
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

const formatPrice = (priceValue: number, rawPrice: unknown): string => {
  if (typeof rawPrice === 'string' && rawPrice.trim().length > 0) {
    return rawPrice;
  }

  if (priceValue > 0) {
    return `₮${priceValue.toLocaleString('mn-MN')}`;
  }

  return '₮0';
};

const normalizeProduct = (raw: Record<string, unknown>, index: number): Product => {
  const priceValue = parsePriceValue(raw.priceValue ?? raw.price ?? raw.amount);

  return {
    id: Number(raw.id ?? raw.productId ?? index + 1),
    name: String(raw.name ?? raw.productName ?? raw.title ?? 'Бүтээгдэхүүн'),
    price: formatPrice(priceValue, raw.price),
    image: String(raw.image ?? raw.imageUrl ?? raw.thumbnail ?? ''),
    category: String(raw.category ?? raw.type ?? raw.group ?? 'Бусад'),
    priceValue,
    gender: raw.gender ? String(raw.gender) : undefined
  };
};

const extractProducts = (payload: unknown): Record<string, unknown>[] => {
  if (Array.isArray(payload)) {
    return payload as Record<string, unknown>[];
  }

  if (typeof payload === 'object' && payload !== null) {
    const dataPayload = payload as { data?: unknown; products?: unknown };

    if (Array.isArray(dataPayload.data)) {
      return dataPayload.data as Record<string, unknown>[];
    }

    if (Array.isArray(dataPayload.products)) {
      return dataPayload.products as Record<string, unknown>[];
    }
  }

  return [];
};

export function useProducts() {
  const apiUrl = useMemo(
    () => process.env.NEXT_PUBLIC_PRODUCTS_API_URL ?? DEFAULT_API_URL,
    []
  );
  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch products (${response.status})`);
        }

        const payload = await response.json();
        const items = extractProducts(payload);
        const normalized = items.map(normalizeProduct).filter((product) => product.name.trim());

        if (isActive) {
          setProducts(normalized.length > 0 ? normalized : fallbackProducts);
        }
      } catch (fetchError) {
        if (isActive) {
          setError('Бүтээгдэхүүний мэдээлэл татахад алдаа гарлаа.');
          setProducts(fallbackProducts);
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

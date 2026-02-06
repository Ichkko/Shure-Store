'use client';

import { useEffect, useMemo, useState } from 'react';

const DEFAULT_API_URL = 'http://localhost:8080/api/categories';

const normalizeCategory = (raw: unknown): string => {
  if (typeof raw === 'string') {
    return raw.trim();
  }

  if (typeof raw === 'object' && raw !== null) {
    const record = raw as Record<string, unknown>;
    const value = record.name ?? record.title ?? record.category ?? record.label;
    if (typeof value === 'string') {
      return value.trim();
    }
  }

  return '';
};

const extractCategories = (payload: unknown): unknown[] => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (typeof payload === 'object' && payload !== null) {
    const dataPayload = payload as { data?: unknown; categories?: unknown };
    if (Array.isArray(dataPayload.data)) {
      return dataPayload.data;
    }
    if (Array.isArray(dataPayload.categories)) {
      return dataPayload.categories;
    }
  }

  return [];
};

const uniqueCategories = (categories: string[]): string[] => {
  const seen = new Set<string>();
  return categories.filter((category) => {
    if (!category) {
      return false;
    }
    if (seen.has(category)) {
      return false;
    }
    seen.add(category);
    return true;
  });
};

interface UseCategoriesOptions {
  fallbackCategories?: string[];
}

export function useCategories(options: UseCategoriesOptions = {}) {
  const apiUrl = useMemo(
    () => process.env.NEXT_PUBLIC_CATEGORIES_API_URL ?? DEFAULT_API_URL,
    []
  );
  const fallbackCategories = useMemo(
    () => options.fallbackCategories ?? [],
    [options.fallbackCategories]
  );
  const [categories, setCategories] = useState<string[]>(fallbackCategories);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    const loadCategories = async () => {
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
          throw new Error(`Failed to fetch categories (${response.status})`);
        }

        const payload = await response.json();
        const items = extractCategories(payload);
        const normalized = items
          .map(normalizeCategory)
          .filter((category) => category.length > 0);

        if (isActive) {
          const merged = uniqueCategories([...normalized, ...fallbackCategories]);
          setCategories(merged.length > 0 ? merged : fallbackCategories);
        }
      } catch (fetchError) {
        if (isActive) {
          setError('Ангиллын мэдээлэл татахад алдаа гарлаа.');
          setCategories(fallbackCategories);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadCategories();

    return () => {
      isActive = false;
    };
  }, [apiUrl, fallbackCategories]);

  return {
    categories,
    isLoading,
    error,
    apiUrl
  };
}

'use server';

import queryString from 'query-string';

import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export async function getProducts({
  categoryId,
  colorId,
  sizeId,
  isFeatured,
}: Query): Promise<Product[]> {
  const url = queryString.stringifyUrl({
    url: URL,
    query: { categoryId, colorId, sizeId, isFeatured },
  });
  const response = await fetch(url);

  return response.json();
}

'use server';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategories() {
  const response = await fetch(URL);

  return response.json();
}

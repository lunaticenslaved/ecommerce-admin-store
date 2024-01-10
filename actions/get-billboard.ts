'use server';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export async function getBillboard(id: string) {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
}

import products from '@/data/products'
import { NextResponse } from 'next/server'

const delay = (timer) => {
  return new Promise((resolve) => setTimeout(resolve, timer))
}

export async function GET(request, { params }) {
  const { categoria } = params
  const data = categoria === 'todos' ? products : products.filter(data => data.category.toLowerCase() === categoria.toLowerCase())
  await delay(2000)
  return NextResponse.json(data)
}
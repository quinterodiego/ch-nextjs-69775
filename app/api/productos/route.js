import products from '@/data/products'
import { NextResponse } from 'next/server'

const delay = (timer) => {
  return new Promise((resolve) => setTimeout(resolve, timer))
}

export async function GET(request) {
  await delay(2000)
  return NextResponse.json(products)
}
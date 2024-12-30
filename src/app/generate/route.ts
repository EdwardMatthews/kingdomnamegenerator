import { generateMultipleNames } from '@/lib/nameGenerator'
import { NextResponse } from 'next/server'

export async function POST() {
  const names = generateMultipleNames(10)
  return NextResponse.json({ names })
}

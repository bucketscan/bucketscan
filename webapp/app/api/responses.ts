import { NextResponse } from "next/server";

export const internalServerError = (description: string): NextResponse => NextResponse.json({
  status: 500,
  statusText: description
})

export const badRequest = (description?: string): NextResponse => NextResponse.json({
  status: 400,
  statusText: description
})

export const ok = (description?: string, result?: any): NextResponse => NextResponse.json({
  status: 200,
  statusText: description,
  ...result
})

import { NextResponse } from "next/server";

export type HttpResponse = {
  status: number
  statusText: string
}

export const internalServerError = <TBody extends HttpResponse = HttpResponse>
  (description: string): NextResponse<TBody> => NextResponse.json({
    status: 500,
    statusText: description
  } as TBody)

export const badRequest = <TBody extends HttpResponse = HttpResponse>
  (description?: string): NextResponse<TBody> => NextResponse.json({
    status: 400,
    statusText: description
  } as TBody)

export const ok = <TBody extends HttpResponse = HttpResponse>
  (description?: string, result?: any): NextResponse<TBody> => NextResponse.json({
    status: 200,
    statusText: description,
    ...result
  } as TBody)

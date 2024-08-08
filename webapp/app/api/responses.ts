import { NextResponse } from "next/server";
import { HttpResponse } from "@bucketscan/utils";

export const internalServerError = <TBody extends HttpResponse = HttpResponse>(
  description: string
): NextResponse<TBody> =>
  NextResponse.json(
    {
      status: 500,
      message: description,
    } as TBody,
    { status: 500 }
  );

export const notFound = <TBody extends HttpResponse = HttpResponse>(
  description?: string
): NextResponse<TBody> =>
  NextResponse.json(
    {
      status: 404,
      message: description,
    } as TBody,
    { status: 404 }
  );

export const badRequest = <TBody extends HttpResponse = HttpResponse>(
  description?: string
): NextResponse<TBody> =>
  NextResponse.json(
    {
      status: 400,
      message: description,
    } as TBody,
    { status: 400 }
  );

export const ok = <TBody extends HttpResponse = HttpResponse>(
  description?: string,
  result?: any
): NextResponse<TBody> =>
  NextResponse.json(
    {
      status: 200,
      message: description,
      data: result,
    } as TBody,
    { status: 200 }
  );

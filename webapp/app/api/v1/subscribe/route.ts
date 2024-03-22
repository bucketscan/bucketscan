import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, response: NextResponse): Promise<Response> {
  const email = request.nextUrl.searchParams.get("email")
  console.log(email)

  return new Response()
}

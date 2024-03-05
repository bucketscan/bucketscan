import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // if user is signed in and the current path is / redirect the user to /dashboard
  if (user && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // Check the API key header if querying the API
  if (req.nextUrl.pathname.includes('/api/v1')) {
    // TODO: Add API key header check
    // Should grab the API key and make sure they have an active subscription or within the trial credits.
  }

  return res
}

export const config = {
  matcher: ['/', '/dashboard', '/api/v1/**', '/api/v1/**/*'],
}

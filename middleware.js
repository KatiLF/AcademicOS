import { NextResponse } from 'next/server'
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient({ req, res })
  const { data: { session }, } = await supabase.auth.getSession();
  console.log("ESTAMOS ACA ==>",session)

  return res
}

export const config = {
  matcher: ['/pages/Lobby'],
};

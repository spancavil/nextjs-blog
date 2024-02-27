export { default } from 'next-auth/middleware'

export const protectedRoutes = ['/blog', '/blog/:path']
export const authRoutes = ['/login', '/register']

//This config will match everything. Every route will be intercepted
export const config = {
  matcher: ['/blog', '/blog/:path*', '/admin'],
}

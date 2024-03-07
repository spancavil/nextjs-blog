import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
import { Session } from 'next-auth'
import { NextAuthProvider } from '@/components/nextAuthProvider/NextAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Blog App',
  description: 'Generated by spancavil',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-blue text-white w-full px-5 md:px-10 lg:px-20 h-screen flex items-center flex-col justify-between">
        <NextAuthProvider>
          <NavBar />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}

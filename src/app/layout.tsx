import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "CryptoTude - Real-time Analytics",
  description: "A modern crypto dashboard built with Next.js and TanStack Query."
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className}`}>
        <Providers>
          <main className='min-h-screen bg-background text-foreground'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
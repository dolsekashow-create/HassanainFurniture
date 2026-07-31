import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: 'HassanainFurniture | Handcrafted in Damietta',
  description:
    'Handcrafted furniture made in Damietta with passion, quality materials, and timeless designs for modern living. From Damietta. Differently.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.jpeg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f0e8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${archivo.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

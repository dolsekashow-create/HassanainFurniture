import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Cairo } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'Hassanain Furniture | Handcrafted in Damietta — حسنين للأثاث',
  description:
    'Handcrafted furniture made in Damietta with passion, quality materials, and timeless designs for modern living. أثاث مصنوع يدويًا في دمياط بخامات مختارة وتصميمات تدوم.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Hassanain Furniture — You found it.',
    description: 'From Damietta. Differently.',
    images: ['/images/cover.jpg'],
    type: 'website',
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
    <html lang="en" dir="ltr" className={`bg-background ${archivo.variable} ${cairo.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

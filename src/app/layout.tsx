import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cooperativa Agricola dei Colli - Prodotti Agricoli di Qualità',
  description: 'Scopri i prodotti agricoli di qualità della Cooperativa Agricola dei Colli. Farro, farine e prodotti biologici dalla Garfagnana.',
  keywords: ['cooperativa agricola', 'farro', 'garfagnana', 'prodotti biologici', 'agricoltura sostenibile'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

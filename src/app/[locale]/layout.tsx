import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/Navbar'
import SkipLink from '@/components/SkipLink'
import ErrorBoundary from '@/components/ErrorBoundary'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Validate locale
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col bg-home">
          <SkipLink />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </div>
      </ErrorBoundary>
    </NextIntlClientProvider>
  )
}

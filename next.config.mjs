import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dl.airtable.com', 'v5.airtableusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

export default withNextIntl(nextConfig)

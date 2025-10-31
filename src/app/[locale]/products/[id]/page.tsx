import { PRODUCTS } from '@/constants/products'
import { notFound } from 'next/navigation'

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id } = await params
  const productIndex = parseInt(id)

  if (isNaN(productIndex) || productIndex < 0 || productIndex >= PRODUCTS.length) {
    notFound()
  }

  const product = PRODUCTS[productIndex]

  return (
    <div className="min-h-screen bg-white/95 backdrop-blur-sm">
      <div className="container-max py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              {product.label}
            </h1>
            <div className="w-20 h-1 bg-primary-600 rounded-full" aria-hidden="true"></div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-neutral-50 rounded-xl p-8 border-l-4 border-primary-500">
              <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

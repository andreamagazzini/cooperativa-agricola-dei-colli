'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface ProductCardProps {
  id: string
  name: string
  description: string
  imageUrl?: string
  category?: string
  price?: number | null
  inStock?: boolean
  locale: string
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  description,
  imageUrl,
  category,
  price,
  inStock = true,
  locale,
}) => {
  const excerpt = description.substring(0, 120) + (description.length > 120 ? '...' : '')

  return (
    <Link
      href={`/${locale}/products?id=${id}`}
      className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200 hover:border-primary-300"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-24 h-24 text-primary-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
        )}
        
        {/* Badge Overlay */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {category && (
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-semibold rounded-full">
              {category}
            </span>
          )}
          {!inStock && (
            <span className="px-3 py-1 bg-red-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
              Esaurito
            </span>
          )}
        </div>

        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
          {name}
        </h3>
        
        <p className="text-neutral-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
          {price ? (
            <span className="text-2xl font-bold text-primary-600">
              €{price.toFixed(2)}
            </span>
          ) : (
            <span className="text-sm text-neutral-500">Prezzo su richiesta</span>
          )}
          
          <span className="text-primary-600 font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
            Scopri di più
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard

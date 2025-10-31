/**
 * Client-side service to fetch data from serverless API
 * 
 * This service makes requests to your serverless functions (not directly to Airtable)
 * API keys are never exposed to the browser.
 */

import type { ApiResponse } from '@/types'

// Base URL for your API
// In development: use local serverless function
// In production: use deployed function URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api'

export interface AirtableProduct {
  id: string
  label: string
  description: string
  url: string
  imageUrl?: string
  category?: string
  price?: number | null
  inStock?: boolean
}

export interface AirtableImage {
  id: string
  url: string
  alt: string
  caption?: string
  category?: string
}

/**
 * Fetch products from Airtable via serverless function
 */
export async function fetchProducts(): Promise<ApiResponse<AirtableProduct[]>> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching products:', error)
    return {
      success: false,
      data: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Fetch a single product by ID
 */
export async function fetchProductById(
  id: string
): Promise<ApiResponse<AirtableProduct | null>> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      if (response.status === 404) {
        return {
          success: false,
          data: null,
          error: 'Product not found',
        }
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching product:', error)
    return {
      success: false,
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Fetch images from Airtable via serverless function
 */
export async function fetchImages(
  category?: string
): Promise<ApiResponse<AirtableImage[]>> {
  try {
    const params = category ? `?category=${encodeURIComponent(category)}` : ''
    const response = await fetch(`${API_BASE_URL}/images${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching images:', error)
    return {
      success: false,
      data: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * React hook for fetching products (optional, can use directly in components)
 * 
 * Example usage:
 * ```tsx
 * const { data: products, loading, error } = useProducts()
 * ```
 */
export function useProducts() {
  // You can create a custom hook using @uidotdev/usehooks or your own implementation
  // This is just a placeholder - implement with useState/useEffect or a data fetching library
  throw new Error('Implement with your preferred data fetching pattern')
}

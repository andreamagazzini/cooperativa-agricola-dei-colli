// Image optimization utilities

export interface ImageOptimizationOptions {
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'jpeg' | 'png' | 'avif'
}

export function optimizeImageUrl(
  originalUrl: string, 
  options: ImageOptimizationOptions = {}
): string {
  const { width, height, quality = 80, format = 'webp' } = options
  
  // For now, return the original URL since we don't have a CDN
  // In production, you would integrate with a service like Cloudinary, ImageKit, or similar
  return originalUrl
}

export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

export function preloadImages(sources: string[]): Promise<void[]> {
  return Promise.all(sources.map(preloadImage))
}

// Generate responsive image srcset
export function generateSrcSet(
  baseUrl: string,
  widths: number[] = [320, 640, 768, 1024, 1280, 1536]
): string {
  return widths
    .map(width => `${optimizeImageUrl(baseUrl, { width })} ${width}w`)
    .join(', ')
}

// Get optimal image size based on container width
export function getOptimalImageSize(
  containerWidth: number,
  devicePixelRatio: number = 1
): number {
  const optimalWidth = containerWidth * devicePixelRatio
  
  // Common breakpoints for responsive images
  const breakpoints = [320, 640, 768, 1024, 1280, 1536, 1920]
  
  return breakpoints.find(bp => bp >= optimalWidth) || breakpoints[breakpoints.length - 1]
}
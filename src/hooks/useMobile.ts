import { useEffect, useState } from 'react'

interface ViewportMetaProps {
  width?: string
  initialScale?: number
  maximumScale?: number
  userScalable?: boolean
  viewportFit?: 'auto' | 'contain' | 'cover'
}

export function useViewportMeta({
  width = 'device-width',
  initialScale = 1,
  maximumScale = 5,
  userScalable = true,
  viewportFit = 'cover'
}: ViewportMetaProps = {}) {
  useEffect(() => {
    // Get or create viewport meta tag
    let viewportMeta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement
    
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta')
      viewportMeta.name = 'viewport'
      document.head.appendChild(viewportMeta)
    }
    
    // Build content string
    const contentParts = [
      `width=${width}`,
      `initial-scale=${initialScale}`,
      `maximum-scale=${maximumScale}`,
      `user-scalable=${userScalable ? 'yes' : 'no'}`
    ]
    
    if (viewportFit !== 'auto') {
      contentParts.push(`viewport-fit=${viewportFit}`)
    }
    
    viewportMeta.content = contentParts.join(', ')
    
    // Cleanup function
    return () => {
      // Reset to default viewport on cleanup
      viewportMeta.content = 'width=device-width, initial-scale=1'
    }
  }, [width, initialScale, maximumScale, userScalable, viewportFit])
}

// Hook for detecting mobile devices
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone']
      const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword))
      const isSmallScreen = window.innerWidth <= 768
      
      setIsMobile(isMobileDevice || isSmallScreen)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])
  
  return isMobile
}

// Hook for detecting touch capability
export function useIsTouchDevice(): boolean {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])
  
  return isTouchDevice
}
import { useState, useEffect } from 'react'

interface UseScrollReturn {
  scrollY: number
  scrollDirection: 'up' | 'down'
  isScrolled: boolean
}

export function useScroll(): UseScrollReturn {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      setScrollY(currentScrollY)
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
      setIsScrolled(currentScrollY > 20)
      
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return {
    scrollY,
    scrollDirection,
    isScrolled
  }
}
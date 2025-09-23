import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage?: number
}

export function usePerformanceMonitor(componentName: string) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isMonitoring, setIsMonitoring] = useState(true)

  useEffect(() => {
    if (!isMonitoring) return

    const startTime = performance.now()
    const startMemory = (performance as any).memory?.usedJSHeapSize

    const measurePerformance = () => {
      const endTime = performance.now()
      const endMemory = (performance as any).memory?.usedJSHeapSize
      
      const loadTime = endTime - startTime
      const renderTime = performance.now() - startTime
      const memoryUsage = endMemory && startMemory ? endMemory - startMemory : undefined

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage
      })

      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Performance metrics for ${componentName}:`, {
          loadTime: `${loadTime.toFixed(2)}ms`,
          renderTime: `${renderTime.toFixed(2)}ms`,
          memoryUsage: memoryUsage ? `${(memoryUsage / 1024 / 1024).toFixed(2)}MB` : 'N/A'
        })
      }
    }

    // Measure after component mount
    const timeoutId = setTimeout(measurePerformance, 0)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [componentName, isMonitoring])

  const stopMonitoring = () => setIsMonitoring(false)
  const startMonitoring = () => setIsMonitoring(true)

  return {
    metrics,
    stopMonitoring,
    startMonitoring,
    isMonitoring
  }
}
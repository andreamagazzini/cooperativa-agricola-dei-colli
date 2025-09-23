import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import ErrorBoundary from './components/ErrorBoundary'
import { LoadingSpinner } from './components/ui'
import { useViewportMeta } from './hooks'

function App() {
  // Configure viewport for mobile optimization
  useViewportMeta({
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover'
  })

  return (
    <ErrorBoundary>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
          <div className="text-center">
            <LoadingSpinner size="lg" className="mx-auto mb-4" />
            <p className="text-neutral-600">Caricamento in corso...</p>
          </div>
        </div>
      }>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App

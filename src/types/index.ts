// Global types for the application

export interface Product {
  id: string
  label: string
  url: string
  description: string
}

export interface MenuItem {
  label: string
  img: string
  onHoverImg: string
  url: string
  description: string
}

export interface ContactInfo {
  phone: string
  formattedPhone: string
  email: string
  whatsapp: string
}

export interface FormData {
  name: string
  email: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export interface ImageAssets {
  [key: string]: string
}

export interface IconAssets {
  [key: string]: string
}

// Route types
export type RouteId = string | undefined

// Component prop types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ClickableProps extends BaseComponentProps {
  onClick?: () => void
  disabled?: boolean
}

export interface ImageProps extends BaseComponentProps {
  src: string
  alt: string
  loading?: 'lazy' | 'eager'
}

// API types (for future use)
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Theme types
export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  textSecondary: string
}

export interface ThemeConfig {
  colors: ThemeColors
  fonts: {
    primary: string
    secondary: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}

// Animation types
export interface AnimationConfig {
  duration: number
  delay: number
  easing: string
}

export interface MotionVariants {
  hidden: Record<string, any>
  visible: Record<string, any>
}

// Performance types
export interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage?: number
  bundleSize?: number
}

// Accessibility types
export interface A11yProps {
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-expanded'?: boolean
  'aria-hidden'?: boolean
  role?: string
  tabIndex?: number
}

// Error types
export interface AppError {
  code: string
  message: string
  details?: Record<string, any>
  timestamp: Date
}

export interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type Required<T, K extends keyof T> = T & Required<Pick<T, K>>
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// Event types
export interface CustomEvent<T = any> {
  type: string
  payload: T
  timestamp: Date
}

// Storage types
export interface StorageItem<T = any> {
  key: string
  value: T
  expires?: Date
}

// Navigation types
export interface NavigationItem {
  label: string
  path: string
  icon?: string
  children?: NavigationItem[]
}

export interface BreadcrumbItem {
  label: string
  path?: string
  current?: boolean
}
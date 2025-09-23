import { FC, ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const Card: FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md'
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg border border-neutral-200 transition-all duration-300'
  const hoverClasses = hover ? 'hover:shadow-xl hover:scale-105' : ''
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Card
import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface BaseInputProps {
  label?: string
  error?: string
  helperText?: string
  className?: string
  variant?: 'light' | 'dark'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, BaseInputProps {}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BaseInputProps {}

const Input: FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  variant = 'light',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  const isDark = variant === 'dark'
  
  const inputClasses = `w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
    error 
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
      : isDark
        ? 'border-white/40 bg-white/15 text-white placeholder:text-white/70'
        : 'border-neutral-300'
  } ${className}`

  const labelClasses = `block text-sm font-medium ${
    isDark ? 'text-white' : 'text-neutral-700'
  }`

  const errorClasses = `text-sm ${
    isDark ? 'text-red-300' : 'text-red-600'
  }`

  const helperClasses = `text-sm ${
    isDark ? 'text-white/60' : 'text-neutral-500'
  }`

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        id={inputId}
        className={inputClasses}
        {...props}
      />
      
      {error && (
        <p className={errorClasses}>{error}</p>
      )}
      
      {helperText && !error && (
        <p className={helperClasses}>{helperText}</p>
      )}
    </div>
  )
}

const Textarea: FC<TextareaProps> = ({
  label,
  error,
  helperText,
  className = '',
  variant = 'light',
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
  const isDark = variant === 'dark'
  
  const textareaClasses = `w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none ${
    error 
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
      : isDark
        ? 'border-white/40 bg-white/15 text-white placeholder:text-white/70'
        : 'border-neutral-300'
  } ${className}`

  const labelClasses = `block text-sm font-medium ${
    isDark ? 'text-white' : 'text-neutral-700'
  }`

  const errorClasses = `text-sm ${
    isDark ? 'text-red-300' : 'text-red-600'
  }`

  const helperClasses = `text-sm ${
    isDark ? 'text-white/60' : 'text-neutral-500'
  }`

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={textareaId} className={labelClasses}>
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        id={textareaId}
        className={textareaClasses}
        {...props}
      />
      
      {error && (
        <p className={errorClasses}>{error}</p>
      )}
      
      {helperText && !error && (
        <p className={helperClasses}>{helperText}</p>
      )}
    </div>
  )
}

export { Input, Textarea }

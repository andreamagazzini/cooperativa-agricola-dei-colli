import { FC, ReactNode, useState, useRef, useEffect } from 'react'

interface TouchableProps {
  children: ReactNode
  onTap?: () => void
  onLongPress?: () => void
  className?: string
  disabled?: boolean
  hapticFeedback?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const Touchable: FC<TouchableProps> = ({
  children,
  onTap,
  onLongPress,
  className = '',
  disabled = false,
  hapticFeedback = true,
  onMouseEnter,
  onMouseLeave
}) => {
  const [isPressed, setIsPressed] = useState(false)
  const [isLongPressing, setIsLongPressing] = useState(false)
  const touchStartTime = useRef<number>(0)
  const longPressTimer = useRef<NodeJS.Timeout | null>(null)
  const touchStartPosition = useRef<{ x: number; y: number } | null>(null)

  const triggerHapticFeedback = () => {
    if (hapticFeedback && 'vibrate' in navigator) {
      navigator.vibrate(10) // Short vibration
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (disabled) return
    
    setIsPressed(true)
    touchStartTime.current = Date.now()
    
    const touch = e.touches[0]
    touchStartPosition.current = { x: touch.clientX, y: touch.clientY }
    
    // Start long press timer
    if (onLongPress) {
      longPressTimer.current = setTimeout(() => {
        setIsLongPressing(true)
        triggerHapticFeedback()
        onLongPress()
      }, 500) // 500ms for long press
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (disabled) return
    
    setIsPressed(false)
    setIsLongPressing(false)
    
    // Clear long press timer
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
    
    // Check if it's a tap (not a long press and not moved too much)
    const touchEndTime = Date.now()
    const touchDuration = touchEndTime - touchStartTime.current
    
    if (touchDuration < 500 && !isLongPressing && onTap) {
      const touch = e.changedTouches[0]
      const touchEndPosition = { x: touch.clientX, y: touch.clientY }
      
      if (touchStartPosition.current) {
        const deltaX = Math.abs(touchEndPosition.x - touchStartPosition.current.x)
        const deltaY = Math.abs(touchEndPosition.y - touchStartPosition.current.y)
        
        // If moved less than 10px, consider it a tap
        if (deltaX < 10 && deltaY < 10) {
          triggerHapticFeedback()
          onTap()
        }
      }
    }
  }

  const handleTouchMove = () => {
    if (disabled) return
    
    // Cancel long press if user moves finger
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
  }

  const handleMouseDown = () => {
    if (disabled) return
    setIsPressed(true)
  }

  const handleMouseUp = () => {
    if (disabled) return
    setIsPressed(false)
    if (onTap) {
      onTap()
    }
  }

  const handleMouseLeave = () => {
    if (disabled) return
    setIsPressed(false)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
      }
    }
  }, [])

  return (
    <div
      className={`transition-all duration-150 ${
        isPressed ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => {
        handleMouseLeave()
        onMouseLeave?.()
      }}
      style={{ touchAction: 'manipulation' }} // Prevent double-tap zoom
    >
      {children}
    </div>
  )
}

export default Touchable

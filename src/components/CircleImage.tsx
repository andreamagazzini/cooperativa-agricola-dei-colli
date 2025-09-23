import { FC, useState } from 'react'
import LazyImage from './LazyImage'
import Touchable from './Touchable'

interface Props {
  label: string
  src: string
  onHoverSrc: string
  onClick?: () => void
  className?: string
}

const CircleImage: FC<Props> = ({ label, src, onHoverSrc, onClick, className = '' }) => {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    setCurrentSrc(onHoverSrc)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setCurrentSrc(src)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
    if (currentSrc === onHoverSrc) {
      setCurrentSrc(src)
      setIsHovered(false)
    } else {
      setCurrentSrc(onHoverSrc)
      setIsHovered(true)
    }
  }

  return (
    <Touchable
      onTap={onClick}
      className={`flex flex-col items-center group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Container */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-full border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
          <LazyImage
            src={currentSrc}
            alt={`${label} - Click to learn more`}
            className={`object-cover h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72 transition-all duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
        </div>
        
        {/* Floating Icon */}
        <div className={`absolute -top-2 -right-2 bg-primary-500 text-white rounded-full p-2 shadow-lg transition-all duration-300 ${
          isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
        }`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>

      {/* Label */}
      <div className="mt-6 text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-white bg-primary-800/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg ring-2 ring-white/20 group-hover:bg-primary-700 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          {label}
        </h3>
      </div>
    </Touchable>
  )
}

export default CircleImage

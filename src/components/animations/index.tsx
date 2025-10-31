import { FC, ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

const AnimatedSection: FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up'
}) => {
  const getVariants = (): Variants => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }

    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: baseTransition
          }
        }
      case 'down':
        return {
          hidden: { opacity: 0, y: -60 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: baseTransition
          }
        }
      case 'left':
        return {
          hidden: { opacity: 0, x: 60 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: baseTransition
          }
        }
      case 'right':
        return {
          hidden: { opacity: 0, x: -60 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: baseTransition
          }
        }
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: baseTransition
          }
        }
    }
  }

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}

interface StaggeredContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

const StaggeredContainer: FC<StaggeredContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  )
}

interface HoverAnimationProps {
  children: ReactNode
  className?: string
  scale?: number
  rotate?: number
}

const HoverAnimation: FC<HoverAnimationProps> = ({
  children,
  className = '',
  scale = 1.05,
  rotate = 0
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale, 
        rotate,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
    >
      {children}
    </motion.div>
  )
}

export { AnimatedSection, StaggeredContainer, HoverAnimation }

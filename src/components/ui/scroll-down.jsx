'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const ScrollDownArrow = ({ targetId, className = '' }) => {
  const scrollToTarget = () => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.button
      onClick={scrollToTarget}
      className={`flex items-center justify-center p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      aria-label="Scroll down"
    >
      <ChevronDown className="w-6 h-6" />
    </motion.button>
  )
}


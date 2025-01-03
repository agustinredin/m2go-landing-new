'use client'

import React, { forwardRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ScrollAnimatedDiv = forwardRef(
  ({ as = 'div', children, duration = 0.75, ...props }, ref) => {
    const inViewRef = React.useRef(null)
    const isInView = useInView(inViewRef, { amount: 1, once: true }) 

    const Component = motion[as] || motion.div

    const stagger = duration * 100

    return (
      <Component
        ref={(node) => {
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
          inViewRef.current = node
        }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -stagger }}
        transition={{ duration, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

ScrollAnimatedDiv.displayName = 'ScrollAnimatedDiv'

export default ScrollAnimatedDiv

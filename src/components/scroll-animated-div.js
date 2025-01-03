'use client'

import React, { forwardRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const ScrollAnimatedDiv = forwardRef(
  ({ as = 'div', children, duration = 0.75, delay = 0.1, ...props }, ref) => {
    const inViewRef = React.useRef(null)
    const isInView = useInView(inViewRef, { amount: 1, once: true }) 

    const Component = motion[as] || motion.div

    //stagger desde eje Y (px)
    const stagger = duration * 40

    const [scrollTop, setScrollTop] = useState(0)
    const [animationTrigger, setAnimationTrigger] = useState(false)

  
    useEffect(() => {
      
      const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop)
      }
      window.addEventListener('scroll', onScroll);

      if(isInView) 
        setTimeout(() => setAnimationTrigger(true), 100)

    },[scrollTop, isInView]);


    return (
      <Component
        ref={(node) => {
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
          inViewRef.current = node
        }}
        initial={{ opacity: 0, y: 0 }}
        animate={animationTrigger ? { opacity: 1, y: 0 } : { opacity: 0, y: -stagger }}
        transition={{ duration, ease: 'easeOut', delay: delay }}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

ScrollAnimatedDiv.displayName = 'ScrollAnimatedDiv'

export default ScrollAnimatedDiv

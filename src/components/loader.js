'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function PageLoader() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    handleStart() // Show loader immediately when pathname changes
    
    // Simulate a delay to show the loader (remove in production)
    const timer = setTimeout(() => {
      handleComplete()
    }, 2200)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className="load-wrapper" id="loader">
        <Loader2 className="animate-spin"/>
    </div>
  )
}


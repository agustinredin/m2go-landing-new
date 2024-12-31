'use client'

import { useEffect } from 'react'

export default function RenderHandler() {
  useEffect(() => {
    document.getElementById("loader")?.classList.add("load-wrapper-complete")
  }, []) // Empty dependency array ensures this runs only once after mount

  return null // This component doesn't render anything
}


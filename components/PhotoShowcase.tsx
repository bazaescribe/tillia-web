import Image from "next/image"
import { useEffect, useRef, useState } from "react"

// X and Y are min and max width in px, R is max border radius in px
const MAX_WIDTH = 2000 // Start large
const MIN_WIDTH = 1336  // End small
const MIN_RADIUS = 0
const MAX_RADIUS = 32
const MAX_SCROLL = 300

export default function PhotoShowcase() {
  const [scrollY, setScrollY] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(1280)

  useEffect(() => {
    const updateSize = () => setViewportWidth(window.innerWidth)
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate progress (0 to 1, both ways)
  let progress = Math.min(scrollY / MAX_SCROLL, 1)
  if (scrollY < 0) progress = 0

  // Interpolate width and border-radius
  const width = MAX_WIDTH - (MAX_WIDTH - MIN_WIDTH) * progress
  const borderRadius = MIN_RADIUS + (MAX_RADIUS - MIN_RADIUS) * progress
  const height = width * 0.5625 // 16:9 aspect ratio

  return (
    <div className="w-full mt-36 overflow-hidden">
      <div
        className="relative mx-auto transition-all duration-300 ease-out overflow-hidden"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: `${borderRadius}px`,
          maxWidth: '100%',
        }}
      >
        <Image
          src="/photos/store.jpg"
          alt="Business showcase"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  )
} 
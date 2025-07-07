'use client'

import { useState, useEffect } from 'react'

interface GeolocationState {
  isInMexico: boolean | null
  isLoading: boolean
  error: string | null
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    isInMexico: null,
    isLoading: true,
    error: null
  })

  useEffect(() => {
    const detectLocation = async () => {
      try {
        // First try to get location from IP using a free geolocation API
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        if (data.country_code === 'MX') {
          setState({
            isInMexico: true,
            isLoading: false,
            error: null
          })
        } else {
          setState({
            isInMexico: false,
            isLoading: false,
            error: null
          })
        }
      } catch (error) {
        console.warn('Could not detect location via IP, defaulting to Mexico:', error)
        // Default to Mexico if we can't detect location
        setState({
          isInMexico: true,
          isLoading: false,
          error: null
        })
      }
    }

    detectLocation()
  }, [])

  return state
} 
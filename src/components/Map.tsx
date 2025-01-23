'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Property } from '@/types/database'

// You'll need to create an environment variable NEXT_PUBLIC_MAPBOX_TOKEN
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

interface MapProps {
  properties: Property[]
  onPropertyClick?: (property: Property) => void
  className?: string
}

export default function Map({ properties, onPropertyClick, className = '' }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [mapError, setMapError] = useState<string | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return
    if (!MAPBOX_TOKEN) {
      setMapError('Mapbox token is missing. Please add NEXT_PUBLIC_MAPBOX_TOKEN to your environment variables.')
      return
    }

    // Set the token
    mapboxgl.accessToken = MAPBOX_TOKEN

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [12.4964, 41.9028], // Center of Italy
        zoom: 6
      })

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl())

      // Add markers for each property
      properties.forEach((property) => {
        const [lng, lat] = property.coordinates || [0, 0]
        
        // Create marker element
        const el = document.createElement('div')
        el.className = 'property-marker'
        el.innerHTML = `<div class="bg-emerald-600 text-white px-2 py-1 rounded-full text-sm font-bold">€${(property.price / 1000000).toFixed(1)}M</div>`
        
        // Add marker to map
        const marker = new mapboxgl.Marker(el)
          .setLngLat([lng, lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div class="p-2">
                  <h3 class="font-bold">${property.title}</h3>
                  <p class="text-sm text-gray-600">${property.location}</p>
                  <p class="text-emerald-600 font-bold">€${property.price.toLocaleString()}</p>
                </div>
              `)
          )
          .addTo(map.current)

        // Add click event
        el.addEventListener('click', () => {
          if (onPropertyClick) {
            onPropertyClick(property)
          }
        })
      })
    } catch (error) {
      setMapError('Error initializing map. Please try again later.')
    }

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [properties, onPropertyClick])

  if (mapError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
        {mapError}
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={mapContainer} 
        className={`w-full transition-all duration-300 ease-in-out ${
          isExpanded ? 'h-[calc(100vh-4rem)]' : 'h-[400px]'
        }`} 
      />
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg font-medium hover:bg-gray-50 transition-colors"
      >
        {isExpanded ? 'Collapse Map' : 'Expand Map'}
      </button>
    </div>
  )
} 
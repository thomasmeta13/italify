'use client'

import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/PropertyCard"
import { PropertyCardSkeleton } from "@/components/PropertyCardSkeleton"
import Map from "@/components/Map"
import { properties } from "@/data/properties"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState, Suspense } from "react"
import { Property } from "@/types/database"
import { useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Get unique locations and regions from properties
const locations = [...new Set(properties.map(p => p.location))]
const regions = [...new Set(properties.map(p => p.region))]

function PropertiesContent() {
  const searchParams = useSearchParams()
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid')
  const [isLoading, setIsLoading] = useState(true)
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState(searchParams?.get("q") ?? "")
  const [filters, setFilters] = useState({
    region: "",
    propertyType: "",
    priceRange: "",
    bedrooms: "",
    listingType: searchParams?.get("type") ?? "buy"
  })

  // Handle location search and suggestions
  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    if (value.length > 1) {
      const suggestions = [...locations, ...regions].filter(
        loc => loc.toLowerCase().includes(value.toLowerCase())
      )
      setLocationSuggestions(suggestions)
    } else {
      setLocationSuggestions([])
    }
  }

  useEffect(() => {
    // Get search parameters
    const query = searchQuery.toLowerCase()
    const type = filters.listingType

    // Filter properties based on search parameters and filters
    let filtered = [...properties]

    // Apply listing type filter (rent/buy)
    filtered = filtered.filter(property => 
      type === "rent" ? property.is_rental : !property.is_rental
    )

    // Apply search query
    if (query) {
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query) ||
        property.property_type.toLowerCase().includes(query) ||
        property.region.toLowerCase().includes(query)
      )
    }

    // Apply filters
    if (filters.region) {
      filtered = filtered.filter(p => p.region === filters.region)
    }
    if (filters.propertyType) {
      filtered = filtered.filter(p => p.property_type === filters.propertyType)
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number)
      filtered = filtered.filter(p => p.price >= min && (!max || p.price <= max))
    }
    if (filters.bedrooms) {
      const minBedrooms = parseInt(filters.bedrooms)
      filtered = filtered.filter(p => p.bedrooms >= minBedrooms)
    }

    setFilteredProperties(filtered)

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [searchQuery, filters])

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Properties in Italy</h1>
            <p className="text-gray-600 max-w-2xl">
              Discover your perfect Italian property, from historic villas to modern apartments
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </Button>
            <Button
              variant={viewMode === 'map' ? 'default' : 'outline'}
              onClick={() => setViewMode('map')}
            >
              Map View
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="flex gap-4">
            <Input
              placeholder="Search locations..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="flex-1"
            />
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          {locationSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white mt-1 rounded-lg shadow-lg border border-gray-200 z-10">
              {locationSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                  onClick={() => {
                    setSearchQuery(suggestion)
                    setLocationSuggestions([])
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-lg">
        <Select
          value={filters.listingType}
          onValueChange={(value) => setFilters(prev => ({ ...prev, listingType: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Listing Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="buy">For Sale</SelectItem>
            <SelectItem value="rent">For Rent</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.region}
          onValueChange={(value) => setFilters(prev => ({ ...prev, region: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((region) => (
              <SelectItem key={region} value={region.toLowerCase()}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.propertyType}
          onValueChange={(value) => setFilters(prev => ({ ...prev, propertyType: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="villa">Villa</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="estate">Estate</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.priceRange}
          onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-1000000">Up to €1M</SelectItem>
            <SelectItem value="1000000-2000000">€1M - €2M</SelectItem>
            <SelectItem value="2000000-5000000">€2M - €5M</SelectItem>
            <SelectItem value="5000000">€5M+</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.bedrooms}
          onValueChange={(value) => setFilters(prev => ({ ...prev, bedrooms: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Bedrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1+ Bedroom</SelectItem>
            <SelectItem value="2">2+ Bedrooms</SelectItem>
            <SelectItem value="3">3+ Bedrooms</SelectItem>
            <SelectItem value="4">4+ Bedrooms</SelectItem>
            <SelectItem value="5">5+ Bedrooms</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results Count */}
      <div className="text-gray-600">
        {filteredProperties.length} properties found
      </div>

      {/* View Modes */}
      <div className="relative">
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <>
                <PropertyCardSkeleton />
                <PropertyCardSkeleton />
                <PropertyCardSkeleton />
                <PropertyCardSkeleton />
                <PropertyCardSkeleton />
                <PropertyCardSkeleton />
              </>
            ) : (
              filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
            <Map
              properties={filteredProperties}
              onPropertyClick={setSelectedProperty}
              className="sticky top-8"
            />
            <div className="space-y-8">
              {isLoading ? (
                <>
                  <PropertyCardSkeleton />
                  <PropertyCardSkeleton />
                  <PropertyCardSkeleton />
                </>
              ) : (
                filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    isHighlighted={selectedProperty?.id === property.id}
                  />
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="space-y-8">
      <div className="animate-pulse bg-gray-200 h-8 w-48 rounded" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PropertyCardSkeleton />
        <PropertyCardSkeleton />
        <PropertyCardSkeleton />
        <PropertyCardSkeleton />
        <PropertyCardSkeleton />
        <PropertyCardSkeleton />
      </div>
    </div>}>
      <PropertiesContent />
    </Suspense>
  )
} 
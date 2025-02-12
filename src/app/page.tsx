'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { PropertyCard } from "@/components/PropertyCard"
import { PropertyCardSkeleton } from "@/components/PropertyCardSkeleton"
import { properties } from "@/data/properties"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Property } from "@/types/database"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [propertyType, setPropertyType] = useState<"buy" | "rent">("buy")

  useEffect(() => {
    // Load and filter properties
    const filtered = properties.filter(p => p.is_featured).slice(0, 3)
    setFeaturedProperties(filtered)

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleSearch = () => {
    // Construct the search URL with parameters
    const searchParams = new URLSearchParams()
    if (searchQuery) searchParams.set("q", searchQuery)
    searchParams.set("type", propertyType)
    
    // Navigate to properties page with search parameters
    router.push(`/properties?${searchParams.toString()}`)
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] -mt-8">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-6">Find Your Dream Italian Home – Italify Your Life, Your Way</h1>
          <p className="text-xl mb-8 max-w-2xl">
            At Italify, we help Australians connect with the charm and authenticity of Italian living. From properties to relocation, we make every step seamless.
          </p>
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row w-full max-w-2xl gap-4">
            <Select
              value={propertyType}
              onValueChange={(value: "buy" | "rent") => setPropertyType(value)}
            >
              <SelectTrigger className="bg-white/90 text-black w-full sm:w-[200px]">
                <SelectValue placeholder="I want to..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buy">Buy Property</SelectItem>
                <SelectItem value="rent">Rent Property</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-1 gap-4">
              <Input
                placeholder="Search Tuscany Villas | Amalfi Apartments | Rome Rentals"
                className="bg-white/90 text-black flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button 
                size="lg" 
                className="bg-[#004225] hover:bg-[#003319]"
                onClick={handleSearch}
              >
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#004225] hover:bg-[#003319]"
            >
              <Link href="/properties">Explore Properties</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white"
            >
              <Link href="/relocation">Learn More About Relocation Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the finest properties across Italy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <>
              <PropertyCardSkeleton />
              <PropertyCardSkeleton />
              <PropertyCardSkeleton />
            </>
          ) : (
            featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/properties">View All Properties</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Ready to Start Your Italian Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-center">
            Let us help you find the perfect property and guide you through every step of your Italian adventure
          </p>
          <div className="text-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

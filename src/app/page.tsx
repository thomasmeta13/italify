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
      <section className="relative h-[80vh] -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-6xl font-light mb-6 tracking-wide">Your Dream Italian Home</h1>
          <p className="text-xl mb-12 tracking-wider font-light">
            Discover authentic Italian properties with expert guidance
          </p>
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row w-full max-w-3xl gap-4 backdrop-blur-sm bg-white/10 p-6 rounded-lg">
            <Select
              value={propertyType}
              onValueChange={(value: "buy" | "rent") => setPropertyType(value)}
            >
              <SelectTrigger className="bg-white/90 text-black w-full sm:w-[200px] border-0">
                <SelectValue placeholder="I want to..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buy">Buy Property</SelectItem>
                <SelectItem value="rent">Rent Property</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-1 gap-4">
              <Input
                placeholder="Search locations in Italy..."
                className="bg-white/90 text-black flex-1 border-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button 
                size="lg" 
                className="bg-[#004225] hover:bg-[#003319] px-8"
                onClick={handleSearch}
              >
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm px-8 tracking-wide"
            >
              <Link href="/properties">View Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-emerald-600 text-sm tracking-widest uppercase">Curated Selection</span>
          <h2 className="text-3xl font-light mt-2">Featured Properties</h2>
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
          <Button 
            asChild 
            size="lg"
            className="px-8 tracking-wide bg-[#004225] hover:bg-[#003319]"
          >
            <Link href="/properties">View All Properties</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#004225]/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-8">Ready to Start Your Italian Journey?</h2>
          <Button 
            asChild 
            size="lg" 
            className="bg-[#004225] hover:bg-[#003319] px-8 tracking-wide"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

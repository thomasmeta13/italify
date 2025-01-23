'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Heart, Bed, Bath, Maximize, Share2, Calendar } from 'lucide-react'
import { properties } from "@/data/properties"
import Map from "@/components/Map"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === params.id)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Image Gallery */}
      <div className="relative h-[60vh] bg-gray-100 mb-8">
        <Image
          src={property.images[selectedImage]}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
          {property.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-3 h-3 rounded-full ${
                selectedImage === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <p className="text-gray-600 text-lg">{property.location}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-emerald-600">
                  €{property.price.toLocaleString()}
                </div>
                <div className="text-gray-600">
                  {property.is_rental ? 'For Rent' : 'For Sale'}
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="flex items-center gap-6 py-4 border-y border-gray-200">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-gray-600" />
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-gray-600" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="h-5 w-5 text-gray-600" />
                <span>{property.size_sqm}m²</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">About this property</h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <Map
                  properties={[property]}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Interested in this property?</h3>
              <div className="space-y-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Contact Agent
                </Button>
                <Button variant="outline" className="w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Save Property
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Property
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Viewing
                </Button>
              </div>
            </div>

            {/* Similar Properties */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Similar Properties</h3>
              <div className="space-y-4">
                {properties
                  .filter(p => p.id !== property.id && p.region === property.region)
                  .slice(0, 3)
                  .map(similarProperty => (
                    <Link
                      key={similarProperty.id}
                      href={`/properties/${similarProperty.id}`}
                      className="flex gap-4 group"
                    >
                      <div className="relative w-24 h-24">
                        <Image
                          src={similarProperty.images[0]}
                          alt={similarProperty.title}
                          fill
                          className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold group-hover:text-emerald-600 transition-colors">
                          {similarProperty.title}
                        </h4>
                        <p className="text-gray-600">{similarProperty.location}</p>
                        <p className="text-emerald-600 font-semibold">
                          €{similarProperty.price.toLocaleString()}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
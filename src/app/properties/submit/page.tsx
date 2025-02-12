'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Check, Upload } from "lucide-react"
import { useState } from "react"

const features = [
  "Pool",
  "Sea View",
  "Terrace",
  "Garden",
  "Parking",
  "Air Conditioning",
  "Heating",
  "Wi-Fi",
  "Pet Friendly",
  "Furnished",
]

export default function SubmitPropertyPage() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Introduction */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">List Your Property</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Submit your property to be featured on our platform. We review every listing to ensure it meets our quality standards and provide a personalized approach to attract the right audience.
        </p>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "Professional Management",
            description: "We handle all inquiries and bookings on your behalf",
            icon: "🏢"
          },
          {
            title: "Quality Assurance",
            description: "Your property will be presented to meet our high standards",
            icon: "✨"
          },
          {
            title: "Global Reach",
            description: "Connect with qualified Australian buyers and renters",
            icon: "🌏"
          }
        ].map(benefit => (
          <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-4">{benefit.icon}</div>
            <h3 className="font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Submission Form */}
      <form className="space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Basic Property Information</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="propertyName">Property Name/Type</Label>
              <Input 
                id="propertyName" 
                placeholder="e.g., Tuscan Villa, Modern Coastal Apartment" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location" 
                placeholder="e.g., Chianti, Tuscany" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Key Features</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.map(feature => (
                <button
                  key={feature}
                  type="button"
                  onClick={() => toggleFeature(feature)}
                  className={`p-2 rounded-md text-sm flex items-center gap-2 transition-colors ${
                    selectedFeatures.includes(feature)
                      ? 'bg-[#004225] text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {selectedFeatures.includes(feature) && <Check className="h-4 w-4" />}
                  {feature}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Brief description of your property (100-200 words)" 
              className="h-32"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Starting Price</Label>
              <Input 
                id="price" 
                type="number" 
                placeholder="e.g., 1200" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="priceType">Price Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select price type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Per Week</SelectItem>
                  <SelectItem value="monthly">Per Month</SelectItem>
                  <SelectItem value="sale">For Sale</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-sm text-gray-600">This information will not be displayed publicly</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Property Photos</h2>
          <p className="text-sm text-gray-600">Upload 5-10 high-quality photos of your property</p>
          
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
            <div className="flex flex-col items-center">
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-sm text-gray-600 mb-2">
                Drag and drop your photos here, or click to select files
              </p>
              <Button variant="outline" size="sm">
                Select Files
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 -mx-8 -mb-8 p-8 mt-8 rounded-b-xl">
          <div className="flex flex-col items-center">
            <Button size="lg" className="bg-[#004225] hover:bg-[#003319] min-w-[200px]">
              Submit Property
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              By submitting, you agree to our terms and conditions for property listings
            </p>
          </div>
        </div>
      </form>

      {/* Review Process Note */}
      <div className="mt-12 p-6 bg-[#004225]/5 rounded-lg">
        <h3 className="font-semibold mb-2">What Happens Next?</h3>
        <p className="text-gray-600 text-sm">
          After submission, our team will review your property details. Approved listings will appear 
          on our platform with only essential public information to ensure all bookings are made 
          securely through us. We'll contact you within 2-3 business days regarding your submission.
        </p>
      </div>
    </div>
  )
} 
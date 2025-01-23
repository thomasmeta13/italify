import Image from 'next/image'
import Link from 'next/link'
import { Heart, Bed, Bath, Maximize } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Property } from '@/types/database'
import { cn } from '@/lib/utils'

interface PropertyCardProps {
  property: Property
  isHighlighted?: boolean
}

export function PropertyCard({ property, isHighlighted }: PropertyCardProps) {
  return (
    <div 
      className={cn(
        "group bg-white rounded-lg overflow-hidden transition-all duration-300",
        isHighlighted 
          ? "ring-2 ring-emerald-500 shadow-lg scale-[1.02]" 
          : "shadow-sm hover:shadow-md"
      )}
    >
      <Link href={`/properties/${property.id}`} className="block relative aspect-[4/3]">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{property.title}</h3>
          <span className="text-emerald-600 font-bold whitespace-nowrap">
            €{property.price.toLocaleString()}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>

        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{property.size_sqm}m²</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {property.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              +{property.features.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  )
} 
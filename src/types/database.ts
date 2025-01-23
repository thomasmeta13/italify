export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  region: string
  bedrooms: number
  bathrooms: number
  size_sqm: number
  property_type: string
  features: string[]
  images: string[]
  is_featured: boolean
  is_rental: boolean
  status: string
  coordinates: number[]
  created_at?: string // Made optional since it's not in our mock data
}

export type User = {
  id: string
  created_at: string
  email: string
  full_name: string
  avatar_url?: string
}

export type SavedProperty = {
  id: string
  user_id: string
  property_id: string
  created_at: string
}

export type Inquiry = {
  id: string
  created_at: string
  user_id: string
  property_id: string
  message: string
  status: 'pending' | 'responded' | 'closed'
} 
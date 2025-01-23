export type Property = {
  id: string
  created_at: string
  title: string
  description: string
  price: number
  location: string
  region: string
  bedrooms: number
  bathrooms: number
  size_sqm: number
  property_type: 'villa' | 'apartment' | 'house' | 'estate'
  features: string[]
  images: string[]
  is_featured: boolean
  status: 'available' | 'sold' | 'pending'
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
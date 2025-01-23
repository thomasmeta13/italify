import { supabase } from './supabase'
import { Property } from '@/types/database'

export async function getFeaturedProperties(): Promise<Property[]> {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('is_featured', true)
    .eq('status', 'available')
    .order('created_at', { ascending: false })
    .limit(6)

  if (error) {
    console.error('Error fetching featured properties:', error)
    return []
  }

  return data
}

export async function searchProperties(params: {
  query?: string
  region?: string
  minPrice?: number
  maxPrice?: number
  propertyType?: string
  bedrooms?: number
  page?: number
}): Promise<{ properties: Property[]; count: number }> {
  const { query, region, minPrice, maxPrice, propertyType, bedrooms, page = 1 } = params
  const limit = 9
  const offset = (page - 1) * limit

  let queryBuilder = supabase
    .from('properties')
    .select('*', { count: 'exact' })
    .eq('status', 'available')

  if (query) {
    queryBuilder = queryBuilder.or(`title.ilike.%${query}%,description.ilike.%${query}%,location.ilike.%${query}%`)
  }

  if (region) {
    queryBuilder = queryBuilder.eq('region', region)
  }

  if (minPrice) {
    queryBuilder = queryBuilder.gte('price', minPrice)
  }

  if (maxPrice) {
    queryBuilder = queryBuilder.lte('price', maxPrice)
  }

  if (propertyType) {
    queryBuilder = queryBuilder.eq('property_type', propertyType)
  }

  if (bedrooms) {
    queryBuilder = queryBuilder.gte('bedrooms', bedrooms)
  }

  const { data, error, count } = await queryBuilder
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (error) {
    console.error('Error searching properties:', error)
    return { properties: [], count: 0 }
  }

  return { properties: data, count: count || 0 }
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching property:', error)
    return null
  }

  return data
}

export async function saveProperty(propertyId: string, userId: string): Promise<boolean> {
  const { error } = await supabase
    .from('saved_properties')
    .insert([{ property_id: propertyId, user_id: userId }])

  if (error) {
    console.error('Error saving property:', error)
    return false
  }

  return true
}

export async function createInquiry(propertyId: string, userId: string, message: string): Promise<boolean> {
  const { error } = await supabase
    .from('inquiries')
    .insert([{ property_id: propertyId, user_id: userId, message }])

  if (error) {
    console.error('Error creating inquiry:', error)
    return false
  }

  return true
} 
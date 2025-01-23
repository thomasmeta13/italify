-- Create enum types
CREATE TYPE property_type AS ENUM ('villa', 'apartment', 'house', 'estate');
CREATE TYPE property_status AS ENUM ('available', 'sold', 'pending');
CREATE TYPE inquiry_status AS ENUM ('pending', 'responded', 'closed');

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create properties table
CREATE TABLE properties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    location TEXT NOT NULL,
    region TEXT NOT NULL,
    bedrooms INTEGER NOT NULL,
    bathrooms INTEGER NOT NULL,
    size_sqm INTEGER NOT NULL,
    property_type property_type NOT NULL,
    features TEXT[] NOT NULL DEFAULT '{}',
    images TEXT[] NOT NULL DEFAULT '{}',
    is_featured BOOLEAN NOT NULL DEFAULT false,
    status property_status NOT NULL DEFAULT 'available'
);

-- Create profiles table (extends auth.users)
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    full_name TEXT,
    avatar_url TEXT
);

-- Create saved_properties table
CREATE TABLE saved_properties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE NOT NULL,
    UNIQUE(user_id, property_id)
);

-- Create inquiries table
CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE NOT NULL,
    message TEXT NOT NULL,
    status inquiry_status NOT NULL DEFAULT 'pending'
);

-- Create indexes
CREATE INDEX idx_properties_region ON properties(region);
CREATE INDEX idx_properties_price ON properties(price);
CREATE INDEX idx_properties_type ON properties(property_type);
CREATE INDEX idx_properties_status ON properties(status);
CREATE INDEX idx_properties_featured ON properties(is_featured);

-- Set up Row Level Security (RLS)
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Properties are viewable by everyone" 
    ON properties FOR SELECT 
    USING (true);

CREATE POLICY "Profiles are viewable by everyone" 
    ON profiles FOR SELECT 
    USING (true);

CREATE POLICY "Users can insert their own profile" 
    ON profiles FOR INSERT 
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
    ON profiles FOR UPDATE 
    USING (auth.uid() = id);

CREATE POLICY "Enable insert for authenticated users only" 
    ON saved_properties FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for users based on user_id" 
    ON saved_properties FOR DELETE 
    USING (auth.uid() = user_id);

CREATE POLICY "Enable read access for users based on user_id" 
    ON saved_properties FOR SELECT 
    USING (auth.uid() = user_id);

CREATE POLICY "Enable insert for authenticated users only" 
    ON inquiries FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can view their own inquiries" 
    ON inquiries FOR SELECT 
    USING (auth.uid() = user_id); 
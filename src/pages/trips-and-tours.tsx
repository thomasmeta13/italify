import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Button } from '@/components/ui/button'

interface TourCardProps {
  title: string
  description: string
  imageUrl: string
  duration?: string
  price?: number
}

const TourCard = ({ title, description, imageUrl, duration, price }: TourCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <div className="relative aspect-[16/9]">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {(duration || price) && (
        <div className="flex justify-between items-center">
          {duration && <span className="text-sm text-gray-500">{duration}</span>}
          {price && <span className="text-[#004225] font-bold">€{price}</span>}
        </div>
      )}
      <Button 
        className="w-full mt-4 bg-[#004225] hover:bg-[#003319] text-white"
      >
        Plan Your Adventure
      </Button>
    </div>
  </div>
)

const tours = [
  {
    title: "Tuscany Wine Tour",
    description: "Experience the finest vineyards and wineries in the Chianti region",
    imageUrl: "https://images.unsplash.com/photo-1523528283115-9bf9b1699245",
    duration: "7 days",
    price: 2500,
  },
  {
    title: "Amalfi Coast Adventure",
    description: "Explore the stunning coastline and charming villages of Amalfi",
    imageUrl: "https://images.unsplash.com/photo-1533934744920-a1d42a85dd4c",
    duration: "5 days",
    price: 1800,
  },
  {
    title: "Venice & Lake Como Luxury",
    description: "Experience the romance of Venice and the luxury of Lake Como",
    imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
    duration: "8 days",
    price: 3500,
  },
]

export default function TripsAndToursPage() {
  return (
    <Layout>
      <Head>
        <title>Trips & Tours | Italify</title>
        <meta name="description" content="Discover Italy through our curated tours and experiences" />
      </Head>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl font-bold">
            Discover Italy, One Experience at a Time
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in the beauty of Italy with our expertly curated tours, designed to 
            showcase the best of the country's culture, landscapes, and cuisine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.title} {...tour} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Create Your Perfect Italian Journey</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us design a personalized experience that captures the essence of Italy's beauty and culture, 
            tailored just for you.
          </p>
          <Button 
            size="lg" 
            className="bg-[#004225] hover:bg-[#003319] text-white"
          >
            Start Planning Your Adventure
          </Button>
        </div>
      </div>
    </Layout>
  )
} 
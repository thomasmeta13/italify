import { Button } from "@/components/ui/button"
import Image from "next/image"

const tours = [
  {
    id: 1,
    title: "Tuscany Wine Tour",
    description: "Indulge in the Chianti region's finest vineyards, where rolling hills and exquisite wines meet unforgettable experiences",
    duration: "7 days",
    price: 2500,
    image: "https://images.unsplash.com/photo-1523528283115-9bf9b1699245",
  },
  {
    id: 2,
    title: "Amalfi Coast Adventure",
    description: "Journey through the breathtaking Amalfi Coast, where azure waters meet dramatic cliffs and charming coastal villages await your discovery",
    duration: "5 days",
    price: 1800,
    image: "https://images.unsplash.com/photo-1533934744920-a1d42a85dd4c",
  },
  {
    id: 3,
    title: "Venice & Lake Como Luxury",
    description: "Immerse yourself in the timeless romance of Venice and the refined elegance of Lake Como's luxury destinations",
    duration: "8 days",
    price: 3500,
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
  },
]

export default function TripsPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
          alt="Italian landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl font-bold mb-4">Discover Italy, One Unforgettable Experience at a Time</h1>
          <p className="text-xl max-w-2xl">
            Immerse yourself in the beauty of Italy with our expertly curated tours, designed to showcase the best of the country's culture, landscapes, and cuisine.
          </p>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <div key={tour.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3]">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
              <p className="text-gray-600 mb-4">{tour.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500">{tour.duration}</span>
                  <p className="text-[#004225] font-bold">€{tour.price}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="hover:bg-[#004225] hover:text-white border-[#004225] text-[#004225]"
                >
                  Plan Your Adventure
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Tours */}
      <section className="bg-[#004225] rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Create Your Perfect Italian Journey</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Let us design a personalized experience that captures the essence of Italy's beauty and culture, tailored just for you.
        </p>
        <Button 
          size="lg" 
          variant="outline"
          className="bg-transparent border-2 border-white hover:bg-white hover:text-[#004225] transition-colors"
        >
          Start Planning Your Adventure
        </Button>
      </section>
    </div>
  )
} 
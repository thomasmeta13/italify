import { Button } from "@/components/ui/button"
import Image from "next/image"

const tours = [
  {
    id: 1,
    title: "Tuscany Wine Tour",
    description: "Experience the finest vineyards and wineries in the Chianti region",
    duration: "7 days",
    price: 2500,
    image: "https://images.unsplash.com/photo-1523528283115-9bf9b1699245",
  },
  {
    id: 2,
    title: "Amalfi Coast Adventure",
    description: "Explore the stunning coastline and charming villages of Amalfi",
    duration: "5 days",
    price: 1800,
    image: "https://images.unsplash.com/photo-1533934744920-a1d42a85dd4c",
  },
  {
    id: 3,
    title: "Venice & Lake Como Luxury",
    description: "Experience the romance of Venice and the luxury of Lake Como",
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
          <h1 className="text-4xl font-bold mb-4">Curated Italian Experiences</h1>
          <p className="text-xl max-w-2xl">
            Discover Italy through our carefully crafted tours and travel experiences
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
                  <p className="text-emerald-600 font-bold">€{tour.price}</p>
                </div>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Tours */}
      <section className="bg-emerald-50 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Create Your Custom Tour</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Want something unique? Let us design a personalized Italian experience just for you
        </p>
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
          Start Planning
        </Button>
      </section>
    </div>
  )
} 
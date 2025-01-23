import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Check } from "lucide-react"

const services = [
  {
    title: "Visa & Residency",
    description: "Expert assistance with visa applications and residency permits",
    features: [
      "Visa application support",
      "Residency permit guidance",
      "Document preparation",
      "Legal consultation",
    ],
  },
  {
    title: "Property Setup",
    description: "Complete support in setting up your new Italian home",
    features: [
      "Utility connections",
      "Internet setup",
      "Home insurance",
      "Local registrations",
    ],
  },
  {
    title: "Integration Services",
    description: "Help you integrate seamlessly into Italian life",
    features: [
      "Language courses",
      "Cultural orientation",
      "Local community introductions",
      "School enrollment assistance",
    ],
  },
]

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We'll discuss your plans and requirements for moving to Italy",
  },
  {
    number: "02",
    title: "Documentation",
    description: "We'll help you prepare and organize all necessary paperwork",
  },
  {
    number: "03",
    title: "Property & Setup",
    description: "Find and set up your perfect Italian home",
  },
  {
    number: "04",
    title: "Integration",
    description: "Support in settling into your new Italian lifestyle",
  },
]

export default function RelocationPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1534445867742-43195f401b6c"
          alt="Italian lifestyle"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl font-bold mb-4">Start Your Italian Life</h1>
          <p className="text-xl max-w-2xl">
            Comprehensive relocation services to help you move to Italy seamlessly
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-5xl font-bold text-emerald-600/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-50 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make the Move?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let us help you start your Italian journey. Schedule a consultation with our relocation experts.
        </p>
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
          Schedule Consultation
        </Button>
      </section>
    </div>
  )
} 
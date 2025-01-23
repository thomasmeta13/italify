import { Button } from "@/components/ui/button"
import Image from "next/image"

const team = [
  {
    name: "Isabella Romano",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    description: "20+ years experience in Italian real estate",
  },
  {
    name: "Marco Bianchi",
    role: "Head of Properties",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    description: "Expert in luxury Italian properties",
  },
  {
    name: "Sofia Conti",
    role: "Relocation Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    description: "Helping families relocate to Italy for over 10 years",
  },
]

const values = [
  {
    title: "Authenticity",
    description: "We provide genuine Italian experiences and properties that reflect the true essence of Italy.",
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in every aspect of our service.",
  },
  {
    title: "Personal Touch",
    description: "We treat each client's journey as unique and provide tailored solutions.",
  },
  {
    title: "Transparency",
    description: "We believe in clear communication and honest relationships with our clients.",
  },
]

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216"
          alt="Italian countryside"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl font-bold mb-4">About Italify.au</h1>
          <p className="text-xl max-w-2xl">
            Connecting Australians with their dream Italian lifestyle since 2024
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-600 mb-4">
          Italify.au was born from a passion for Italian culture and a desire to help Australians 
          experience the authentic Italian lifestyle. What started as a dream to bridge the gap 
          between Australia and Italy has grown into a comprehensive platform that helps people 
          find their perfect Italian home and lifestyle.
        </p>
        <p className="text-gray-600">
          Our team combines local Italian expertise with deep understanding of Australian clients' 
          needs, ensuring a seamless transition to Italian life.
        </p>
      </section>

      {/* Our Values */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-50 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Italian Journey</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let us help you discover your perfect Italian lifestyle
        </p>
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
          Contact Us
        </Button>
      </section>
    </div>
  )
} 
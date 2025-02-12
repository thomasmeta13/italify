'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-emerald-900">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-emerald-800 opacity-90" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Meet Borana Meta – The Visionary Behind Italify
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl"
          >
            Bridging Australia and Italy through exceptional property experiences
          </motion.p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/borana.jpeg"
                  alt="Borana Meta"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <span className="text-[#004225] font-semibold">Our Founder</span>
                <h2 className="text-4xl font-bold">Borana Meta</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Borana Meta brings a unique blend of experience in property development and the Italian travel industry, 
                  making her the perfect guide for Australians seeking to embrace the Italian lifestyle. Having worked in 
                  property development in Australia, Borana has gained invaluable insight into creating spaces that people 
                  dream of calling home. Before that, she spent years in Italy's travel industry, working closely with 
                  Australian travelers to craft unforgettable experiences and showcasing the charm, beauty, and authenticity 
                  of her homeland.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  This dual expertise—combining a deep understanding of Australian aspirations with firsthand knowledge of 
                  Italy's rich culture and lifestyle—drives Italify's mission to connect Australians with their dream of 
                  Italian living. Borana's passion lies in making the process seamless, whether it's finding the perfect 
                  property or navigating the journey of relocation.
                </p>
                <div className="pt-6">
                  <Button asChild size="lg" className="bg-[#004225] hover:bg-[#003319]">
                    <Link href="/contact">Connect with Borana</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Italify, our mission is to make the dream of Italian living a reality for Australians. With a foundation 
                in property development and years of experience in Italy's travel industry, we bring an unparalleled 
                understanding of what it takes to create authentic, meaningful connections between Australia and Italy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Experience in Property Development",
                  description: "Borana's background in property development equips her with a strong understanding of the foundations for building dream spaces.",
                  icon: "🏗️"
                },
                {
                  title: "Expert in Italian Travel & Lifestyle",
                  description: "Years spent curating experiences for Australians in Italy give Borana unparalleled insight into the charm and authenticity her clients are seeking.",
                  icon: "✈️"
                },
                {
                  title: "A Unique Perspective",
                  description: "With roots in Italy and professional experience in Australia, Borana bridges two worlds to make relocating to Italy seamless and fulfilling.",
                  icon: "🌍"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Start Your Italian Journey</h2>
              <p className="text-xl mb-8">
                Let us help you discover your perfect Italian property and lifestyle
              </p>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2">
                <Link href="/properties">View Properties</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 
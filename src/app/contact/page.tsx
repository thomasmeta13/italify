import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "hello@italify.com.au",
    link: "mailto:hello@italify.com.au",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+61 2 1234 5678",
    link: "tel:+61212345678",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "Sydney CBD, Australia",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 9am - 6pm AEST",
  },
]

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions about Italian properties or relocation? Our team is here to help you
          every step of the way.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Send us a Message</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your requirements..."
                rows={6}
              />
            </div>
            <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
              Send Message
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map or Additional Info */}
          <div className="bg-emerald-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Italian Office</h3>
            <p className="text-gray-600 mb-4">
              Our team in Italy is available for property viewings and local support:
            </p>
            <p className="text-gray-600">
              Via Roma 123<br />
              Florence, Italy<br />
              +39 055 123 4567
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

const navigation = {
  main: [
    { name: 'Properties', href: '/properties' },
    { name: 'Trips & Tours', href: '/trips' },
    { name: 'Relocation', href: '/relocation' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com/italify_au', icon: Instagram },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
  ],
}

const instagramImages = [
  { src: '/instagram-1.jpg', alt: 'Tuscany rolling hills with cypress trees' },
  { src: '/instagram-2.jpg', alt: 'Florence Duomo and cityscape' },
  { src: '/instagram-3.jpg', alt: 'Tuscan villa and countryside' },
  { src: '/instagram-4.jpg', alt: 'Tuscany landscape with wheat field' },
  { src: '/instagram-5.jpg', alt: 'Florence Ponte Vecchio bridge' },
  { src: '/instagram-6.jpg', alt: 'Tuscan vineyard at sunset' },
]

export default function Footer() {
  return (
    <footer className="bg-[#004225] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Italify.au</h3>
            <p className="text-white/80 text-sm">
              Your Partner in Authentic Italian Living – Italify Your Life
            </p>
            <div className="flex items-center gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@italify.au">info@italify.au</a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4" />
                <a href="tel:+61123456789">+61 1234 56789</a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>Sydney, Australia</span>
              </li>
            </ul>
          </div>

          {/* Instagram Feed */}
          <div>
            <h3 className="font-semibold mb-4">Get Inspired on Instagram</h3>
            <Link 
              href="https://instagram.com/italify_au" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2 mb-4"
            >
              <Instagram className="h-4 w-4" />
              Follow @italify_au
            </Link>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((image, i) => (
                <div key={i} className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Italify.au. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 
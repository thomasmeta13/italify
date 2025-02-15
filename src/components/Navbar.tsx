import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Map, Plane, Users, Phone } from 'lucide-react'

const navigation = [
  { name: 'Properties', href: '/properties', icon: Home },
  { name: 'Trips & Tours', href: '/trips', icon: Plane },
  { name: 'Relocation', href: '/relocation', icon: Map },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: Phone },
]

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-emerald-700">
            italify.com.au
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="default" className="bg-emerald-600 hover:bg-emerald-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 
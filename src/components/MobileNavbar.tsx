'use client'

import { Link } from '@/i18n/routing'
import { useState } from "react"
import { Transition } from '@headlessui/react'
import { useScroll } from '@/hooks'

const NAVBAR_ITEMS = [
  {
    label: "HOME",
    url: "/" 
  },
  {
    label: "PRODOTTI",
    url: "/products" 
  }, 
  {
    label: "CHI SIAMO",
    url: "/story" 
  }, 
  {
    label: "CONTATTI",
    url: "/contacts"
  }
]

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isScrolled } = useScroll()

  return (
    <nav 
      className={`fixed w-full top-0 left-0 lg:hidden z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-sm font-bold transition-colors duration-200 ${
                isScrolled 
                  ? 'text-primary-800' 
                  : 'text-white'
              }`}
              aria-label="Go to homepage"
            >
              COOPERATIVA AGRICOLA DEI COLLI
            </Link>
          </div>

          {/* Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                isScrolled 
                  ? 'text-primary-800 focus:ring-primary-500' 
                  : 'text-white focus:ring-white/75'
              }`}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isMenuOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 transform -translate-y-1"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 transform translate-y-0"
          leaveTo="opacity-0 transform -translate-y-1"
        >
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
              {NAVBAR_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-900 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  )
}

export default MobileNavbar

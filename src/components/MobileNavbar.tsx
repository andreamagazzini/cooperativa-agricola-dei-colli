import { getContactsUrl, getProductsUrl, getRootUrl, getStoryUrl } from "@/router"
import NavbarItem from "./NavbarItem"
import { useState } from "react"
import { Transition } from '@headlessui/react'

const NAVBAR_ITEMS = [
  {
    label: "HOME",
    url: getRootUrl() 
  },
  {
    label: "PRODOTTI",
    url: getProductsUrl() 
  }, 
  {
    label: "CHI SIAMO",
    url: getStoryUrl() 
  }, 
  {
    label: "CONTATTI",
    url: getContactsUrl()
  }
]

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav 
      className="fixed w-full top-0 left-0 lg:hidden z-50 glass-effect shadow-lg"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => window.location.href = getRootUrl()}
              className="text-sm font-bold text-gradient"
              aria-label="Go to homepage"
            >
              COOPERATIVA AGRICOLA DEI COLLI
            </button>
          </div>

          {/* Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/75 transition-colors duration-200"
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
                <button
                  key={item.label}
                  onClick={() => {
                    window.location.href = item.url
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-900 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  )
}

export default MobileNavbar
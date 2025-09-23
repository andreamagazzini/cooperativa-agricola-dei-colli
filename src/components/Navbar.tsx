import { PRODUCTS } from '@/constants/products'
import NavbarItem from './NavbarItem'
import { useNavigate } from 'react-router-dom'
import { getContactsUrl, getRootUrl, getStoryUrl } from '@/router'
import MobileNavbar from './MobileNavbar'
import { useScroll } from '@/hooks'

const Navbar = () => {
  const navigate = useNavigate()
  const { isScrolled } = useScroll()

  return (
    <>
      {/* Desktop Navbar */}
      <nav 
        className={`fixed w-full top-0 left-0 hidden lg:block z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-effect shadow-lg' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-max section-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <button
                onClick={() => navigate(getRootUrl())}
                className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1"
                aria-label="Go to homepage"
              >
                COOPERATIVA AGRICOLA DEI COLLI
              </button>
            </div>

            {/* Navigation Items */}
            <div className="hidden lg:flex items-center space-x-1">
              <NavbarItem 
                onClick={() => navigate(getRootUrl())}
                className="px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                HOME
              </NavbarItem>
              <NavbarItem 
                items={PRODUCTS}
                className="px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                PRODOTTI
              </NavbarItem>
              <NavbarItem 
                onClick={() => navigate(getStoryUrl())}
                className="px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                CHI SIAMO
              </NavbarItem>
              <NavbarItem 
                onClick={() => navigate(getContactsUrl())}
                className="px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                CONTATTI
              </NavbarItem>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <MobileNavbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-20 lg:h-20" />
    </>
  )
}

export default Navbar

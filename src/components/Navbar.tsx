'use client'

import NavbarItem from './NavbarItem'
import MobileNavbar from './MobileNavbar'
import LanguageSwitcher from './LanguageSwitcher'
import { useScroll } from '@/hooks'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

const Navbar = () => {
  const { isScrolled } = useScroll()
  const t = useTranslations('nav')

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
              <Link
                href="/"
                className={`text-xl font-bold hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1 inline-block ${
                  isScrolled 
                    ? 'text-primary-800' 
                    : 'text-white'
                }`}
                aria-label="Go to homepage"
              >
                COOPERATIVA AGRICOLA DEI COLLI
              </Link>
            </div>

            {/* Navigation Items */}
            <div className="hidden lg:flex items-center space-x-4">
              <NavbarItem 
                href="/"
                className="px-4 py-2 rounded-lg transition-colors duration-200"
                isScrolled={isScrolled}
              >
                {t('home')}
              </NavbarItem>
              <NavbarItem 
                href="/products"
                className="px-4 py-2 rounded-lg transition-colors duration-200"
                isScrolled={isScrolled}
              >
                {t('products')}
              </NavbarItem>
              <NavbarItem 
                href="/story"
                className="px-4 py-2 rounded-lg transition-colors duration-200"
                isScrolled={isScrolled}
              >
                {t('story')}
              </NavbarItem>
              <NavbarItem 
                href="/contacts"
                className="px-4 py-2 rounded-lg transition-colors duration-200"
                isScrolled={isScrolled}
              >
                {t('contacts')}
              </NavbarItem>
              <LanguageSwitcher isScrolled={isScrolled} />
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

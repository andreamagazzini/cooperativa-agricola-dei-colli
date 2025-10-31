'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { useLocale } from 'next-intl'
import { usePathname, Link, routing } from '@/i18n/routing'

interface LanguageSwitcherProps {
  isScrolled?: boolean
}

const languageMap = {
  it: { name: 'Italiano', flag: '🇮🇹' },
  en: { name: 'English', flag: '🇬🇧' },
}

export default function LanguageSwitcher({ isScrolled = false }: LanguageSwitcherProps) {
  const locale = useLocale()
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState(false)
  const currentLang = languageMap[locale as keyof typeof languageMap]

  const textColor = isScrolled ? 'text-primary-800' : 'text-white'
  const hoverBg = isScrolled ? 'hover:bg-primary-50' : 'hover:bg-white/20'
  const menuBg = isScrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-sm'
  const menuText = isScrolled ? 'text-neutral-900' : 'text-neutral-900'
  const menuHover = isScrolled ? 'hover:bg-primary-50' : 'hover:bg-white/20'

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isScrolled
            ? `${textColor} ${hoverBg} focus:ring-primary-500`
            : `${textColor} ${hoverBg} focus:ring-white/75`
        }`}
        aria-label="Change language"
      >
        <span className="text-lg mr-2">{currentLang?.flag || '🌐'}</span>
        <span className="hidden sm:inline">{currentLang?.name || locale.toUpperCase()}</span>
        <svg
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <Transition
        show={isHovered}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1 scale-95"
        enterTo="opacity-100 translate-y-0 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0 scale-100"
        leaveTo="opacity-0 translate-y-1 scale-95"
      >
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg shadow-lg ring-1 ring-black/5 z-50 overflow-hidden">
          <div className={`${menuBg} py-1`}>
            {routing.locales.map((loc) => {
              const isActive = locale === loc
              const lang = languageMap[loc as keyof typeof languageMap]
              
              return (
                <Link
                  key={loc}
                  href={pathname}
                  locale={loc}
                  className={`flex items-center px-4 py-2.5 text-sm transition-colors duration-150 ${
                    isActive
                      ? isScrolled
                        ? 'bg-primary-100 text-primary-900 font-semibold'
                        : 'bg-primary-600/80 text-white font-semibold'
                      : `${menuText} ${menuHover}`
                  }`}
                  aria-label={`Switch to ${lang?.name || loc}`}
                >
                  <span className="text-lg mr-3">{lang?.flag || '🌐'}</span>
                  <span className="flex-1">{lang?.name || loc.toUpperCase()}</span>
                  {isActive && (
                    <svg
                      className="h-4 w-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </Transition>
    </div>
  )
}

import { PRODUCTS } from '@/constants/products'
import { getProductsUrl } from '@/router'
import { Tab } from '@headlessui/react'
import { useNavigate, useParams } from 'react-router-dom'

export function Component() {
  const { id } = useParams()
  const navigate = useNavigate()
  const selectedIndex = id ? parseInt(id) : 0

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/3 xl:w-1/4 bg-primary-900/90 backdrop-blur-sm" aria-label="Lista prodotti">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-6">I Nostri Prodotti</h2>
          <Tab.Group
            vertical
            selectedIndex={selectedIndex}
            onChange={(index) => navigate(getProductsUrl(String(index)))}
          >
            <Tab.List className="space-y-2" role="tablist" aria-label="Prodotti disponibili">
              {PRODUCTS.map(({ label }, index) => (
                <Tab
                  key={label}
                  className={({ selected }) =>
                    `w-full p-4 text-left rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 ${
                      selected
                        ? 'bg-white text-primary-800 shadow-lg transform scale-105'
                        : 'text-white hover:bg-white/20 hover:text-white'
                    }`
                  }
                  role="tab"
                  aria-selected={selectedIndex === index}
                  aria-controls={`panel-${index}`}
                  id={`tab-${index}`}
                >
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      selectedIndex === index ? 'bg-primary-600' : 'bg-white/50'
                    }`} aria-hidden="true" />
                    <span className="font-medium">{label}</span>
                  </div>
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 bg-white/95 backdrop-blur-sm">
        <Tab.Group selectedIndex={selectedIndex}>
          <Tab.Panels className="h-full">
            {PRODUCTS.map(({ label, description }, index) => (
              <Tab.Panel
                key={label}
                className="h-full p-8 lg:p-12 focus:outline-none"
                role="tabpanel"
                id={`panel-${index}`}
                aria-labelledby={`tab-${index}`}
                tabIndex={selectedIndex === index ? 0 : -1}
              >
                <div className="max-w-4xl mx-auto">
                  <header className="mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
                      {label}
                    </h1>
                    <div className="w-20 h-1 bg-primary-600 rounded-full" aria-hidden="true"></div>
                  </header>
                  
                  <div className="prose prose-lg max-w-none">
                    <div className="bg-neutral-50 rounded-xl p-8 border-l-4 border-primary-500">
                      <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" aria-label="Informazioni aggiuntive">
                    <div className="card p-6">
                      <h3 className="text-xl font-semibold text-primary-800 mb-4">
                        Caratteristiche Nutrizionali
                      </h3>
                      <ul className="space-y-2 text-neutral-600" role="list">
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Ricco di vitamine e sali minerali
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Alta digeribilità
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Basso indice glicemico
                        </li>
                      </ul>
                    </div>

                    <div className="card p-6">
                      <h3 className="text-xl font-semibold text-primary-800 mb-4">
                        Utilizzi in Cucina
                      </h3>
                      <ul className="space-y-2 text-neutral-600" role="list">
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Zuppe e minestre
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Pane e pasta
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Insalate e contorni
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

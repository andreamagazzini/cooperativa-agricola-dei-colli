import { PRODUCTS } from '@/constants/products'
import { getProductsUrl } from '@/router'
import { Tab } from '@headlessui/react'
import { useNavigate, useParams } from 'react-router-dom'

export function Component() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="w-full h-full flex flex-row">
      <Tab.Group
        vertical
        selectedIndex={id ? parseInt(id) : 0}
        onChange={(index) => navigate(getProductsUrl(String(index)))}
      >
        <Tab.List className="flex flex-col w-1/2 lg:w-1/4 p-2 bg-green-900/70">
          {PRODUCTS.map(({ label }) => (
            <Tab
              key={label}
              className={({ selected }) =>
                `w-full p-5 text-sm font-medium text-left leading-5 ring-white/60 ring-offset-2 focus:outline-none ${selected
                  ? 'bg-white text-green-700 shadow'
                  : 'text-green-100 hover:bg-white/[0.12] hover:text-white'
                }`
              }
            >
              {label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="w-full overflow-auto">
          {PRODUCTS.map(({ label, description }) => (
            <Tab.Panel
              key={label}
              className={
                'bg-white/40 p-3 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              }
            >
              {description}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

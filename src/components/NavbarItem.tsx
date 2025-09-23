import { Menu, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: string
  items?: { label: string, url: string }[]
  onClick?: () => void
  className?: string
}

const NavbarItem: FC<Props> = ({ children, items, onClick, className = '' }) => {
  const navigate = useNavigate()

  if (items) {
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button 
            className={`inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 transition-colors duration-200 ${className}`}
            aria-expanded="false"
            aria-haspopup="true"
          >
            {children}
            <svg
              className="ml-2 -mr-1 h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-neutral-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
            <div className="px-1 py-1">
              {items.map(({ label, url }) => (
                <Menu.Item key={label}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-primary-500 text-white' : 'text-neutral-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors duration-200 hover:bg-primary-50`}
                      onClick={() => navigate(url)}
                    >
                      {label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  )
}

export default NavbarItem

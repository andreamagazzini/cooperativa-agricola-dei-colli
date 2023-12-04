import { useNavigate } from 'react-router-dom'
import CircleImage from '@/components/CircleImage'
import { IMAGES } from '@/images'
import { getProductsUrl } from '@/router'

const menuItems = [
  {
    label: 'I NOSTRI PRODOTTI',
    img: 'farroInHand',
    onHoverImg: 'animateFarro',
    url: getProductsUrl(),
  },
  {
    label: 'IL NOSTRO IMPIANTO',
    img: 'machine',
    onHoverImg: 'animateMachine',
    url: '/factory',
  },
  {
    label: 'IL NOSTRO ALLEVAMENTO',
    img: 'threeCows',
    onHoverImg: 'animateCow',
    url: '/farm',
  },
]

export function Component() {
  const navigate = useNavigate()
  return (
    <div className="h-full py-5 flex flex-col lg:flex-row lg:justify-center items-center gap-10 overflow-auto">
      {menuItems.map(({ img, label, url, onHoverImg }) => (
        <CircleImage
          key={label}
          src={IMAGES[img]}
          onHoverSrc={IMAGES[onHoverImg]}
          label={label}
          onClick={() => navigate(url)}
        />
      ))}
    </div>
  )
}

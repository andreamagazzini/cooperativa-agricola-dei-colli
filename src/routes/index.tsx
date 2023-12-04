import { useNavigate } from 'react-router-dom'
import CircleImage from '../components/CircleImage'
import Navbar from '../components/Navbar'
import { IMAGES } from '../images'
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
    <div className="w-screen h-full lg:h-screen flex flex-col bg-home bg-no-repeat bg-cover">
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center content-center items-center gap-10 h-screen pb-20">
        {menuItems.map(({ img, label, url, onHoverImg }) => (
          <CircleImage
            src={IMAGES[img]}
            onHoverSrc={IMAGES[onHoverImg]}
            label={label}
            onClick={() => navigate(url)}
          />
        ))}
      </div>
    </div>
  )
}

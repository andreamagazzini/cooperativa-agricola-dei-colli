import { PRODUCTS } from '@/constants/products'
import NavbarItem from './NavbarItem'
import { useNavigate } from 'react-router-dom'
import { getRootUrl, getStoryUrl } from '@/router'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="fixed w-screen top-0 left-0 hidden lg:block z-10">
        <div className='flex flex-row justify-between'>
          <h1 className="text-base p-5 self-center text-bold text-green-900">
            COOPERATIVA AGRICOLA DEI COLLI
          </h1>
          <div className="flex flex-row justify-end p-5">
            <NavbarItem onClick={() => navigate(getRootUrl())}>HOME</NavbarItem>
            <NavbarItem items={PRODUCTS}>PRODOTTI</NavbarItem>
            <NavbarItem onClick={() => navigate(getStoryUrl())}>
              CHI SIAMO
            </NavbarItem>
            <NavbarItem>CONTATTI</NavbarItem>
          </div>
        </div>
      </div>
      <MobileNavbar />
    </>
  )
}

export default Navbar

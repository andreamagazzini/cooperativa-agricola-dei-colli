import { PRODUCTS } from "@/constants/products"
import NavbarItem from "./NavbarItem"
import { useNavigate } from "react-router-dom"
import { getRootUrl, getStoryUrl } from "@/router"

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-base p-5 self-center text-bold text-green-900">
        COOPERATIVA AGRICOLA DEI COLLI
      </h1>
      <div className="flex flex-row justify-end p-5 z-10">
        <NavbarItem onClick={() => navigate(getRootUrl())}>HOME</NavbarItem>
        <NavbarItem items={PRODUCTS}>PRODOTTI</NavbarItem>
        <NavbarItem onClick={() => navigate(getStoryUrl())}>CHI SIAMO</NavbarItem>
        <NavbarItem>CONTATTI</NavbarItem>
      </div>
    </div>
  )
}

export default Navbar
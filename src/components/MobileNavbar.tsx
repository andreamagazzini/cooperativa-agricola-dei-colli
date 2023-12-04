import { getProductsUrl, getRootUrl, getStoryUrl } from "@/router"
import NavbarItem from "./NavbarItem"

const NAVBAR_ITEMS = [{
  label: "HOME",
  url: getRootUrl() 
},{
  label: "PRODOTTI",
  url: getProductsUrl() 
}, {
  label: "CHI SIAMO",
  url: getStoryUrl() 
}, {
  label: "CONTATTI",
  url: ""
}]

const MobileNavbar = () => {
  return (
    <div className="fixed w-screen top-0 left-0 lg:hidden p-5 flex justify-end z-10">
      <NavbarItem items={NAVBAR_ITEMS}>
        MENU
      </NavbarItem>
    </div>
  )
}

export default MobileNavbar
import { getContactsUrl, getProductsUrl, getRootUrl, getStoryUrl } from "@/router"
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
  url: getContactsUrl()
}]

const MobileNavbar = () => {
  return (
    <div className="fixed w-screen h-20 top-0 left-0 lg:hidden p-5 flex justify-end z-10 bg-white">
      <NavbarItem items={NAVBAR_ITEMS}>
        MENU
      </NavbarItem>
    </div>
  )
}

export default MobileNavbar
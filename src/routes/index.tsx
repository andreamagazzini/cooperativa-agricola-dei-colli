import { useNavigate } from "react-router-dom";
import CircleImage from "../components/CircleImage";
import Navbar from "../components/Navbar";
import { IMAGES } from "../images";
import { getProductsUrl } from "@/router";

const menuItems = [{
  label: "I NOSTRI PRODOTTI", 
  img: "farroInHand",
  onHoverImg: "animateFarro",
  url: getProductsUrl()
}, { 
  label: "IL NOSTRO IMPIANTO",
  img: "machine",
  onHoverImg: "animateMachine",
  url: "/factory"
}, {
  label: "IL NOSTRO ALLEVAMENTO",
  img: "threeCows",
  onHoverImg: "animateCow",
  url: "/farm"
}]

export function Component() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen text-center flex flex-col">
      <Navbar />
      <div className="flex flex-row justify-center content-center items-center gap-10 bg-home bg-no-repeat bg-cover h-screen">
        {
        menuItems.map(({img, label, url, onHoverImg}) => (
            <CircleImage 
              src={IMAGES[img]}
              onHoverSrc={IMAGES[onHoverImg]} 
              label={label} 
              onClick={() => navigate(url) }
            />
          ))
        }
      </div>
    </div>
  )
}
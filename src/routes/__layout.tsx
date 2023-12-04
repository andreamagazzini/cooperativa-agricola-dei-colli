import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export function Component() {
  return (
    <div className="w-screen h-screen flex flex-col bg-home bg-no-repeat bg-cover">
      <Navbar />
      <Outlet />
    </div>
  )
}
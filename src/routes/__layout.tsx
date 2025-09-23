import Navbar from "@/components/Navbar";
import SkipLink from "@/components/SkipLink";
import { Outlet } from "react-router-dom";

export function Component() {
  return (
    <div className="min-h-screen flex flex-col bg-home">
      <SkipLink />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
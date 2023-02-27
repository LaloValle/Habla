import { Outlet } from "react-router-dom"

import { Footer, Navbar, SearchingBar } from "../pages/sections"

const Root = () => {
  return (
    <>
      <div className="w-full bg-gray-200"> <Navbar /> </div>
      <div className="w-full border-b-2 border-b-gray-200"> <SearchingBar /> </div>
      <div className="w-full"> <Outlet /> </div>
      <div className="w-full bg-black"> <Footer /> </div>
    </>
  )
}

export default Root
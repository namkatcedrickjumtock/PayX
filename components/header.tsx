/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { IoMenuOutline, IoSearch } from "react-icons/io5";
import HeaderItems from "./HeaderItems";
// import headeritems from "./HeaderItems";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between p-5">
        <IoMenuOutline className="lg:hidden h-8 w-7 text-gray-500" />

      <div className="flex items-center space-x-5">
        <img
        className="h-5 w-20 mx-auto"
          src="https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png"
        />
        <HeaderItems text={"Inspiration"} />
        <HeaderItems text={"Find Work"} />
        <HeaderItems text={"Learn Design"} />
        <HeaderItems text={"Go Pro"} />
        <HeaderItems text={"Design Files"} />
        <HeaderItems text={"Hire Designers"} />
      </div>


      <div className="flex items-center space-x-3 w-fit ">
        <IoSearch className="hidden text-gray-500 h-6 w-6 md:block" />
        <p className="text-gray-500">Sign In</p>
        <button className="hidden p-2 text-white bg-[#E95989] rounded-md text-base md:block ">Share my Work</button>
      </div>


    </div>
  )
}

export default Header

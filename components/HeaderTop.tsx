import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200">
      <div className=" container py-4">
        <div className='flex justify-between items-center'>
         <div className="hidden lg:flex gap-2">
          <div className="header_top_icon">
          <FaFacebook />
          </div>
          <div className="header_top_icon">
          <FaTwitter />
          </div>
          <div className="header_top_icon">
          <FaInstagramSquare />
          </div>
          <div className="header_top_icon">
          <FaLinkedin />
          </div>
         </div>
         <div className="text-black-200 text-sm"><b>FREE SHIPPING</b>   THIS WEEK ORDER OVER - $55</div>
         <div className="flex gap-4">
         <select className="Wtext-gray-500 text-[12px] w-[80px]" name="language" id="language">
            <option value="English">English</option>
            <option value="Tamil">Tamil</option> 
            <option value="Sinhala">Sinhala</option> 
</select>
         </div>
         

        </div>
      </div>
      
    </div>
  )
}

export default HeaderTop
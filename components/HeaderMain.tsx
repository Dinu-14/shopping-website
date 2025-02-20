import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-5">
      <div className="container sm:flex justify-between items-center ">
        
        {/* Logo Section */}
        <div className="font-bold text-4xl text-centersm:pb- pb-4 0 text-blackish ">
          LOGO
        </div>

        {/* Search Bar Section */}
        <div className="w-full sm:w-[300px] md:w-[70%] relative ">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />
          <FaSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" />
        </div>


<div className="hidden lg:flex gap-5 text-gray-500 text-[25px]">
  {/* User Icon */}
    <FaRegUser />

  {/* Heart Icon with Notification */}
  <div className="relative">
    <FaRegHeart />
    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] 
                    text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
      1
    </div>
  </div>

  {/* Shopping Bag Icon with Notification */}
  <div className="relative">
    <HiOutlineShoppingBag />
    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] 
                    text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
      4
    </div>
  </div>
</div>





      
      

      
       
        
      
      
    </div>
    </div>
  );
};

export default HeaderMain;

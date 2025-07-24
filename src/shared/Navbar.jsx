import {
  MdSearch,
  MdNotifications,
  MdMessage,
  MdSettings,
} from "react-icons/md";
import user from "../assets/user.jpg"
import { TbWorld } from "react-icons/tb";
import { BiBorderAll } from "react-icons/bi";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <header className=" px-6 py-4 ">
      <div className="md:flex items-center justify-between hidden ">
        <div className="items-center flex  gap-2">
          <img
            src={user}
            alt="userImg"
            className="w-8 h-8 rounded-full object-fit"
          />
          <div>
            <h1 className=" font-semibold text-gray-900">Hello, Nasir</h1>
            <p className="text-[10px] text-gray-500">
              Thursday, April 18, 2025
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Anything"
                className="w-full pl-10  py-[6px] outline-none bg-white rounded-full  "
              />
            </div>
          </div>

          <button className="bg-white p-1 rounded-full cursor-pointer ml-2">
            <TbWorld className="w-4 h-4" />
          </button>
          <button className="bg-white p-1 rounded-full cursor-pointer ml-2">
            <MdMessage className="w-4 h-4" />
          </button>
          <button className="bg-white p-1 rounded-full cursor-pointer ml-2">
            <HiMiniCalendarDateRange className="w-4 h-4" />
          </button>
          <button className="bg-white p-1 rounded-full cursor-pointer ml-2">
            <MdNotifications className="w-4 h-4" />
          </button>
          <button className="bg-blue-600 p-1 rounded-full cursor-pointer ml-2">
            <BiBorderAll className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* Right: User Image + Dropdown (only for mobile) */}
   
      <div className="flex items-center justify-between md:hidden mb-4">
        {/* Search bar in center */}
        <div className="flex-1">
          <div className="relative mx-auto w-10/12">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Anything"
              className="w-full pl-10 py-[6px] outline-none bg-white rounded-full"
            />
          </div>
        </div>

        {/* User image on right */}
        <div className="ml-2 relative">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <img
              src={user}
              alt="User"
              className="w-9 h-9 rounded-full border border-gray-300 object-cover cursor-pointer"
            />
          </button>

          {/* Dropdown */}
          <div
            className={`absolute top-12 right-0 w-72 bg-white rounded-2xl shadow-xl p-4 transition-all duration-300 origin-top-right z-50 ${
              open
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="mb-3">
              <h1 className="text-sm font-semibold text-gray-800">
                Hello, Nasir
              </h1>
              <p className="text-xs text-gray-500">Thursday, April 18, 2025</p>
            </div>

            <div className="flex justify-between items-center">
              <button className="bg-gray-100 p-2 rounded-full">
                <TbWorld className="w-5 h-5 text-gray-700" />
              </button>
              <button className="bg-gray-100 p-2 rounded-full">
                <MdMessage className="w-5 h-5 text-gray-700" />
              </button>
              <button className="bg-gray-100 p-2 rounded-full">
                <HiMiniCalendarDateRange className="w-5 h-5 text-gray-700" />
              </button>
              <button className="bg-gray-100 p-2 rounded-full">
                <MdNotifications className="w-5 h-5 text-gray-700" />
              </button>
              <button className="bg-blue-600 p-2 rounded-full">
                <BiBorderAll className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

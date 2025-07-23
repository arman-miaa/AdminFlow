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

const Navbar = () => {
  return (
    <header className=" px-6 py-4 hidden md:flex">
      <div className="flex items-center justify-between">
        <div className="flex items-center  gap-2">
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
    </header>
  );
};

export default Navbar;

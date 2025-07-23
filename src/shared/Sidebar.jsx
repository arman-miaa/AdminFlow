import {
  MdDashboard,
  MdPeople,
  MdCalendarToday,
  MdLocalHospital,
  MdReceipt,
  MdMessage,
  MdAssessment,
  MdSettings,
} from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import { X, Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: MdDashboard, label: "Dashboard", path: "/" },
    { icon: MdPeople, label: "Patients", path: "/patients" },
    { icon: MdCalendarToday, label: "Appointments", path: "/appointments" },
    { icon: MdLocalHospital, label: "EMS", path: "/ems" },
    { icon: MdReceipt, label: "Invoicing", path: "/invoicing" },
    { icon: MdMessage, label: "Communications", path: "/communications" },
    {
      icon: MdAssessment,
      label: "Reports",
      path: "/reports",
      hasNotification: true,
    },
    { icon: MdSettings, label: "Settings", path: "/settings" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Icon for small screens */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(true)}>
          {!isOpen && <Menu className="w-7 h-7 text-gray-800" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#ebedef] shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static  md:flex md:flex-col `}
      >
        {/* Close Button for mobile */}
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Logo */}
        <div className="p-6 flex items-center space-x-3  border-gray-200">
          <img src={logo} alt="Logo" className="w-7 h-8" />
          <h1 className="text-xl font-semibold text-gray-800">curely</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col  h-full -mt-16 md:-mt-0 justify-center px-4 py-6 overflow-auto">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-r-4 border-blue-700"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`
                  }
                >
                  <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="flex-grow">{item.label}</span>
                  {item.hasNotification && (
                    <span className="bg-[#228380] rounded-full text-white px-2 text-xs font-semibold ml-auto">
                      16
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

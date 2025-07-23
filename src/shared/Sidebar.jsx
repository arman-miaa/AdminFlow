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
import logo from "../assets/logo.png"
import { NavLink } from "react-router";

const Sidebar = () => {
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

  return (
    <div className="w-64 h-screen md:flex flex-col hidden  ">
      {/* Logo/Brand */}
      <div className="p-6 flex items-center space-x-0">
        <img src={logo} alt="" className="w-7 h-8" />
        <h1 className="text-xl font-semibold text-gray-800">curely</h1>
      </div>

      {/* Navigation Menu */}

      <nav className="flex-1 flex items-center justify-center mb-12">
        <ul className="space-y-1 px-3 w-full">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-150 ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="flex-1">{item.label}</span>
                {item.hasNotification && (
                  <div className=" bg-[#228380] rounded-full text-white px-1">
                    16
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

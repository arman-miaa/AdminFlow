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

const Sidebar = () => {
  const menuItems = [
    { icon: MdDashboard, label: "Dashboard", active: false },
    { icon: MdPeople, label: "Patients", active: false },
    { icon: MdCalendarToday, label: "Appointments", active: false },
    { icon: MdLocalHospital, label: "EMS", active: false },
    { icon: MdReceipt, label: "Invoicing", active: false },
    { icon: MdMessage, label: "Communications", active: false },
    {
      icon: MdAssessment,
      label: "Reports",
      active: false,
      hasNotification: true,
    },
    { icon: MdSettings, label: "Settings", active: false },
  ];

  return (
    <div className="w-64 h-screen  flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6  ">
        <h1 className="text-xl font-semibold text-gray-800">curely</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-6">
        <ul className="space-y-1 px-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`
                  flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out
                  ${
                    item.active
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }
                `}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="flex-1">{item.label}</span>
                {item.hasNotification && (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

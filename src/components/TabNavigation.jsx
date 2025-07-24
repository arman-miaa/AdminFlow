const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { name: "General", icon: "📊" },
    { name: "Appointment", icon: "📅" },
    { name: "Revenue", icon: "💰" },
    { name: "Demography & Visit History", icon: "👥" },
    { name: "Operational", icon: "⚙️" },
    { name: "Inventory", icon: "📦" },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center md:px-6 py-4 pt-8">
        {/* Tabs */}
        <nav className="flex flex-wrap gap-1 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => onTabChange(tab.name)}
              className={`py-2 px-4 text-[13px] md:text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer ${
                activeTab === tab.name
                  ? "text-blue-600 bg-blue-50 "
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;

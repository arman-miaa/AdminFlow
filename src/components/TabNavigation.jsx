"use client"

import { MdFileDownload } from "react-icons/md"



const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { name: "General", icon: "📊" },
    { name: "Appointment", icon: "📅" },
    { name: "Revenue", icon: "💰" },
    { name: "Demography & Visit History", icon: "👥" },
    { name: "Operational", icon: "⚙️" },
    { name: "Inventory", icon: "📦" },
  ]

  return (
    <div className="border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-4">
        <nav className="flex space-x-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => onTabChange(tab.name)}
              className={`py-2 px-3 text-sm font-medium rounded-lg transition-colors ${
                activeTab === tab.name
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
        <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <span>Export</span>
          <MdFileDownload className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default TabNavigation

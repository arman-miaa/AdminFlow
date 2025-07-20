import { MdKeyboardArrowDown } from "react-icons/md";
import DashboardExtended from "../components/DashboardExtended";

const Dashboard = () => {
  const revenueCards = [
    {
      title: "This Year Revenue",
      amount: "$54,4162",
      change: "+12.5%",
      trend: "up",
    },
    {
      title: "This Month Revenue",
      amount: "$84379",
      change: "+8.2%",
      trend: "up",
    },
    {
      title: "This Week Revenue",
      amount: "$5403",
      change: "+4.3%",
      trend: "up",
    },
  ];

  const appointmentTypes = [
    { name: "General", count: 2574, color: "bg-blue-500" },
    { name: "Cardio", count: 2412, color: "bg-green-500" },
    { name: "Dental", count: 1412, color: "bg-purple-500" },
    { name: "Neuro", count: 2112, color: "bg-indigo-500" },
  ];

  const topPractitioners = [
    {
      name: "Mario Claire",
      role: "Cardiologist",
      appointments: 82,
      avatar: "MC",
      online: true,
    },
    {
      name: "Alexa Liras",
      role: "Neurologist",
      appointments: 71,
      avatar: "AL",
      online: true,
    },
    {
      name: "Maria Claire",
      role: "Dentist",
      appointments: 64,
      avatar: "MC",
      online: false,
    },
    {
      name: "Van Gough",
      role: "Surgeon",
      appointments: 45,
      avatar: "VG",
      online: true,
    },
  ];

  const monthlyRevenue = [65, 45, 55, 70, 85, 75, 90, 80, 95, 85, 75, 80];

  return (
    <div className="p-6 space-y-6">
      {/* Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {revenueCards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              {card.title}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">
                {card.amount}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-600">{card.change}</span>
                <div className="w-16 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded opacity-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Revenue Card */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-medium opacity-90">
              Your Total Revenue
            </h3>
            <p className="text-3xl font-bold">$54,4162</p>
            <p className="text-sm opacity-75 flex items-center mt-1">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Average growth
            </p>
          </div>
          <div className="w-32 h-16 bg-white bg-opacity-20 rounded-lg"></div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              "General",
              "Appointment",
              "Revenue",
              "Demography & Visit History",
              "Operational",
              "Inventory",
            ].map((tab, index) => (
              <button
                key={index}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  index === 0
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Periodic Summary */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Periodic Summary
            </h3>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Monthly</span>
                <MdKeyboardArrowDown />
              </button>
              <button className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Or Select Date</span>
                <MdKeyboardArrowDown />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Total Appointments */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Total Appointment</p>
              <p className="text-3xl font-bold text-gray-900">84294</p>
              <p className="text-sm text-gray-500">/mo</p>
            </div>

            {/* Client Happiness */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Client Happiness Score
              </p>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-3xl font-bold text-gray-900">4.9</p>
                <span className="text-2xl">😊</span>
              </div>
            </div>

            {/* Appointment Types */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Appointment Type</p>
              <div className="flex justify-center space-x-1">
                {appointmentTypes.map((type, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-8 h-12 ${type.color} rounded-sm mb-1`}
                    ></div>
                    <p className="text-xs text-gray-600">{type.count}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Average Daily Hours */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Average Daily Hours</p>
              <div className="relative w-16 h-16 mx-auto mb-2">
                <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">15</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">hrs</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Practitioners */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-900">
                  Top Practitioner
                </h4>
                <button className="text-sm text-blue-600">April ▼</button>
              </div>
              <div className="space-y-3">
                {topPractitioners.map((practitioner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {practitioner.avatar}
                        </div>
                        {practitioner.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {practitioner.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {practitioner.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {practitioner.appointments} Appointment
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Chart */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Revenue</h4>
                  <p className="text-2xl font-bold text-gray-900">$77584</p>
                </div>
                <div className="flex space-x-4 text-sm">
                  <button className="text-blue-600">Old Patient</button>
                  <button className="text-gray-500">New Patient</button>
                  <button className="text-gray-500">Total</button>
                  <button className="text-gray-500">April ▼</button>
                </div>
              </div>
              <div className="flex items-end space-x-2 h-32">
                {monthlyRevenue.map((value, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 rounded-t-sm flex-1"
                    style={{ height: `${value}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashboardExtended />
    </div>
  );
};

export default Dashboard;

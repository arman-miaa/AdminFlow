import { ChevronDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

const SummaryPanel = () => {
  const revenueData = [
    { month: "Jan", totalRevenue: 45, newPatients: 35, oldPatients: 25 },
    { month: "Feb", totalRevenue: 52, newPatients: 42, oldPatients: 32 },
    { month: "Mar", totalRevenue: 48, newPatients: 38, oldPatients: 28 },
    { month: "Apr", totalRevenue: 58, newPatients: 48, oldPatients: 38 },
    { month: "May", totalRevenue: 65, newPatients: 55, oldPatients: 45 },
    { month: "Jun", totalRevenue: 62, newPatients: 52, oldPatients: 42 },
    { month: "Jul", totalRevenue: 70, newPatients: 60, oldPatients: 50 },
    { month: "Aug", totalRevenue: 68, newPatients: 58, oldPatients: 48 },
    { month: "Sep", totalRevenue: 75, newPatients: 65, oldPatients: 55 },
    { month: "Oct", totalRevenue: 72, newPatients: 62, oldPatients: 52 },
    { month: "Nov", totalRevenue: 78, newPatients: 68, oldPatients: 58 },
    { month: "Dec", totalRevenue: 80, newPatients: 70, oldPatients: 60 },
  ];

  const summaryCards = [
    {
      title: "Total Revenue",
      value: "14573",
      growth: "15%",
      color: "bg-purple-100",
      trend: "up",
    },
    {
      title: "Total Inventory",
      value: "44573",
      growth: "15%",
      color: "bg-purple-100",
      trend: "up",
    },
    {
      title: "Average Consultation Time",
      value: "74573",
      growth: "15%",
      color: "bg-gray-100",
      trend: "up",
    },
    {
      title: "Avg Age Group",
      value: "64573",
      growth: "15%",
      color: "bg-purple-100",
      trend: "up",
    },
    {
      title: "Total Appointments",
      value: "84573",
      growth: "14%",
      color: "bg-blue-100",
      trend: "up",
    },
    {
      title: "New Patients",
      value: "54573",
      growth: "15%",
      color: "bg-green-100",
      trend: "up",
    },
    {
      title: "Average Patient Wait Time",
      value: "24573",
      growth: "10%",
      color: "bg-teal-100",
      trend: "up",
    },
    {
      title: "Cancellation Rate",
      value: "34573",
      growth: "20%",
      color: "bg-orange-100",
      trend: "up",
    },
  ];

  const mostRevenueData = [
    { source: "From Appointment", amount: 841, color: "bg-teal-500" },
    { source: "From Test", amount: 245, color: "bg-blue-500" },
    { source: "From Others", amount: 895, color: "bg-purple-500" },
  ];

  return (
    <div className=" bg-gray-50  p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Summary</h1>
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-sm border border-gray-300"
              >
                2025 <ChevronDown className="w-4 h-4 ml-1" />
              </label>
            </div>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-sm border border-gray-300"
              >
                Or Select Date <ChevronDown className="w-4 h-4 ml-1" />
              </label>
            </div>
          </div>
        </div>

        {/* Summary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {summaryCards.map((card, index) => (
            <div key={index} className={`card ${card.color} shadow-sm`}>
              <div className="card-body p-4">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  {card.title}
                </h3>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {card.value}
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-green-600 font-medium">
                        {card.growth}
                      </span>
                      <svg
                        className="w-4 h-4 ml-1 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-16 h-12 bg-white bg-opacity-50 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Summary Chart */}
          <div className="lg:col-span-2">
            <div className="card bg-white shadow-sm">
              <div className="card-body p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Revenue Summary
                  </h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          Total Revenue
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          New Patients
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          Old Patients
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        fontSize={12}
                      />
                      <YAxis axisLine={false} tickLine={false} fontSize={12} />
                      <Line
                        type="monotone"
                        dataKey="totalRevenue"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="newPatients"
                        stroke="#10B981"
                        strokeWidth={2}
                        dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="oldPatients"
                        stroke="#8B5CF6"
                        strokeWidth={2}
                        dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Most Revenue From */}
          <div className="lg:col-span-1">
            <div className="card bg-white shadow-sm">
              <div className="card-body p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Most revenue From
                </h3>

                {/* Circular Progress */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-1">
                      <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              C
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue Sources */}
                <div className="space-y-3">
                  {mostRevenueData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${item.color}`}
                        ></div>
                        <span className="text-sm text-gray-600">
                          {item.source}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;

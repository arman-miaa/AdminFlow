import {
  BarChart,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Calendar, Smile, Clock, TrendingUp, ChevronDown } from "lucide-react";
import { MdDateRange } from "react-icons/md";



const appointmentTypeData = [
  { name: "Type A", value: 4272, text: "Ofline", color: "#3B82F6" },
  { name: "Type B", value: 3412, text: "Online", color: "#06B6D4" },
  { name: "Type C", value: 1412, text: "Private", color: "#8B5CF6" },
  { name: "Type D", value: 2112, text: "Home", color: "#10B981" },
];

const DashboardSummaryStats = () => {
  const progressPercentage = 62; 

    return (
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Periodic Summary
          </h2>
          <div className="flex gap-4">
            <div className="dropdown dropdown-end bg-blue-50 rounded-full">
              <label tabIndex={0} className="btn btn-ghost btn-sm">
                Monthly <ChevronDown className="w-4 h-4 " />
              </label>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-sm">
                Or Select Date{" "}
                <MdDateRange className="w-6 h-6 ml-1 bg-blue-50 rounded-full p-1" />
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {/* Total Appointment Card */}
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/50 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm text-gray-600 font-medium">
                Total Appointment
              </h4>
              <p className="text-3xl font-bold text-gray-900">
                84294
                <span className="text-xs text-gray-500 ml-1">Total</span>
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full"></div>
          </div>

          {/* Client Happiness Score Card */}
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/50 rounded-lg">
                <Smile className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm text-gray-600 font-medium">
                Client Happiness Score
              </h4>
              <div className="flex items-center gap-2">
                <p className="text-3xl font-bold text-gray-900">
                  4.9
                  <span className="text-xs text-gray-500 ml-1">/5</span>
                </p>
                <span className="text-2xl">😊</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full"></div>
          </div>

          {/* Appointment Type Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm text-gray-600 font-medium">
                Appointment Type
              </h4>

              <div className="grid grid-cols-4 gap-4 text-center">
                {appointmentTypeData.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-end"
                  >
                    {/* 🔽 Bar Chart */}
                    <div className="h-14 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[{ value: item.value }]}>
                          <Bar
                            dataKey="value"
                            fill={item.color}
                            radius={[4, 4, 0, 0]}
                            barSize={16}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    {/* 🔼 Text Label */}
                    <span className="text-xs font-medium text-gray-500 mb-1">
                      {item.text}
                    </span>

                    {/* 🔼 Value */}
                    <span className="text-sm font-bold text-gray-800 mb-2">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Average Daily Hours Card */}
          <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/50 rounded-lg">
                <Clock className="w-5 h-5 text-cyan-600" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm text-gray-600 font-medium">
                Average Daily Hours
              </h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <p className="text-3xl font-bold text-gray-900">15</p>
                  <span className="text-xs text-gray-500 mt-2">hrs</span>
                </div>
                <div className="relative w-16 h-16">
                  <svg
                    className="w-16 h-16 transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#06B6D4"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 40 * (1 - progressPercentage / 100)
                      }`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>
    );
};

export default DashboardSummaryStats;

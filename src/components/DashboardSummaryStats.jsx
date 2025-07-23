import {
  BarChart,
  Bar,
  ResponsiveContainer,

} from "recharts";
import { ChevronDown } from "lucide-react";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <div className="card relative bg-white/70 border-white/30 rounded-4xl backdrop-blur-lg shadow-sm overflow-hidden">
            {/* Top Right Blur Circle */}
            <div className="absolute top-1 right-1 w-20 h-20 bg-purple-400 opacity-20 rounded-full blur-lg z-0" />

            {/* Main Content */}
            <div className="p-6 flex flex-col justify-between h-full relative z-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Total Appointment
              </h3>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-gray-900">
                  84294
                  <span className="text-lg text-gray-500 ml-1">total</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Happiness Score Card */}
          <div className="card bg-white/70 border-white/30 backdrop-blur-lg rounded-4xl shadow-sm">
            <div className=" p-6 flex justify-between flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Client Happiness Score
              </h3>
              <div className="flex items-center justify-between ">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  4.9
                  <span className="text-lg text-gray-500">/5</span>
                </div>

                <div className="relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-200 shadow-[0_4px_12px_rgba(255,215,100,0.6)]">
                    <span className="text-3xl">☺️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Type Card */}
          <div className="bg-white/70 border-white/30 backdrop-blur-lg rounded-4xl p-6 shadow-sm border "
         
          >
            <div className="space-y-4">
              <h4 className="text-lg text-gray-800 font-medium">
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
                            barSize={30}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    {/* 🔼 Text Label */}
                    <span className="text-xs font-medium text-gray-500 ">
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
          <div className="card  bg-white/70 border-white/30 backdrop-blur-lg rounded-4xl shadow-sm">
            <div className=" p-6 flex justify-between flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Average Daily Hours
              </h3>
              <div className="flex items-center justify-between ">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  4.9
                  <span className="text-lg text-gray-500">/5</span>
                </div>

                <div className="relative bottom-8  w-16 h-16">
                  <svg
                    className="w-16 h-16 transform rotate-10"
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
                      stroke="blue"
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
          </div>
        </div>
      </div>
    );
};

export default DashboardSummaryStats;

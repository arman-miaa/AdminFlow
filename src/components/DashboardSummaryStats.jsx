import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { ChevronDown } from "lucide-react";
import { MdDateRange } from "react-icons/md";
import { slideFromBottom } from "../animations/slide";
import { motion } from "framer-motion";

const appointmentTypeData = [
  { name: "Type A", value: 4272, text: "Offline", color: "#3B82F6" },
  { name: "Type B", value: 3412, text: "Online", color: "#06B6D4" },
  { name: "Type C", value: 1412, text: "Private", color: "#8B5CF6" },
  { name: "Type D", value: 2112, text: "Home", color: "#10B981" },
];

const AnimatedBar = (props) => {
  const { x, y, width, height, fill } = props;
  return (
    <motion.rect
      initial={{ height: 0, y: y + height }}
      animate={{ height, y }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      x={x}
      width={width}
      fill={fill}
      rx={4}
      ry={4}
    />
  );
};

const DashboardSummaryStats = () => {
  const progressPercentage = 62;

  return (
    <motion.div
      variants={slideFromBottom}
      initial="hidden"
      animate="show"
      className=""
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[13px] md:text-lg font-medium md:font-semibold text-gray-800">
          Periodic Summary
        </h2>
        <div className="flex md:gap-4">
          <div className="dropdown dropdown-end bg-blue-50 rounded-full">
            <label
              tabIndex={0}
              className="flex items-center px-2 mt-1 text-[12px] md:text-[15px]"
            >
              Monthly <ChevronDown className="w-3 md:w-4 h-4" />
            </label>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-sm">
              Or Select Date
              <MdDateRange className="w-6 h-6 md:ml-1 bg-blue-50 rounded-full p-1" />
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {/* Total Appointment Card */}
        <div className="card relative bg-white/70 border-white/30 rounded-4xl backdrop-blur-lg shadow-sm overflow-hidden">
          <div className="absolute top-1 right-1 w-20 h-20 bg-purple-400 opacity-20 rounded-full blur-lg z-0" />
          <div className="p-6 flex flex-col justify-between h-full relative z-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Total Appointment
            </h3>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-gray-900">
                84294<span className="text-lg text-gray-500 ml-1">total</span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Happiness Score Card */}
        <div className="card bg-white/70 border-white/30 backdrop-blur-lg rounded-4xl shadow-sm">
          <div className="p-6 flex justify-between flex-col h-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Client Happiness Score
            </h3>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                4.9<span className="text-lg text-gray-500">/5</span>
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
        <div className="bg-white/70 border-white/30 backdrop-blur-lg rounded-4xl p-4 py-2 shadow-sm border">
          <h4 className="text-lg text-gray-800 font-medium mb-2">
            Appointment Type
          </h4>
          <div className="grid grid-cols-4 gap-4 text-center">
            {appointmentTypeData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-end"
              >
                <div className="h-14 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[{ value: item.value }]}>
                      <Bar
                        dataKey="value"
                        shape={<AnimatedBar />}
                        fill={item.color}
                        radius={[4, 4, 0, 0]}
                        barSize={30}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <span className="text-xs font-medium text-gray-500">
                  {item.text}
                </span>
                <span className="text-sm font-bold text-gray-800 mb-2">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Average Daily Hours Card */}
        <div className="card bg-white/70 border-white/30 backdrop-blur-lg rounded-4xl shadow-sm">
          <div className="p-6 flex justify-between flex-col h-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Average Daily Hours
            </h3>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                4.9<span className="text-lg text-gray-500">/5</span>
              </div>
              <div className="relative bottom-2 w-16 h-16">
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
    </motion.div>
  );
};

export default DashboardSummaryStats;

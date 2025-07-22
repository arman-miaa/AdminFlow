import { ChevronDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import RevenueForm from "../shared/RevenueForm";

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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md rounded-lg p-3 text-sm">
        <p className="font-semibold text-gray-700">{label}, 2022</p>
        {payload.map((item, index) => (
          <p
            key={index}
            className="text-gray-600"
            style={{ color: item.color }}
          >
            ● {item.name}: ${item.value}k
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const SummaryPanel = () => {
  return (
    <div className="bg-gradient-to-br from-[#D0E0FF] via-white to-[#E4D8F5] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Summary Chart */}
          <div className="lg:col-span-2">
            <div className="card backdrop-blur-md bg-white/40 border border-white/20 shadow-md rounded-2xl">
              <div className="card-body p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Revenue Summary
                  </h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          Total Revenue
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          New Patients
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          Old Patients
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="h-66">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        fontSize={12}
                        stroke="#999"
                      />
                      <YAxis
                        domain={[0, 100]}
                        tickCount={6}
                        axisLine={false}
                        tickLine={false}
                        fontSize={12}
                        stroke="#999"
                      />
                      <Tooltip content={<CustomTooltip />} />

                      {/* Legend removed */}

                      <Line
                        type="monotone"
                        dataKey="totalRevenue"
                        stroke="#3B82F6"
                        strokeWidth={2.5}
                        dot={false}
                        name="Total Revenue"
                      />
                      <Line
                        type="basis"
                        dataKey="newPatients"
                        stroke="#8B5CF6"
                        strokeWidth={2.5}
                        dot={false}
                        name="New Patients"
                      />
                      <Line
                        type="natural"
                        dataKey="oldPatients"
                        stroke="#06B6D4"
                        strokeWidth={2.5}
                        dot={false}
                        name="Old Patients"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Most Revenue From */}
          <RevenueForm />
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;

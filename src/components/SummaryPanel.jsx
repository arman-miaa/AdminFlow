
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  
} from "recharts";
import RevenueForm from "../shared/RevenueForm";
import { useEffect, useState } from "react";


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
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmall(window.innerWidth < 768);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className=" md:p-6  mt-12 md:mt-4">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Summary Chart */}
          <div className="lg:col-span-2">
            <div className="card  bg-white/70 border border-white/30 backdrop-blur-lg shadow-md rounded-2xl">
              <div className="card-body px-0 md:p-6 ">
                {/* heading */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4  gap-2 pl-3 md:pl-0">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Revenue Summary
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
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

                {/* Chart */}
                <div className="h-60 sm:h-72 md:h-66 px-2 sm:px-4 md:px-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        fontSize={12}
                        stroke="#999"
                        interval={0}
                        angle={isSmall ? -60 : 0}
                        textAnchor="end"
                        height={isSmall ? 30 : 30}
                      />

                      <YAxis
                        domain={[0, 100]}
                        tickCount={6}
                        axisLine={false}
                        tickLine={false}
                        fontSize={12}
                        stroke="#999"
                        width={30}
                      />
                      <Tooltip content={<CustomTooltip />} />

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

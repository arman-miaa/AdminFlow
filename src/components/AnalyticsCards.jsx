import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import GenderCard from "../shared/GenderCard";
import { FaMale, FaFemale, FaChild } from "react-icons/fa";

const AnalyticsCards = () => {
  const ageGroupData = [
    { name: "0-18 years", value: 15, color: "#3B82F6" },
    { name: "19-35 years", value: 35, color: "#06B6D4" },
    { name: "36-50 years", value: 25, color: "#8B5CF6" },
    { name: "51-65 years", value: 20, color: "#10B981" },
    { name: "65+ years", value: 5, color: "#F59E0B" },
  ];
  // Custom label inside the pie slice
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
   
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={10}
        fontWeight="bold"
      >
        {ageGroupData[index].value}
      </text>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* Gender Card */}
      <GenderCard />

      {/* Age Group Card */}
      <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl md:rounded-4xl p-6 shadow-lg w-full ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Age Group</h3>
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
        </div>

        {/* Pie Chart */}
        <div className="flex justify-center items-center">
          <div className="relative w-40 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ageGroupData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {ageGroupData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center gap-1 text-cyan-600">
              <FaChild className="text-sm" />
              <FaMale className="text-md" />
              <FaFemale className="text-sm" />
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 mt-6 text-xs text-gray-700">
          {ageGroupData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Client Happiness Score Card */}
      <div className="card bg-white/70 border-white/30 rounded-2xl md:rounded-4xl shadow-sm">
        <div className=" p-6 flex justify-between flex-col h-full">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Client Happiness Score
          </h3>
          <div className="flex items-center justify-between ">
            <div className="text-6xl font-bold text-gray-900 mb-2">
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
    </div>
  );
};

export default AnalyticsCards;

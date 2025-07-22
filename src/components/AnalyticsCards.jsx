import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import GenderCard from "../shared/GenderCard";

const AnalyticsCards = () => {


  const ageGroupData = [
    { name: "0-18 years", value: 15, color: "#3B82F6" },
    { name: "19-35 years", value: 35, color: "#06B6D4" },
    { name: "36-50 years", value: 25, color: "#8B5CF6" },
    { name: "51-65 years", value: 20, color: "#10B981" },
    { name: "65+ years", value: 5, color: "#F59E0B" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* Gender Card */}
      <GenderCard />

      {/* Age Group Card */}
      <div className="card bg-white/70 border-white/70 rounded-4xl shadow-sm">
        <div className="card-body p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Age Group
          </h3>
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ageGroupData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {ageGroupData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-4 h-6 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-sm"></div>
                  <div className="w-4 h-6 bg-gradient-to-b from-purple-400 to-green-500 rounded-sm"></div>
                  <div className="w-4 h-6 bg-gradient-to-b from-green-400 to-yellow-500 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
            {ageGroupData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full`}
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Happiness Score Card */}
      <div className="card bg-white/70 border-white/70 rounded-4xl shadow-sm">
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

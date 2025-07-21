import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const AnalyticsCards = () => {
  const genderData = [
    { name: "Female", value: 65, color: "#06B6D4" },
    { name: "Male", value: 35, color: "#1E293B" },
  ];

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
      <div className="card bg-white shadow-sm">
        <div className="card-body p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Gender</h3>
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-xs">♀</span>
                  </div>
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xs">♂</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
              <span className="text-sm text-gray-600">Female</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-800"></div>
              <span className="text-sm text-gray-600">Male</span>
            </div>
          </div>
        </div>
      </div>

      {/* Age Group Card */}
      <div className="card bg-white shadow-sm">
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
      <div className="card bg-white shadow-sm">
        <div className="card-body p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Client Happiness Score
          </h3>
          <div className="flex flex-col items-center justify-center h-32">
            <div className="text-6xl font-bold text-gray-900 mb-2">4.9</div>
            <div className="text-lg text-gray-600 mb-3">/5</div>
            <div className="text-3xl">😊</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCards;

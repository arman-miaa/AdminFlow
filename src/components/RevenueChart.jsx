const RevenueChart = () => {
  const data = [
    { label: "From Appointment", value: 541, color: "bg-blue-500" },
    { label: "From Test", value: 245, color: "bg-green-500" },
    { label: "From Others", value: 95, color: "bg-purple-500" },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Most Revenue From</h3>
      <div className="flex items-center space-x-6">
        <div className="relative w-32 h-32">
          <div className="w-32 h-32 rounded-full border-8 border-blue-500 border-t-green-500 border-r-purple-500"></div>
          <div className="absolute inset-4 bg-gray-100 rounded-full"></div>
        </div>
        <div className="space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
              <span className="text-sm text-gray-600">{item.label}</span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;

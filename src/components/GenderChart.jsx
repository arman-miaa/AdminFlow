const GenderChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Gender</h3>
      <div className="flex justify-around">
        <div className="text-center">
          <div className="relative w-20 h-20 mb-2">
            <div className="w-20 h-20 rounded-full border-4 border-pink-500 border-t-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold">65%</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">Female</p>
        </div>
        <div className="text-center">
          <div className="relative w-20 h-20 mb-2">
            <div className="w-20 h-20 rounded-full border-4 border-blue-500 border-t-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold">35%</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">Male</p>
        </div>
      </div>
    </div>
  );
};

export default GenderChart;

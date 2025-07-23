

const RevenueForm = () => {
      const revenueData = [
        {
          source: "From appointment",
          amount: 541,
          color: "border-primary",
          bgColor: "bg-primary/10",
        },
        {
          source: "From Test",
          amount: 245,
          color: "border-secondary",
          bgColor: "bg-secondary/10",
        },
        {
          source: "From Others",
          amount: 995,
          color: "border-accent",
          bgColor: "bg-accent/10",
        },
      ];
  return (
    <div>
      {/* Most Revenue From Card */}
      <div className="card bg-white/70 border-white/30 backdrop-blur-lg h-full shadow-lg rounded-4xl">
        <div className="card-body">
          <h2 className="card-title 0 text-sm font-medium mb-4">
            Most revenue From
          </h2>

          {/* Compact Circular Chart */}
          <div className="flex justify-center items-center ">
            <div className="relative w-36 h-36">
              {/* Outer Ring */}
              <svg className="absolute top-0 left-0 w-full h-full">
                <circle
                  className="text-gray-300"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  r="56"
                  cx="50%"
                  cy="50%"
                />
                <circle
                  className="text-[#228380]"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  r="56"
                  cx="50%"
                  cy="50%"
                  strokeDasharray="352"
                  strokeDashoffset="100"
                  strokeLinecap="round"
                  transform="rotate(20 72 72)"
                />
              </svg>

              {/* Middle Ring */}
              <svg className="absolute top-3 left-3 w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)]">
                <circle
                  className="text-gray-300"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  r="40"
                  cx="50%"
                  cy="50%"
                />
                <circle
                  className="text-blue-500"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  r="40"
                  cx="50%"
                  cy="50%"
                  strokeDasharray="251"
                  strokeDashoffset="80"
                  strokeLinecap="round"
                  transform="rotate(5 50 50)"
                />
              </svg>

              {/* Inner Ring */}
              <svg className="absolute top-6 left-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)]">
                <circle
                  className="text-gray-300"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  r="24"
                  cx="50%"
                  cy="50%"
                />
                <circle
                  className="text-blue-700"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  r="24"
                  cx="50%"
                  cy="50%"
                  strokeDasharray="151"
                  strokeDashoffset="40"
                  strokeLinecap="round"
                  transform="rotate(20 50 50)"
                />
              </svg>
            </div>
          </div>

          {/* Revenue Legend */}
          <div className="space-y-3">
            {revenueData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      index === 0
                        ? "bg-teal-400"
                        : index === 1
                        ? "bg-blue-500"
                        : "bg-purple-500"
                    }`}
                  ></div>
                  <span className="text-sm text-base-content/70">
                    {item.source}
                  </span>
                </div>
                <span className="font-semibold text-base-content">
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueForm
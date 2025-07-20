import { LineChart, Line, ResponsiveContainer } from "recharts";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import bgImg from "../assets/bg.avif";

const RevenueOverview = () => {
  const cards = [
    {
      title: "This year Revenue",
      amount: "$84,379",
      percent: "+4.2%",
      compare: "Compare to last year",
      isDown: false,
      color: "#3B82F6", // Blue
      chartData: [
        { value: 100 },
        { value: 400 },
        { value: 200 },
        { value: 500 },
        { value: 250 },
        { value: 600 },
        { value: 300 },
        { value: 700 },
      ],
    },
    {
      title: "This Month Revenue",
      amount: "$5,403",
      percent: "+4.5%",
      compare: "Compare to last Month",
      isDown: false,
      color: "#8B5CF6", // Purple
      chartData: [
        { value: 200 },
        { value: 100 },
        { value: 300 },
        { value: 150 },
        { value: 400 },
        { value: 100 },
        { value: 450 },
        { value: 200 },
      ],
    },
    {
      title: "This Week Revenue",
      amount: "$2,867",
      percent: "-12.5%",
      compare: "Compare to last Week",
      isDown: true,
      color: "#0EA5E9", // Sky
      chartData: [
        { value: 300 },
        { value: 250 },
        { value: 500 },
        { value: 200 },
        { value: 550 },
        { value: 180 },
        { value: 600 },
        { value: 150 },
      ],
    },
  ];

  return (
    <div
      className="relative bg-[#d8d8d8] rounded-3xl p-3 bg-no-repeat bg-bottom-right overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "75% 60%",
        backgroundPosition: "bottom right",
      }}
    >
      <div className="flex flex-col lg:flex-row gap-2">
        {/* Info Box */}
        <div className="lg:w-1/4 w-full bg-transparent  text-black rounded-2xl p-6 flex flex-col justify-end">
          <p className="text-sm ">Your Total Revenue</p>
          <h2 className="text-3xl font-bold">$544,162</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-[#228380] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <FaArrowUp className="text-sm" />
              11%
            </span>
            <span className="text-xs text-gray-700">Average growth</span>
          </div>
        </div>

        {/* Revenue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/70  backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-lg"
            >
              <p className="text-sm mb-1">{item.title}</p>

              {/* Chart */}
              <div className="h-16 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={item.chartData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={item.color}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <h2 className="text-2xl font-bold flex items-center gap-2">
                {item.amount}
                <span
                  className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                    item.isDown ? " text-red-600" : " text-green-600"
                  }`}
                >
                  {item.percent}
                  {item.isDown ? <FaArrowDown /> : <FaArrowUp />}
                </span>
              </h2>
              <p className="text-xs  mt-2">{item.compare}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueOverview;

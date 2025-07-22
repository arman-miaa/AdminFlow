import { ChevronDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import DashboardSummaryStats from "./DashboardSummaryStats";
import { FaUser } from "react-icons/fa";
import user from "../assets/user.jpg"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.jpg"
import user4 from "../assets/user4.png"

const OverviewPanel = () => {
  const data = [
    { name: 'Jan', value: 65 },
    { name: 'Feb', value: 45 },
    { name: 'Mar', value: 55 },
    { name: 'Apr', value: 70 },
    { name: 'May', value: 85 },
    { name: 'Jun', value: 75 },
    { name: 'Jul', value: 90 },
    { name: 'Aug', value: 80 },
    { name: 'Sep', value: 95 },
    { name: 'Oct', value: 85 },
    { name: 'Nov', value: 75 },
    { name: 'Dec', value: 80 },
  ];



const topPractitioners = [
  { name: "Mario Claire", role: "Cardiologist", appointments: 82, avatar: user, online: true },
  { name: "Adrian Santos", role: "Neurologist", appointments: 77, avatar: user2, online: true },
  { name: "Maria Claire", role: "Dentist", appointments: 60, avatar: user3, online: true },
  { name: "Van Gough", role: "Surgeon", appointments: 45, avatar: user4, online: true },
];
  


  return (
    <div className="  px-6 ">
      {/* Periodic Summary Card */}
      <div className="card  ">
        <div className="card-body">
          {/* Summary Stats */}
          <DashboardSummaryStats />

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2 mt-8">
            {/* Top Practitioner */}
            <div className="bg-white/70 backdrop-blur-md border border-white/20 rounded-4xl p-4 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-600 p-1 rounded-full">
                    <FaUser className=" text-blue-100" />
                  </span>
                  <h3 className=" text-gray-900">
                    Top <br />{" "}
                    <span className="font-semibold">Practitioner</span>
                  </h3>
                </div>
                <div className="dropdown dropdown-end bg-blue-50 rounded-full">
                  <label tabIndex={0} className="btn btn-ghost btn-sm">
                    April <ChevronDown className="w-4 h-4 " />
                  </label>
                </div>
              </div>
              <div className="">
                {topPractitioners.map((practitioner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-1 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="avatar placeholder">
                          <div className="bg-blue-500 text-white rounded-full w-10">
                            <span className="text-sm font-medium">
                              <img src={practitioner.avatar} alt="" />
                            </span>
                          </div>
                        </div>
                        {practitioner.online && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {practitioner.name}
                          <span className="bg-[#228380] text-white rounded-full px-1 ml-1 text-[10px]">
                            2sd
                          </span>
                        </p>
                        <p className="text-sm text-gray-500">
                          {practitioner.role}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-1">
                      <p className="text-sm font-medium text-gray-900">
                        {practitioner.appointments}
                      </p>
                      <p className="text-xs text-gray-500">Appointment</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="bg-white/70 backdrop-blur-md border border-white/70 rounded-4xl p-4 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Revenue</h3>
                  <p className="text-2xl font-bold text-gray-900">$77584</p>
                </div>
                <div className="flex gap-4 text-sm">
                  {["Old Patient", "New Patient", "Total"].map((label, idx) => (
                    <button
                      key={idx}
                      className="flex items-center gap-1 text-black font-medium"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {label}
                    </button>
                  ))}
                  <div className="dropdown dropdown-end bg-blue-50 rounded-full">
                    <label tabIndex={0} className="btn btn-ghost btn-sm">
                      April <ChevronDown className="w-4 h-4 " />
                    </label>
                  </div>
                </div>
              </div>

              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 10, right: 20, left: 10, bottom: 5 }} 
                  >
                    <YAxis
                      width={40} 
                      domain={[0, 100]}
                      ticks={[0, 20, 40, 60, 80, 100]}
                      axisLine={false}
                      tickLine={false}
                      fontSize={12}
                      fill="#6B7280"
                      tickMargin={8} 
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      fontSize={12}
                      fill="#6B7280"
                      interval={0} 
                    />
                    <Bar
                      dataKey="value"
                      fill="#3B82F6"
                      radius={[2, 2, 0, 0]}
                      barSize={30}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPanel;
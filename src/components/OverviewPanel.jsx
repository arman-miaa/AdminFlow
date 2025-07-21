import { ChevronDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

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

  const appointmentTypes = [
    { name: "General", count: 4573, color: "bg-blue-500", height: "60%" },
    { name: "Cardio", count: 8412, color: "bg-teal-500", height: "80%" },
    { name: "Dental", count: 1412, color: "bg-purple-500", height: "40%" },
    { name: "Neuro", count: 2112, color: "bg-indigo-500", height: "50%" },
  ];

  const topPractitioners = [
    { name: "Mario Claire", role: "Cardiologist", appointments: 82, avatar: "MC", online: true },
    { name: "Adrian Santos", role: "Neurologist", appointments: 77, avatar: "AS", online: true },
    { name: "Maria Claire", role: "Dentist", appointments: 60, avatar: "MC", online: false },
    { name: "Van Gough", role: "Surgeon", appointments: 45, avatar: "VG", online: true },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Periodic Summary Card */}
      <div className="card bg-white shadow-lg">
        <div className="card-body">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Periodic Summary</h2>
            <div className="flex gap-4">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-sm">
                  Monthly <ChevronDown className="w-4 h-4 ml-1" />
                </label>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-sm">
                  Or Select Date <ChevronDown className="w-4 h-4 ml-1" />
                </label>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Total Appointment */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Total Appointment</p>
              <p className="text-3xl font-bold text-gray-900">84573</p>
              <p className="text-sm text-gray-500">Total</p>
            </div>

            {/* Client Happiness Score */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Client Happiness Score</p>
              <div className="flex items-center justify-center gap-2">
                <p className="text-3xl font-bold text-gray-900">4.9</p>
                <span className="text-2xl">😊</span>
              </div>
              <p className="text-sm text-gray-500">/5</p>
            </div>

            {/* Appointment Type */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Appointment Type</p>
              <div className="flex justify-center items-end gap-2 h-16">
                {appointmentTypes.map((type, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className={`w-6 ${type.color} rounded-sm`}
                      style={{ height: type.height }}
                    ></div>
                    <p className="text-xs text-gray-600 mt-1">{type.count}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Average Daily Hours */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Average Daily Hours</p>
              <div className="relative w-16 h-16 mx-auto mb-2">
                <div className="radial-progress border-4 border-blue-100" style={{ "--value": 75 } }>
                  <span className="text-lg font-bold">15</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">hrs</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Practitioner */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Top Practitioner</h3>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-sm">
                    April <ChevronDown className="w-4 h-4 ml-1" />
                  </label>
                </div>
              </div>
              <div className="space-y-3">
                {topPractitioners.map((practitioner, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="avatar placeholder">
                          <div className="bg-blue-500 text-white rounded-full w-10">
                            <span className="text-sm font-medium">{practitioner.avatar}</span>
                          </div>
                        </div>
                        {practitioner.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{practitioner.name}</p>
                        <p className="text-sm text-gray-500">{practitioner.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{practitioner.appointments}</p>
                      <p className="text-xs text-gray-500">Appointment</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Chart */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Revenue</h3>
                  <p className="text-2xl font-bold text-gray-900">$77584</p>
                </div>
                <div className="flex gap-4 text-sm">
                  <button className="text-blue-600 font-medium">Old Patient</button>
                  <button className="text-gray-500">New Patient</button>
                  <button className="text-gray-500">Total</button>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-sm">
                      April <ChevronDown className="w-4 h-4 ml-1" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false}
                      tickLine={false}
                      fontSize={12}
                      fill="#6B7280"
                    />
                    <YAxis hide />
                    <Bar 
                      dataKey="value" 
                      fill="#3B82F6" 
                      radius={[2, 2, 0, 0]}
                      barSize={20}
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
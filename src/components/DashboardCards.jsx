import { MapPin,  Navigation } from "lucide-react";
import { FaMars, FaVenus } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup,ZoomControl  } from "react-leaflet";

const DashboardCards = () => {
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

  const locationData = [
    { name: "Malibag", count: 15, color: "badge-primary" },
    { name: "Dhanmondi", count: 5, color: "badge-secondary" },
    { name: "Mohammadpur", count: 14, color: "badge-accent" },
  ];



  return (
    <div className="p-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        {/* Most Revenue From Card */}
        <div className="card bg-white/30 border-white/30 shadow-lg rounded-4xl">
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

        {/* Gender Card */}
        <div className="card bg-white/30 border-white/30 shadow-lg p-6 rounded-4xl">
          <h2 className="text-sm font-medium text-gray-800 mb-6">Gender</h2>
          <div className="flex justify-center items-end gap-10">
            {/* Female Column */}
            <div className="flex flex-col items-center w-20">
              {/* Container Box */}
              <div className="relative w-full h-56 bg-gray-200 rounded-full overflow-hidden flex flex-col justify-between py-3 px-2 border-gray-300 border">
                {/* Progress Fill */}
                <div className="absolute bottom-0 left-0 w-full h-[72%] bg-gradient-to-t from-blue-600 via-blue-500 to-blue-300"></div>

                {/* Percentage (top inside) */}
                <div className="relative rotate-90 z-10 text-xs mt-2 font-semibold text-gray-500 text-center">
                  72%
                </div>

                {/* Label (bottom inside) */}
                <div className="relative z-10 -rotate-90 text-gray-600 text-sm font-medium text-center">
                  Female
                </div>

                {/* Bottom Icon */}
                <div className="relative z-10 mx-auto mt-2 w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <FaVenus className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Male Column */}
            <div className="flex flex-col items-center w-20">
              {/* Container Box */}
              <div className="relative w-full h-56 bg-gray-200 rounded-full overflow-hidden flex flex-col justify-between py-3 px-2 border border-gray-300">
                {/* Progress Fill */}
                <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-green-600 via-teal-500 to-teal-300"></div>

                {/* Percentage (top inside) */}
                <div className="relative rotate-90 z-10 text-xs mt-2 font-semibold text-gray-500 text-center">
                  45%
                </div>

                {/* Label (bottom inside) */}
                <div className="relative z-10 -rotate-90 text-gray-600 text-sm font-medium text-center">
                  Male
                </div>

                {/* Bottom Icon */}
                <div className="relative z-10 mx-auto mt-2 w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <FaMars className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Location Trend Card */}
        <div className="card bg-white/30 border-white/30 shadow-lg lg:col-span-2 rounded-4xl">
          <div className="card-body">
            <h2 className="card-title text-base-content/70 text-sm font-medium mb-4">
              Patient Location Trend
            </h2>

            {/* Location Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {locationData.map((location, index) => (
                <div key={index} className={`badge ${location.color} gap-1`}>
                  {location.name}
                  <span>{location.count}</span>
                </div>
              ))}
            </div>

            {/* Map Container */}
            <div className="relative h-48 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden ">
              {/* Map Background Pattern */}
              <MapContainer
                center={[23.8103, 90.4125]}
                zoom={13}
                style={{ height: "400px", width: "100%" }}
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[23.8103, 90.4125]}>
                  <Popup>Dhaka City</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;

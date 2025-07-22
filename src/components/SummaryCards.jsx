import { ArrowUpRight, ChevronDown } from "lucide-react";
import { IoArrowUp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

const summaryData = [
  { title: "Total Revenue", value: 14573, change: "15%" },
  { title: "Total Inventory", value: 44573, change: "15%" },
  { title: "Average Consultation Time", value: 74573, change: "15%" },
  { title: "Avg Age Group", value: 64573, change: "15%" },
  { title: "Total Appointments", value: 84573, change: "14%" },
  { title: "New Patients", value: 54573, change: "15%" },
  { title: "Average Patient Wait Time", value: 24573, change: "10%" },
  { title: "Cancellation Rate", value: 34573, change: "70%" },
];

const SummaryCards = () => {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
           Summary
        </h2>
        <div className="flex gap-4">
          <div className="dropdown dropdown-end bg-blue-50 rounded-full">
            <label tabIndex={0} className="btn btn-ghost btn-sm">
              2025 <ChevronDown className="w-4 h-4 " />
            </label>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-sm">
              Or Select Date{" "}
              <MdDateRange className="w-6 h-6 ml-1 bg-blue-50 rounded-full p-1" />
            </label>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className="relative h-[150px] p-4 rounded-4xl overflow-hidden border border-white/70 bg-white/70 backdrop-blur-lg shadow-lg flex flex-col justify-between"
          >
            {/* Small Color Blur Blob Top-Right */}
            <div className="absolute top-1 right-1 w-20 h-20 bg-purple-400 opacity-20 rounded-full blur-lg z-0" />

            {/* Title */}
            <h3 className="text-sm font-medium text-gray-700 z-10">
              {item.title}
            </h3>

            {/* Value & Change in One Line */}
            <div className="flex items-center  gap-4 z-10">
              <p className="text-3xl font-bold text-gray-900">{item.value}</p>
              <div className="flex items-center text-teal-700 font-medium text-sm gap-1">
                <span>{item.change}</span>
                <IoArrowUp size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;

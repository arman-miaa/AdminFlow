import { MdMoreVert } from "react-icons/md";

const TodaysBooking = () => {
  const bookings = [
    {
      patient: "Md Ahmed Ullah",
      days: "Suffering from fever for 2 days",
      doctor: "Dr. Jena Doe",
      time: "20 Jan 2024",
      place: "Online",
      price: "$40.00",
      status: "Scheduled",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      patient: "Mamun Rashid",
      days: "Suffering from Stomach Fever",
      doctor: "Dr. Jhankar Singh",
      time: "20 Jan 2024",
      place: "In Clinic",
      price: "$35.00",
      status: "Re-Scheduled",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      patient: "Tariqul Islam",
      days: "Suffering from Headache last 5 Days",
      doctor: "Dr. Sarah Smith",
      time: "20 Jan 2024",
      place: "Online",
      price: "$15.00",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-800",
    },
    {
      patient: "Shahrukh Hossain",
      days: "Suffering from Fever for 2 days",
      doctor: "Dr. Oliver Smith",
      time: "20 Jan 2024",
      place: "In Clinic",
      price: "$60.00",
      status: "Checked-in",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      patient: "Mehrab Hassan",
      days: "Suffering from Fever for 2 days",
      doctor: "Dr. Tasmin Ali",
      time: "20 Jan 2024",
      place: "In Clinic",
      price: "$30.00",
      status: "In Progress",
      statusColor: "bg-orange-100 text-orange-800",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold">Today's Booking</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Patients
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Practitioner
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Booking Place
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.map((booking, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">
                      {booking.patient}
                    </p>
                    <p className="text-sm text-gray-500">{booking.days}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {booking.doctor}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {booking.time}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {booking.place}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {booking.price}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${booking.statusColor}`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MdMoreVert className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t bg-gray-50 flex items-center justify-between">
        <p className="text-sm text-gray-700">Showing result 01 of 25</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">
            ‹
          </button>
          <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">
            1
          </button>
          <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">
            2
          </button>
          <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">
            3
          </button>
          <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">
            4
          </button>
          <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodaysBooking;

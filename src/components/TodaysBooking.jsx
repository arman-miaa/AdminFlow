import { MdMoreVert } from "react-icons/md";
import DImg from "../assets/user.jpg";
import DImg2 from "../assets/user2.png";
import DImg3 from "../assets/user3.jpg";
import DImg4 from "../assets/user4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {motion} from "framer-motion"
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { slideFromBottom } from "../animations/slide";

const TodaysBooking = () => {
   const { ref, inView } = useScrollAnimation();
  const bookings = [
    {
      patient: "Md Ahmed Ullah",
      days: "Suffering from fever for 2 days",
      doctor: "Dr. Jena Doe",
      degree: "MBBS, SRFC",
      image: DImg,
      time: "20 Jan 2024",
      clock: "2:20pm",
      place: "Online",
      price: "$40.00",
      status: "Scheduled",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      patient: "Mamun Rashid",
      days: "Suffering from Stomach Fever",
      doctor: "Dr. Jhankar Singh",
      degree: "MBBS, SRFC",
      image: DImg2,
      time: "20 Jan 2024",
      clock: "2:20pm",
      place: "In Clinic",
      price: "$35.00",
      status: "Re-Scheduled",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      patient: "Tariqul Islam",
      days: "Suffering from Headache last 5 Days",
      doctor: "Dr. Sarah Smith",
      degree: "MBBS, SRFC",
      image: DImg3,
      time: "20 Jan 2024",
      clock: "2:20pm",
      place: "Online",
      price: "$15.00",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-800",
    },
    {
      patient: "Shahrukh Hossain",
      days: "Suffering from Fever for 2 days",
      doctor: "Dr. Oliver Smith",
      degree: "MBBS, SRFC",
      image: DImg4,
      time: "20 Jan 2024",
      clock: "2:20pm",
      place: "In Clinic",
      price: "$60.00",
      status: "Checked-in",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      patient: "Mehrab Hassan",
      days: "Suffering from Fever for 2 days",
      doctor: "Dr. Tasmin Ali",
      degree: "MBBS, SRFC",
      image: DImg,
      time: "20 Jan 2024",
      clock: "2:20pm",
      place: "In Clinic",
      price: "$30.00",
      status: "In Progress",
      statusColor: "bg-orange-100 text-orange-800",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={slideFromBottom}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="bg-white/70 border-white/30 backdrop-blur-lg rounded-2xl md:rounded-4xl shadow-md p-2 md:p-4   mt-8"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Today's Booking
      </h3>

      {/* Responsive table container */}
      <div className="overflow-x-auto rounded-xl ">
        <table className="min-w-[600px] w-full text-sm">
          <thead className="bg-white/30 text-gray-500 text-xs uppercase">
            <tr>
              <th className=" px-1 md:px-4 py-3">
                <input type="checkbox" className="form-checkbox" />
              </th>
              <th className="px-4 py-3 text-left">Patients</th>
              <th className="px-4 py-3 text-left">Practitioner</th>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Place</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.map((booking, index) => (
              <tr key={index} className="hover:bg-gray-100/40 transition">
                <td className="md:px-4 md:py-3">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="md:px-4 py-1 md:py-3">
                  <p className="text-[10px] md:text-sm font-medium text-gray-900">
                    {booking.patient}
                  </p>
                  <p className=" text-[10px] not-last:md:text-xs text-gray-500">
                    {booking.days}
                  </p>
                </td>
                <td className="md:px-4 md:py-3 text-sm text-gray-900">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={booking.image}
                      alt={booking.doctor}
                      className="w-6 h-6 md:w-8 md:h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className=" text-[11px] md:text-[12px] font-medium">
                        {booking.doctor}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-500">
                        {booking.degree}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-1 md:px-4 md:py-3 text-[11px] md:text-[12px] text-gray-900">
                  <p>{booking.time}</p>
                  <p className="text-xs text-gray-500">{booking.clock}</p>
                </td>
                <td className="md:px-4 md:py-3 text-[12px] md:text-[12px] text-gray-900">
                  {booking.place}
                </td>
                <td className="text-[11px] md:text-[16px] md:px-4 md:py-3 text-sm font-medium text-gray-900">
                  {booking.price}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-[11px] md:text-[12px] md:font-semibold px-2 py-1 rounded-full ${booking.statusColor}`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-gray-500 hover:text-gray-800">
                    <MdMoreVert className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-between items-center mt-4 px-1 gap-2 text-sm">
        <p className="text-gray-600">Showing result 01 of 25</p>
        <div className="flex gap-1">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <IoIosArrowBack className="text-gray-600" />
          </button>
          <button className="w-8 h-8 rounded-full bg-blue-500 text-white">
            1
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100">2</button>
          <button className="w-8 h-8 rounded-full bg-gray-100">3</button>
          <button className="w-8 h-8 rounded-full bg-gray-100">4</button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <IoIosArrowForward className="text-gray-600" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TodaysBooking;

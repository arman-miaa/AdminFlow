
import { MapContainer, TileLayer, Marker, Popup,ZoomControl  } from "react-leaflet";
import RevenueForm from "../shared/RevenueForm";
import GenderCard from "../shared/GenderCard";
import {motion} from "framer-motion"
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { scaleUp } from "../animations/slide";

const DashboardCards = () => {
    const { ref, inView } = useScrollAnimation();




  return (
    <motion.div
      ref={ref}
      variants={scaleUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="md:p-6  "
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-2">
        {/* Most Revenue From Card */}

        <RevenueForm />

        {/* Gender Card */}
        <GenderCard />

        {/* Patient Location Trend Card */}
        <div className="card  bg-white/70 border-white/30 shadow-lg backdrop-blur-lg lg:col-span-2 rounded-2xl md:rounded-4xl">
          <div className="card-body p-4">
            <h2 className="card-title text-base-content/70 text-sm font-medium mb-4">
              Patient Location Trend
            </h2>

            {/* Location Badges */}

            <div className="flex items-center gap-1 md:gap-4 font-medium">
              <div className="flex items-center gap-1 text-[11px] md:text-[16px] ">
                <h3 className="text-blue-800">Malibag</h3>
                <span className="text-blue-800 bg-blue-50 px-1 rounded-full">
                  35
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] md:text-[16px]">
                <h3 className="text-blue-500">Dhanmondi</h3>
                <span className="text-blue-600 bg-teal-50 px-1 rounded-full">
                  05
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] md:text-[16px]">
                <h3 className="text-green-600">Mohammadpur</h3>
                <span className="text-green-600 bg-green-50 px-1 rounded-full">
                  14
                </span>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <MapContainer
                center={[23.8103, 90.4125]}
                zoom={13}
                zoomControl={false}
                className="rounded-lg"
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[23.8103, 90.4125]}>
                  <Popup>Dhaka City</Popup>
                </Marker>

                <ZoomControl position="bottomright" />
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCards;

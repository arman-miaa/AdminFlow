import { MapPin,  Navigation } from "lucide-react";
import { FaMars, FaVenus } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup,ZoomControl  } from "react-leaflet";
import RevenueForm from "../shared/RevenueForm";
import GenderCard from "../shared/GenderCard";

const DashboardCards = () => {




  return (
    <div className="p-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        {/* Most Revenue From Card */}
     
        <RevenueForm/>

        {/* Gender Card */}
    <GenderCard/>

        {/* Patient Location Trend Card */}
        <div className="card bg-white/30 border-white/30 shadow-lg lg:col-span-2 rounded-4xl">
          <div className="card-body">
            <h2 className="card-title text-base-content/70 text-sm font-medium mb-4">
              Patient Location Trend
            </h2>

            {/* Location Badges */}

            <div className="flex items-center gap-4 font-medium">
              <div className="flex items-center gap-1 ">
                <h3 className="text-blue-800">Malibag</h3>
                <span className="text-blue-800 bg-blue-50 px-1 rounded-full">
                  35
                </span>
              </div>
              <div className="flex items-center gap-1 ">
                <h3 className="text-blue-500">Dhanmondi</h3>
                <span className="text-blue-600 bg-teal-50 px-1 rounded-full">
                  05
                </span>
              </div>
              <div className="flex items-center gap-1 ">
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
    </div>
  );
};

export default DashboardCards;

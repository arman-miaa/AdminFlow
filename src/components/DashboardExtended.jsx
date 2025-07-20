import RevenueChart from "./RevenueChart";
import GenderChart from "./GenderChart";
import PatientLocationMap from "./PatientLocationMap";
import TodaysBooking from "./TodaysBooking";

const DashboardExtended = () => {
  return (
    <div className="space-y-6">
      {/* Top Row - Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RevenueChart />
        <GenderChart />
        <PatientLocationMap />
      </div>

      {/* Bottom Row - Booking Table */}
          <TodaysBooking />
          
    </div>
  );
};

export default DashboardExtended;

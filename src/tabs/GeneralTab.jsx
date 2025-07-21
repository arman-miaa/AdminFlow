
import GenderChart from "../components/GenderChart";
import OverviewPanel from "../components/OverviewPanel"
import PatientLocationMap from "../components/PatientLocationMap";
import RevenueChart from "../components/RevenueChart";
import TodaysBooking from "../components/TodaysBooking";





const GeneralTab = () => {
  return (
    <div>
      <OverviewPanel />
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
}

export default GeneralTab
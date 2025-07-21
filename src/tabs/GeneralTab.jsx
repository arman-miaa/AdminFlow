
import DashboardCards from "../components/DashboardCards";

import OverviewPanel from "../components/OverviewPanel"

import TodaysBooking from "../components/TodaysBooking";





const GeneralTab = () => {
  return (
    <div>
      <OverviewPanel />

      {/* Top Row - Charts */}
      <DashboardCards/>

      {/* Bottom Row - Booking Table */}
      <TodaysBooking />
    </div>
  );
}

export default GeneralTab
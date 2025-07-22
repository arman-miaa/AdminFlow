import AnalyticsCards from "../components/AnalyticsCards"
import SummaryCards from "../components/SummaryCards"
import SummaryPanel from "../components/SummaryPanel"


const AppointmentTab = () => {
  return (
    <div>
      <SummaryCards/>
      <SummaryPanel />
      <AnalyticsCards/>
    </div>
  )
}

export default AppointmentTab
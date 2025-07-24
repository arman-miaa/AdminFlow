import { useState } from "react";

import RevenueOverview from "../components/RevenueOverview";
import TabNavigation from "../components/TabNavigation";
import GeneralTab from "../tabs/GeneralTab";
import AppointmentTab from "../tabs/AppointmentTab";
import RevenueTab from "../tabs/RevenueTab";
import DemographyTab from "../tabs/DemographyTab";
import OperationalTab from "../tabs/OperationalTab";
import InventoryTab from "../tabs/InventoryTab";




const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("General"); 



const renderTabContent = () => {
  switch (activeTab) {
    case "General":
      return <GeneralTab />;
    case "Appointment":
      return <AppointmentTab />;
    case "Revenue":
      return <RevenueTab />;
    case "Demography & Visit History":
      return <DemographyTab />;
    case "Operational":
      return <OperationalTab />;
    case "Inventory":
      return <InventoryTab />;
    default:
      return null;
  }
};


  return (
    <div className="p-6  ">
      <RevenueOverview />

      <div className=" ">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard;

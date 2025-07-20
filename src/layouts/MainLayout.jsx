import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-[#ebedef]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

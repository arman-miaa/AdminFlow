import { Outlet } from "react-router"
import Navbar from "../shared/Navbar"
import Sidebar from "../shared/Sidebar"


const MainLayout = () => {
  return (
      <div>
          <Navbar />
          <Outlet />
          <Sidebar/>
    </div>
  )
}

export default MainLayout
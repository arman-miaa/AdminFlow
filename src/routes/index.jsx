import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;

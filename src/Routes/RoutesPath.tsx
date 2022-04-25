import React from "react";
import { RoutesData } from "./Routes.type";
const DataEntries = React.lazy(() => import("@Pages/DataEntries/DataEntries"));
const Dashboard = React.lazy(() => import("@Pages/Dashboard/Dashboard"));

const RoutesPath: RoutesData[] = [
  {
    path: "/data-entries",
    component: DataEntries,
    title: "Data Entries",
  },

  {
    path: "/",
    component: Dashboard,
    title: "Dashboard",
  },
];

export default RoutesPath;

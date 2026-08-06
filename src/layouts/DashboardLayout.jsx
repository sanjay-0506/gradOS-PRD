import { useState } from "react";

import "./DashboardLayout.scss";

import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import Dashboard from "../pages/Dashboard/Dashboard";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={`dashboard-main ${
          collapsed ? "collapsed" : ""
        }`}
      >
        <Topbar />

        <main className="dashboard-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
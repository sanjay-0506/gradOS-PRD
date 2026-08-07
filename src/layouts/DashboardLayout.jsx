import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./DashboardLayout.scss";

import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* Main Content */}
      <div
        className={`dashboard-main ${
          collapsed ? "collapsed" : ""
        }`}
      >
        <Topbar />

        <main className="dashboard-content">
          {/* All child routes will render here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
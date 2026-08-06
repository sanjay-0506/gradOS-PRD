import "./DashboardLayout.scss";

import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import Dashboard from "../pages/Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />

        <main className="dashboard-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

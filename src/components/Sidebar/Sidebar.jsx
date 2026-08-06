import "./Sidebar.scss";
import {
  LayoutDashboard,
  GraduationCap,
  BriefcaseBusiness,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <div className="logo-box">G</div>

        <div>
          <h2>gradOS</h2>
          <span>Student Success</span>
        </div>
      </div>

      <nav className="sidebar__menu">
        <button className="menu-item active">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </button>

        <button className="menu-item">
          <BriefcaseBusiness size={20} />
          <span>Industry Readiness</span>
        </button>

        <button className="menu-item">
          <GraduationCap size={20} />
          <span>Learning Hub</span>
        </button>

        <button className="menu-item">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
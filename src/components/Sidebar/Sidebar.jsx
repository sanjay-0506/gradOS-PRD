import "./Sidebar.scss";
import {
  LayoutDashboard,
  GraduationCap,
  Settings,
  LifeBuoy,
  BookOpen,
  MessagesSquare,
  Lightbulb,
  BrainCircuit,
  ChevronDown,
  ChartNoAxesCombined,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar__logo">
        <div className="logo-box">G</div>
        <div className="logo-text">
          <h2>gradOS</h2>
          <span>Student Success</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sidebar__menu">
        <button className="menu-item active">
          <LayoutDashboard size={22} />
          <span>Dashboard</span>
        </button>

        {/* Industry Dropdown */}
        <div className="dropdown">
          <div className="menu-item dropdown-title">
            <ChartNoAxesCombined size={22} />
            <span className="industry-text">Industry Readiness</span>
            <ChevronDown size={18} className="dropdown-arrow" />
          </div>

          <div className="submenu">
            <button className="submenu-item">
              <BookOpen size={18} />
              <span>Domain</span>
            </button>
            <button className="submenu-item">
              <MessagesSquare size={18} />
              <span>Communication</span>
            </button>
            <button className="submenu-item">
              <Lightbulb size={18} />
              <span>Innovation</span>
            </button>
            <button className="submenu-item">
              <BrainCircuit size={18} />
              <span>Cognitive</span>
            </button>
          </div>
        </div>

        <button className="menu-item">
          <GraduationCap size={22} />
          <span>Learning Hub</span>
        </button>
      </nav>

      {/* Bottom Menu */}
      <div className="sidebar__bottom">
        <button className="menu-item">
          <Settings size={22} />
          <span>Settings</span>
        </button>
        <button className="menu-item">
          <LifeBuoy size={22} />
          <span>Help & Support</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

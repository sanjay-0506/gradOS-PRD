import { useState } from "react";
import { NavLink } from "react-router-dom";
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
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [industryOpen, setIndustryOpen] = useState(true);

  const toggleIndustry = () => {
    if (!collapsed) {
      setIndustryOpen(!industryOpen);
    }
  };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* ================= Logo ================= */}
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <div className="logo-box">G</div>

          {!collapsed && (
            <div className="logo-text">
              <h2>gradOS</h2>
              <span>Student Success</span>
            </div>
          )}
        </div>

        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <PanelLeftOpen size={18} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </button>
      </div>

      {/* ================= Navigation ================= */}
      <nav className="sidebar__menu">
        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
          title="Dashboard"
        >
          <LayoutDashboard size={22} />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        {/* Industry Readiness */}
        <div className="dropdown">
          <button
            className="menu-item dropdown-title"
            onClick={toggleIndustry}
            title="Industry Readiness"
          >
            <ChartNoAxesCombined size={22} />

            {!collapsed && (
              <>
                <span className="industry-text">
                  Industry Readiness
                </span>

                <ChevronDown
                  size={18}
                  className={`dropdown-arrow ${
                    industryOpen ? "rotate" : ""
                  }`}
                />
              </>
            )}
          </button>

          {!collapsed && (
            <div
              className={`submenu-wrapper ${
                industryOpen ? "open" : ""
              }`}
            >
              <div className="submenu">
                <NavLink
                  to="/industry-readiness"
                  className={({ isActive }) =>
                    `submenu-item ${isActive ? "active" : ""}`
                  }
                >
                  <BookOpen size={18} />
                  <span>Domain</span>
                </NavLink>

                <NavLink
                  to="/communication"
                  className={({ isActive }) =>
                    `submenu-item ${isActive ? "active" : ""}`
                  }
                >
                  <MessagesSquare size={18} />
                  <span>Communication</span>
                </NavLink>

                <NavLink
                  to="/innovation"
                  className={({ isActive }) =>
                    `submenu-item ${isActive ? "active" : ""}`
                  }
                >
                  <Lightbulb size={18} />
                  <span>Innovation</span>
                </NavLink>

                <NavLink
                  to="/cognitive"
                  className={({ isActive }) =>
                    `submenu-item ${isActive ? "active" : ""}`
                  }
                >
                  <BrainCircuit size={18} />
                  <span>Cognitive</span>
                </NavLink>
              </div>
            </div>
          )}
        </div>

        {/* Learning Hub */}
        <NavLink
          to="/learning-hub"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
          title="Learning Hub"
        >
          <GraduationCap size={22} />
          {!collapsed && <span>Learning Hub</span>}
        </NavLink>
      </nav>

      {/* ================= Bottom ================= */}
      <div className="sidebar__bottom">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
          title="Settings"
        >
          <Settings size={22} />
          {!collapsed && <span>Settings</span>}
        </NavLink>

        <button className="menu-item" title="Help & Support">
          <LifeBuoy size={22} />
          {!collapsed && <span>Help & Support</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
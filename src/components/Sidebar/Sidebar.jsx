import { useState } from "react";
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

          <div className="logo-box">
            G
          </div>

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

        <button
          className="menu-item active"
          title="Dashboard"
        >
          <LayoutDashboard size={22} />

          {!collapsed && (
            <span>Dashboard</span>
          )}
        </button>

        {/* ================= Industry ================= */}

        <div className="dropdown">

          <button
            className="menu-item dropdown-title"
            title="Industry Readiness"
            onClick={toggleIndustry}
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

                <button
                  className="submenu-item active"
                >
                  <BookOpen size={18} />
                  <span>Domain</span>
                </button>

                <button
                  className="submenu-item"
                >
                  <MessagesSquare size={18} />
                  <span>Communication</span>
                </button>

                <button
                  className="submenu-item"
                >
                  <Lightbulb size={18} />
                  <span>Innovation</span>
                </button>

                <button
                  className="submenu-item"
                >
                  <BrainCircuit size={18} />
                  <span>Cognitive</span>
                </button>

              </div>

            </div>

          )}

        </div>

        <button
          className="menu-item"
          title="Learning Hub"
        >
          <GraduationCap size={22} />

          {!collapsed && (
            <span>Learning Hub</span>
          )}
        </button>

      </nav>

      {/* ================= Bottom ================= */}

      <div className="sidebar__bottom">

        <button
          className="menu-item"
          title="Settings"
        >
          <Settings size={22} />

          {!collapsed && (
            <span>Settings</span>
          )}
        </button>

        <button
          className="menu-item"
          title="Help & Support"
        >
          <LifeBuoy size={22} />

          {!collapsed && (
            <span>Help & Support</span>
          )}
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;
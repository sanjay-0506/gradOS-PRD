import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  const [industryOpen, setIndustryOpen] = useState(true);

  const go = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isIndustry =
    location.pathname.startsWith("/domain") ||
    location.pathname.startsWith("/communication") ||
    location.pathname.startsWith("/innovation") ||
    location.pathname.startsWith("/cognitive");

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* Header */}

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

      {/* Navigation */}

      <nav className="sidebar__menu">

        {/* Dashboard */}

        <button
          className={`menu-item ${
            isActive("/") ? "active" : ""
          }`}
          onClick={() => go("/")}
          title="Dashboard"
        >
          <LayoutDashboard size={22} />

          {!collapsed && (
            <span>Dashboard</span>
          )}
        </button>

        {/* Industry */}

        <div className="dropdown">

          <button
            className={`menu-item dropdown-title ${
              isIndustry ? "active" : ""
            }`}
            title="Industry Readiness"
            onClick={() => {
              if (!collapsed) {
                setIndustryOpen(!industryOpen);
              }
            }}
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
                  className={`submenu-item ${
                    isActive("/domain")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => go("/domain")}
                >
                  <BookOpen size={18} />
                  <span>Domain</span>
                </button>

                <button
                  className={`submenu-item ${
                    isActive("/communication")
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    go("/communication")
                  }
                >
                  <MessagesSquare size={18} />
                  <span>Communication</span>
                </button>

                <button
                  className={`submenu-item ${
                    isActive("/innovation")
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    go("/innovation")
                  }
                >
                  <Lightbulb size={18} />
                  <span>Innovation</span>
                </button>

                <button
                  className={`submenu-item ${
                    isActive("/cognitive")
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    go("/cognitive")
                  }
                >
                  <BrainCircuit size={18} />
                  <span>Cognitive</span>
                </button>

              </div>

            </div>

          )}

        </div>

        {/* Learning Hub */}

        <button
          className={`menu-item ${
            isActive("/learning")
              ? "active"
              : ""
          }`}
          onClick={() => go("/learning")}
          title="Learning Hub"
        >
          <GraduationCap size={22} />

          {!collapsed && (
            <span>Learning Hub</span>
          )}
        </button>

      </nav>

      {/* Bottom */}

      <div className="sidebar__bottom">

        <button
          className={`menu-item ${
            isActive("/settings")
              ? "active"
              : ""
          }`}
          onClick={() => go("/settings")}
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
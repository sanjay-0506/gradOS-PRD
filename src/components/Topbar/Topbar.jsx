import "./Topbar.scss";

import {
  Bell,
  CalendarDays,
  Flame,
} from "lucide-react";

import profileImg from "../../assets/hero.png";

const Topbar = () => {
  return (
    <header className="topbar">

      <div className="topbar__left"></div>

      <div className="topbar__right">

        {/* Calendar */}
        <button className="icon-btn">
          <CalendarDays size={20} />
        </button>

        {/* Daily Streak */}
        <div className="streak-card">
          <Flame size={18} />
          <div>
            <strong>18</strong>
            <span>Day Streak</span>
          </div>
        </div>

        {/* Notifications */}
        <button className="icon-btn notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>

        {/* Profile */}
        <div className="profile">
          <img
            src={profileImg}
            alt="Profile Avatar"
          />

          <div>
            <h4>Taran</h4>
            <span>CSE • III Year</span>
          </div>
        </div>

      </div>

    </header>
  );
};

export default Topbar;
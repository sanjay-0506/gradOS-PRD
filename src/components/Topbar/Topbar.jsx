import "./Topbar.scss";

import {
  Search,
  Bell,
  Settings
} from "lucide-react";

const Topbar = () => {
  return (
    <header className="topbar">

      <div className="topbar__search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search insights, modules or careers..."
        />

      </div>

      <div className="topbar__right">

        <button className="icon-btn">
          <Bell size={20} />
        </button>

        <button className="icon-btn">
          <Settings size={20} />
        </button>

        <div className="profile">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
          />

          <div>
            <h4>Taran</h4>
            <span>Computer Science</span>
          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;
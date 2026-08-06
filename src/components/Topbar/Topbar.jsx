import "./Topbar.scss";

import {
  Bell,
  Settings
} from "lucide-react";

// Assuming you save your provided image file as profile-avatar.png in your assets directory
import profileImg from "../../assets/hero.png"; 

const Topbar = () => {
  return (
    <header className="topbar">

      <div className="topbar__left">
        {/* <h2>Dashboard</h2> */}
      </div>

      <div className="topbar__right">

        <button className="icon-btn">
          <Bell size={20} />
        </button>

        {/* <button className="icon-btn">
          <Settings size={20} />
        </button> */}

        <div className="profile">
          <img
            src={profileImg}
            alt="Profile Avatar"
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

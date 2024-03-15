import { FaDoorOpen } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import "./PortalSidebar.css";

import RoomioDarkLogo from "../../assets/SVGs/RoomioDarkLogo.svg";

const PortalSidebar = () => {
  return (
    <>
      <div className="portal-sidebar-container ">
        <div className="portal-sidebar-logo">
          <a href="/">
            <img src={RoomioDarkLogo} alt="Logo" />
          </a>
        </div>

        <div className="portal-sidemenu-items">
          <div className="portal-sidemenu-links portal-active-menu">
            <a href="#">
              <MdDashboard size="48" />
              <span className="fz32 portal-sidemenu-text">Dashboard</span>
            </a>
          </div>
          <div className="portal-sidemenu-links">
            <a href="#">
              <FaDoorOpen size="48" />
              <span className="fz32 portal-sidemenu-text">Rooms</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortalSidebar;

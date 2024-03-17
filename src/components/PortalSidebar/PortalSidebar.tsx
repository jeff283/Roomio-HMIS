import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

import { FaDoorOpen } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import "./PortalSidebar.css";

import RoomioDarkLogo from "../../assets/SVGs/RoomioDarkLogo.svg";

interface Props {
  children: ReactNode;
}

const PortalSidebar = ({ children }: Props) => {
  return (
    <>
      <div className="portal-sidebar-container ">
        <div className="portal-sidebar-logo">
          <NavLink to="/student-portal/dashboard">
            <img src={RoomioDarkLogo} alt="Logo" />
          </NavLink>
        </div>

        <div className="portal-sidemenu-items">
          {children}
          {/* <NavLink
            className={({ isActive }) => {
              return isActive
                ? "portal-sidemenu-links portal-active-menu"
                : "portal-sidemenu-links";
            }}
            to="/student-portal/dashboard"
          >
            <MdDashboard size="48" />
            <span className="fz32 portal-sidemenu-text">Dashboard</span>
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "portal-sidemenu-links portal-active-menu"
                : "portal-sidemenu-links";
            }}
            to="/student-portal/rooms"
          >
            <FaDoorOpen size="48" />
            <span className="fz32 portal-sidemenu-text">Rooms</span>
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default PortalSidebar;

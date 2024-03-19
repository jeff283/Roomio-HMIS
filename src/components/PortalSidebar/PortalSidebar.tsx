import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

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

        <div className="portal-sidemenu-items">{children}</div>
      </div>
    </>
  );
};

export default PortalSidebar;

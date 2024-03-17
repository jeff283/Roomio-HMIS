import PortalSidebar from "../PortalSidebar/PortalSidebar";
import PortalSidebarItem from "../PortalSidebarItem/PortalSidebarItem";
import { MdDashboard } from "react-icons/md";
import { FaDoorOpen, FaUser } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

const AdminPortalSidebar = () => {
  return (
    <>
      <PortalSidebar>
        <PortalSidebarItem
          itemName="Dashboard"
          itemLink="/admin-portal/dashboard"
          Icon=<MdDashboard size="48" />
        />
        <PortalSidebarItem
          itemName="Rooms"
          itemLink="/admin-portal/rooms"
          Icon=<FaDoorOpen size="48" />
        />
        <PortalSidebarItem
          itemName="Students"
          itemLink="/admin-portal/students"
          Icon=<PiStudentFill size="48" />
        />
        <PortalSidebarItem
          itemName="Users"
          itemLink="/admin-portal/users"
          Icon=<FaUser size="48" />
        />
      </PortalSidebar>
    </>
  );
};

export default AdminPortalSidebar;

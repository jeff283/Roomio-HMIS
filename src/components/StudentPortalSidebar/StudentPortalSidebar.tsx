import { MdDashboard } from "react-icons/md";
import PortalSidebar from "../PortalSidebar/PortalSidebar";
import PortalSidebarItem from "../PortalSidebarItem/PortalSidebarItem";
import { FaDoorOpen } from "react-icons/fa";

const StudentPortalSidebar = () => {
  return (
    <>
      <PortalSidebar>
        <PortalSidebarItem
          itemName="Dashboard"
          itemLink="/student-portal/dashboard"
          Icon=<MdDashboard size="48" />
        />
        <PortalSidebarItem
          itemName="Rooms"
          itemLink="/student-portal/rooms"
          Icon=<FaDoorOpen size="48" />
        />
      </PortalSidebar>
    </>
  );
};

export default StudentPortalSidebar;

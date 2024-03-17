import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";

import "./AdminPortalDashboard.css";
import "../PagesGlobal.css";
import AdminPortalSidebar from "../../components/AdminPortalSidebar/AdminPortalSidebar";

const AdminPortalDashboard = () => {
  return (
    <>
      <div className="d-flex">
        <AdminPortalSidebar />

        <div className="pages-content-body">
          <PortalTopBar pageTitle="Dashboard" />
          AdminPortalDashboard
        </div>
      </div>
    </>
  );
};

export default AdminPortalDashboard;

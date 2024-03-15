import { GoPersonFill } from "react-icons/go";
import "./PortalTopBar.css";

const PortalTopBar = () => {
  return (
    <div className="portal-top-container ">
      <div className="fz32 poppins-medium">Dashboard</div>
      <div className="portal-top-profile ">
        <div className="profile ">
          <GoPersonFill size="34" />
        </div>
        <div className="profile-name fz24 poppins-light">Ruth Wambua</div>
      </div>
    </div>
  );
};

export default PortalTopBar;

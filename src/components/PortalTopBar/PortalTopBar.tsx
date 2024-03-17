import { GoPersonFill } from "react-icons/go";
import "./PortalTopBar.css";

interface Props {
  pageTitle: string;
}

const PortalTopBar = ({ pageTitle }: Props) => {
  return (
    <div className="portal-top-container ">
      <div className="fz32 poppins-medium">{pageTitle}</div>
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

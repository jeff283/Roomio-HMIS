import { GoPersonFill } from "react-icons/go";
import "./PortalTopBar.css";
import { auth } from "../../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";

interface Props {
  pageTitle: string;
}

const PortalTopBar = ({ pageTitle }: Props) => {
  const [userName, setUserName] = useState("");

  const handleLogout = () => {
    signOut(auth);
    console.log("Out");
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser && currentUser.email) {
      setUserName(currentUser.email);
    }
  });

  return (
    <div className="portal-top-container ">
      <div className="fz32 poppins-medium">{pageTitle}</div>
      <div onClick={handleLogout} className="portal-top-profile ">
        <div className="profile ">
          <GoPersonFill size="34" />
        </div>
        <div className="profile-name fz24 poppins-light">{userName || ""}</div>
      </div>
    </div>
  );
};

export default PortalTopBar;

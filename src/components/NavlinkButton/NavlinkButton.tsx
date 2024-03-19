import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./NavlinkButton.css";

interface Props {
  dark?: boolean;
  children: ReactNode;
  toLink: string;
}

const NavlinkButton = ({ dark = false, toLink, children }: Props) => {
  return (
    <>
      {/* <div
        className={dark ? "navLinkBtn navLinkBtnDark" : "navLinkBtn debug-1"}
        >
        </div> */}
      <NavLink
        className={dark ? "navLinkBtn navLinkBtnDark" : "navLinkBtn"}
        to={toLink}
      >
        {children}
      </NavLink>
    </>
  );
};

export default NavlinkButton;

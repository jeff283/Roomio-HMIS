import "./NavbarHome.css";
import RoomioDarkLg from "../../assets/SVGs/RoomioDarkLogo.svg";
import { NavLink } from "react-router-dom";

const NavbarHome = () => {
  const switchPages = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
    console.log(id);
  };
  return (
    <>
      <div className="navbar-holder-container  ">
        <div className="navbar-logo ">
          <NavLink to="/">
            <img src={RoomioDarkLg} alt="Roomio Dark Logo" />
          </NavLink>
        </div>

        <div className="navbar-links fz24 ">
          <NavLink
            to="#home"
            onClick={(event) => {
              event.preventDefault();
              switchPages("home");
            }}
            // className="active-navbar-links"
            // className={({ isActive }) => {
            //   return isActive ? "active-navbar-links" : "";
            // }}
          >
            Home
          </NavLink>
          <NavLink
            to="#room"
            onClick={(event) => {
              event.preventDefault();
              switchPages("room");
            }}
          >
            Room
          </NavLink>
          <NavLink
            to="#about"
            onClick={(event) => {
              event.preventDefault();
              switchPages("about");
            }}
          >
            About Us
          </NavLink>
          <NavLink
            to="#contact"
            onClick={(event) => {
              event.preventDefault();
              switchPages("contact");
            }}
          >
            Contact Us
          </NavLink>
        </div>

        <div className="navbar-btn fz24 ">
          <div className="navbar-login navbar-btn-shared">
            <NavLink to="/login">Login</NavLink>
          </div>
          <div className="navbar-signup navbar-btn-shared">
            <NavLink to="/signup">Join Now</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarHome;

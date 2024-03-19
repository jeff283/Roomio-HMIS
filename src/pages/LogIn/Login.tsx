import "./Login.css";
import { NavLink } from "react-router-dom";
import RoomioDarkLogo from "../../assets/SVGs/RoomioDarkLogo.svg";
import AuthPageImg from "../../assets/images/AuthPageImg.png";
import AuthFormLoginUp from "../../components/AuthForm/AuthFormLoginUp";

const Login = () => {
  return (
    <>
      <div className="auth-body-content">
        <div className="auth-side-panel">
          <div className="auth-side-panel-nav fz20">
            <NavLink to="/#home">Home</NavLink>
            <NavLink to="/#room">Room</NavLink>
            <NavLink to="/#about">About Us</NavLink>
            <NavLink to="/#contact">Contact Us</NavLink>
          </div>

          <div className="auth-side-panel-content">
            <img
              className="team-members-img"
              src={AuthPageImg}
              alt="Team Members"
            />
            <div className="auth-side-panel-logo">
              <img src={RoomioDarkLogo} alt="Roomio Logo" />
            </div>
            <div className="poppins-light fz24">
              Effortless Management for Streamlined Operations & Elevated
              Student Living
            </div>
          </div>
        </div>

        <div className="auth-body-panel ">
          <AuthFormLoginUp />
        </div>
      </div>
    </>
  );
};

export default Login;

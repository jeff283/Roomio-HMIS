import "./ErrorPage.css";
import { TbError404 } from "react-icons/tb";
import NavlinkButton from "../../components/NavlinkButton/NavlinkButton";

const ErrorPage = () => {
  return (
    <>
      <div className="error-container">
        <div className="page-title ">
          <h1>Error Page 404</h1>
        </div>
        <div className="page-content">
          <TbError404 color="#fff" size={300} />
        </div>

        <div className="page-subtitle mb-4 fz28  poppins-light">
          Looks Like You are Lost?
        </div>

        <div className="page-cta">
          <NavlinkButton toLink="/">Go To Home</NavlinkButton>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

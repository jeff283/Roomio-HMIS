import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>HomePage</h1>
      <div>
        <NavLink to="/student-portal/dashboard">Student Dashboard</NavLink>
      </div>
      <div>
        <NavLink to="/admin-portal/dashboard">Admin Dashboard</NavLink>
      </div>
    </div>
  );
};

export default HomePage;

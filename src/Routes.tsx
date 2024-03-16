import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import StudentPortalDashboard from "./pages/StudentPortalDashboard/StudentPortalDashboard";
import StudentPortalRooms from "./pages/StudentPortalRooms/StudentPortalRooms";

const Router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/student-portal", element: <StudentPortalDashboard /> },
  { path: "/student-portal/dashboard", element: <StudentPortalDashboard /> },
  { path: "/student-portal/rooms", element: <StudentPortalRooms /> },
]);

export default Router;
